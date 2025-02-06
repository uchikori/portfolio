const path = require("path");
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogResult = await graphql(`
    query {
      allWpWebTips(sort: { date: DESC }) {
        nodes {
          databaseId
          slug
          title
          nodeType
        }
      }
      allWpType {
        nodes {
          id
          slug
          name
          databaseId
          description
          taxonomyName
          webTips {
            nodes {
              title
            }
          }
        }
      }
      allWpPost(sort: { date: DESC }) {
        nodes {
          databaseId
          slug
          title
          nodeType
        }
      }
      allWpCategory {
        nodes {
          id
          slug
          databaseId
          taxonomyName
          name
          description
          posts {
            nodes {
              title
            }
          }
        }
      }
    }
  `);

  if (blogResult.errors) {
    reporter.panicOnBuild(`GraphQLのクエリでエラーが発生しました`);
    return;
  }
  /************************************************************
   * GoogleAnalyticsから記事の閲覧数を取得
   ***********************************************************/
  // ライブラリをインポート
  const { BetaAnalyticsDataClient } = require("@google-analytics/data");
  const { log } = require("console");

  const propertyId = "341162119";

  // オプションを指定して、BetaAnalyticsDataClientのインスタンスを作成
  const credentialsFilePath = "./src/files/my-project-ga4.json";
  // const analyticsDataClient = new BetaAnalyticsDataClient({
  //   keyFilename: credentialsFilePath,
  // });
  console.log(process.env.GATSBY_CLIENT_EMAIL);
  console.log(process.env.GATSBY_PRIVATE_KEY);

  const privateKey = process.env.GATSBY_PRIVATE_KEY.replace(/\\n/g, "\n");

  const analyticsDataClient = new BetaAnalyticsDataClient({
    credentials: {
      client_email: process.env.GATSBY_CLIENT_EMAIL,
      private_key: process.env.GATSBY_PRIVATE_KEY.split(String.raw`\n`).join("\n"),
    },
  });

  // async function runReportFunc() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: "2022-08-01",
        endDate: "today",
      },
    ],
    dimensions: [
      {
        name: "pagePath",
      },
    ],
    dimensionFilter: {
      filter: {
        fieldName: "pagePath",
        stringFilter: {
          matchType: "BEGINS_WITH",
          value: "/web-tips/" /* ブログページに共通するパス */,
        },
      },
    },
    metrics: [
      {
        name: "screenPageViews",
      },
    ],
    orderBys: [
      {
        desc: true,
        metric: {
          metricName: "screenPageViews",
        },
      },
    ],
  });
  const formattedGaData = response.rows.map((row) => {
    // console.log(row.dimensionValues[0], row.metricValues[0]);
    return {
      value: row.dimensionValues[0].value,
      oneValue: row.metricValues[0].value,
    };
  });

  const rankingdata = formattedGaData
    //「/」で区切った配列から空欄文字列を削除した配列
    .map((item) => item.value.split("/").filter((str) => str !== ""))
    //その配列に対して、長さが1以上のもののみ抽出（つまり'web-tips'は除外）
    .filter((parts) => parts.length > 1)
    //IDを数値化
    .map((parts) => parseInt(parts.pop()));

  const rankingPostIds = rankingdata.slice(0, 5);
  console.log(rankingPostIds);

  // }
  // runReportFunc();

  /************************************************************
   * 記事ページの生成
   ***********************************************************/
  blogResult.data.allWpWebTips.nodes.forEach((node) => {
    createPage({
      path: `/web-tips/${node.databaseId}`,
      component: path.resolve(`./src/templates/blogpost-template.js`),
      context: {
        id: node.databaseId,
        reportData: rankingPostIds,
      },
    });
  });

  /************************************************************
   * 記事一覧ページの生成
   ***********************************************************/
  const blogPostsPerPage = 10;
  const blogPosts = blogResult.data.allWpWebTips.nodes.length;
  const blogPages = Math.ceil(blogPosts / blogPostsPerPage);

  Array.from({ length: blogPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/web-tips/` : `/web-tips/page-${index + 1}`,
      component: path.resolve(`./src/templates/blogarchive-template.js`),
      context: {
        skip: blogPostsPerPage * index,
        limit: blogPostsPerPage,
        currentPage: index + 1,
        isFirst: index + 1 === 1,
        isLast: index + 1 === blogPages,
        pages: blogPages,
        type: "web-tips",
        reportData: rankingPostIds,
      },
    });
  });

  /************************************************************
   * カテゴリー記事一覧ページの生成
   ***********************************************************/
  blogResult.data.allWpType.nodes.forEach((node) => {
    const typePostPerPage = 10;
    const typePosts = node.webTips.nodes.length;
    const typePages = Math.ceil(typePosts / typePostPerPage);

    const typeArray = Array.from({ length: typePages });

    typeArray.forEach((item, index) => {
      createPage({
        path: index === 0 ? `/class/${node.slug}/` : `/class/${node.slug}/page-${index + 1}`,
        component: path.resolve(`./src/templates/typearchive-template.js`),
        context: {
          typeId: node.id,
          typeName: node.name,
          typeSlug: node.slug,
          skip: typePostPerPage * index,
          limit: typePostPerPage,
          currentPage: index + 1,
          isFirst: index + 1 === 1,
          isLast: index + 1 === typePages,
          description: node.description,
          pages: typePages,
          isTaxonomyPage: true,
          taxonomyName: node.taxonomyName,
          reportData: rankingPostIds,
        },
      });
    });
  });

  /************************************************************
   * 実績ページの生成
   ***********************************************************/
  blogResult.data.allWpPost.nodes.forEach((node) => {
    createPage({
      path: `/${node.databaseId}/`,
      component: path.resolve(`./src/templates/workspost-template.js`),
      context: {
        id: node.databaseId,
      },
    });
  });
  /************************************************************
   * 実績一覧ページの生成
   ***********************************************************/
  const worksPostsPerPage = 10;
  const worksPosts = blogResult.data.allWpPost.nodes.length;
  const worksPages = Math.ceil(worksPosts / worksPostsPerPage);

  Array.from({ length: worksPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/works/` : `/works/page-${index + 1}`,
      component: path.resolve(`./src/templates/worksarchive-template.js`),
      context: {
        skip: worksPostsPerPage * index,
        limit: worksPostsPerPage,
        currentPage: index + 1,
        isFirst: index + 1 === 1,
        isLast: index + 1 === worksPages,
        pages: worksPages,
        type: "works",
      },
    });
  });
  /************************************************************
   * 実績カテゴリーページの生成
   ***********************************************************/
  blogResult.data.allWpCategory.nodes.forEach((node) => {
    const categoryPostPerPage = 10;
    const categoryPosts = node.posts.nodes.length;
    const categoryPages = Math.ceil(categoryPosts / categoryPostPerPage);

    const categoryArray = Array.from({ length: categoryPages });

    categoryArray.forEach((item, index) => {
      createPage({
        path: index === 0 ? `/category/${node.slug}/` : `/category/${node.slug}/page-${index + 1}/`,
        component: path.resolve(`./src/templates/categoryarchive-template.js`),
        context: {
          categoryId: node.id,
          categoryName: node.name,
          categorySlug: node.slug,
          skip: categoryPostPerPage * index,
          limit: categoryPostPerPage,
          currentPage: index + 1,
          isFirst: index + 1 === 1,
          isLast: index + 1 === categoryPages,
          description: node.description,
          pages: categoryPages,
          isTaxonomyPage: true,
          taxonomyName: node.taxonomyName,
        },
      });
    });
  });
};
