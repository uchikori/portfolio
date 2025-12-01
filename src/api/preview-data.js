export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Missing id" });
  }

  // 認証情報の作成（Basic認証）
  const token = Buffer.from(`${process.env.WP_USER}:${process.env.WP_PASSWORD}`).toString("base64");

  // 投稿のステータスを取得
  const statusQuery = `
    query getStatus($id: ID!) {
      webTips(id: $id, idType: DATABASE_ID) {
        status
      }
    }
  `;

  const statusResponse = await fetch(process.env.GATSBY_WPGRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${token}`,
    },
    body: JSON.stringify({
      query: statusQuery,
      variables: { id },
    }),
  });

  const statusData = await statusResponse.json();

  if (statusData.errors) {
    console.error(statusData.errors);
    return res.status(500).json({ error: "Status fetch failed", details: statusData.errors });
  }

  // 投稿のステータス(publish or draft)
  const postStatus = statusData.data?.webTips?.status;

  // 投稿のステータスが取得できない場合はエラー
  if (!postStatus) {
    return res.status(404).json({ error: "Post not found" });
  }

  // ----------------------------
  // ② 記事状態に応じて asPreview を切り替える
  // ----------------------------
  const isPreview = postStatus !== "publish"; // 公開でなければ preview 扱い

  // WordPressへのクエリ発行
  const query = `
       query getDraft($id: ID! $asPreview: Boolean) {
         webTips(id: $id, idType: DATABASE_ID, asPreview: $asPreview) {
                databaseId
                title
                content
                excerpt
                modified
                dateGmt
                lastEditedBy {
                    node {
                        name
                    }
                }
                terms {
                    nodes {
                        slug
                        name
                        id
                    }
                }
                date
                featuredImage {
                    node {
                        altText
                        mediaItemUrl
                    }
                }
            }
        }
      `;

  // ----------------------------
  // ③ 本体データ取得（asPreview: true/false）
  // ----------------------------
  try {
    const response = await fetch(`${process.env.GATSBY_WPGRAPHQL_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${token}`,
      },
      body: JSON.stringify({
        query,
        variables: { id, asPreview: isPreview },
      }),
    });

    // JSONとしてパースし直す (ここでJSONエラーが出ないかチェック)
    const data = await response.json();

    // ... (GraphQLエラーチェック) ...
    if (data.errors) {
      console.error("GraphQL Error:", data.errors);
      return res.status(500).json({ error: "GraphQL query failed", details: data.errors });
    }

    // const data = await response.json();

    //フロントエンドにデータを返す
    res.status(200).json(data.data.webTips);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
