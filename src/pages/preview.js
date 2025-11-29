import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { BlogContents } from "../components/blog/main";
import { Sidebar } from "../components/blog/sidebar";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";
import { useLocation } from "@reach/router";
import { extractText } from "../lib/extract-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faClock } from "@fortawesome/free-solid-svg-icons";
import { Share } from "../components/blog/Share";
import { ContentBlog } from "../components/global/ContentBlog";

export default function PreviewPage() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //　URLからIDを取得（WordPressのfunctions.phpで付与したもの）
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    console.log(id);

    if (!id) {
      setError("プレビューに必要なIDが見つかりません");
      setLoading(false);
      return;
    }

    const fetchPreviewdata = async () => {
      try {
        // 相対パスでアクセスすれば、ローカルでも本番でも正しくAPIが叩かれる
        const response = await fetch(`/api/preview-data?id=${id}`);

        if (!response.ok) {
          // API Route側でのエラー処理（400, 500など）
          const errorData = await response.json();
          throw new Error(errorData.error || `APIエラー: ステータス${response.status}`);
        }

        const data = await response.json();

        setPost(data);
      } catch (e) {
        console.error("プレビューデータの取得に失敗しました:", e);
        setError(e.message || "データの取得中に不明なエラーが発生しました。");
      } finally {
        setLoading(false);
      }
    };

    fetchPreviewdata();

    document.body.classList.add("web-tips-template");
  }, []);

  // 状態によるレンダリング
  if (loading) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <p>プレビューデータを読み込み中...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "40px", color: "red", textAlign: "center", border: "1px dashed red", margin: "20px" }}>
        プレビューエラーが発生しました:
        <br />
        <strong>{error}</strong>
      </div>
    );
  }

  if (!post) {
    return <div style={{ padding: "40px", textAlign: "center" }}>指定されたIDの記事が見つからないか、下書きではありません。</div>;
  }

  console.log(post);

  // 正常な表示
  return (
    <Layout hasLoadingObj={false}>
      <div className="page-wrapper web-tips">
        <span className="backgroundImage">
          <StaticImage src="../images/blog-background.jpg" layout="fullWidth" placeholder="blurred" quality={90} alt="background-image" />
        </span>
        <div id={post.databaseId} className="scroll-container web-tips" style={{ display: "flex", flexDirection: "column", gap: "8rem" }}>
          <ContentBlog>
            <div className="flex-block align-start" style={{ marginTop: "12rem" }}>
              <main className="nine-column bg-glass transitionElement">
                <article>
                  <div className="web-tips__hero">
                    <header className="web-tips__header">
                      <div className="web-tips__title">
                        <h1 className="title-line head-title">{post.title}</h1>
                      </div>
                      <div className="term">
                        <FontAwesomeIcon icon={faTag} className="tagIcon" />
                        <Link to={`/class/${post.terms.nodes[0].slug}`}>{post.terms.nodes[0].name}</Link>
                      </div>
                      <div className="content__publish">
                        <FontAwesomeIcon icon={faClock} className="clockIcon" />
                        <time dateTime={`${post.date}`}>{post.date}</time>
                      </div>
                    </header>
                    <figure className="web-tips__eyecatch ">
                      {/* <GatsbyImage
                        image={post.featuredImage.node.localFile.childImageSharp.gatsbyImageData }
                        alt={post.featuredImage.node.altText}
                        data-view-transition={`view-transition-${post.databaseId}`}
                        placeholder="none"
                        // className="transition-active"
                        // style={{
                        //   viewTransitionName: `view-transition-${post.databaseId}`,
                        // }}
                      /> */}
                    </figure>
                  </div>
                  <BlogContents content={post.content} id={post.databaseId} catId={post.terms.nodes.map((cat) => cat.id)[0]} />
                  <Share title={post.title} />
                  {/* <AdsenceContentBottom format={"autorelaxed"} path={location.pathname} /> */}
                </article>
              </main>
              <Sidebar />
            </div>
          </ContentBlog>
        </div>
      </div>
    </Layout>
  );
}

// export const Head = (props) => {
//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     //　URLからIDを取得（WordPressのfunctions.phpで付与したもの）
//     const params = new URLSearchParams(window.location.search);
//     const id = params.get("id");

//     console.log(id);

//     if (!id) {
//       setError("プレビューに必要なIDが見つかりません");
//       setLoading(false);
//       return;
//     }

//     const fetchPreviewdata = async () => {
//       try {
//         // 相対パスでアクセスすれば、ローカルでも本番でも正しくAPIが叩かれる
//         const response = await fetch(`/api/preview-data?id=${id}`);

//         if (!response.ok) {
//           // API Route側でのエラー処理（400, 500など）
//           const errorData = await response.json();
//           throw new Error(errorData.error || `APIエラー: ステータス${response.status}`);
//         }

//         const data = await response.json();

//         setPost(data);
//       } catch (e) {
//         console.error("プレビューデータの取得に失敗しました:", e);
//         setError(e.message || "データの取得中に不明なエラーが発生しました。");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPreviewdata();
//   }, []);

//   // 状態によるレンダリング
//   if (loading) {
//     return (
//       <div style={{ padding: "40px", textAlign: "center" }}>
//         <p>プレビューデータを読み込み中...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div style={{ padding: "40px", color: "red", textAlign: "center", border: "1px dashed red", margin: "20px" }}>
//         プレビューエラーが発生しました:
//         <br />
//         <strong>{error}</strong>
//       </div>
//     );
//   }

//   if (!post) {
//     return <div style={{ padding: "40px", textAlign: "center" }}>指定されたIDの記事が見つからないか、下書きではありません。</div>;
//   }

//   const description = extractText(post.excerpt);
//   return (
//     <>
//       <Seo
//         pageClass={"web-tips-template"}
//         pageTitle={post.title}
//         pageDesc={description}
//         // adsence={true}
//         // blogImg={data.wpWebTips.featuredImage.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src}
//       />
//     </>
//   );
// };
