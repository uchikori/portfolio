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
   * 記事ページの生成
   ***********************************************************/
  blogResult.data.allWpWebTips.nodes.forEach((node) => {
    createPage({
      path: `/web-tips/${node.databaseId}`,
      component: path.resolve(`./src/templates/blogpost-template.js`),
      context: {
        id: node.databaseId,
      },
    });
  });

  /************************************************************
   * 記事一覧ページの生成
   ***********************************************************/
  const blogPostsPerPage = 20;
  const blogPosts = blogResult.data.allWpWebTips.nodes.length;
  const blogPages = Math.ceil(blogPosts / blogPostsPerPage);

  Array.from({ length: blogPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/web-tips/` : `/web-tips/${index + 1}`,
      component: path.resolve(`./src/templates/blogarchive-template.js`),
      context: {
        skip: blogPostsPerPage * index,
        limit: blogPostsPerPage,
        currentPage: index + 1,
        isFirst: index + 1 === 1,
        isLast: index + 1 === blogPages,
        pages: blogPages,
        type: "web-tips",
      },
    });
  });

  /************************************************************
   * カテゴリー記事一覧ページの生成
   ***********************************************************/
  blogResult.data.allWpType.nodes.forEach((node) => {
    const typePostPerPage = 20;
    const typePosts = node.webTips.nodes.length;
    const typePages = Math.ceil(typePosts / typePostPerPage);

    const typeArray = Array.from({ length: typePages });

    typeArray.forEach((item, index) => {
      createPage({
        path:
          index === 0
            ? `/class/${node.slug}/`
            : `/class/${node.slug}/${index + 1}`,
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
      path: index === 0 ? `/works/` : `/works/${index + 1}`,
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
    const categoryPostPerPage = 20;
    const categoryPosts = node.posts.nodes.length;
    const categoryPages = Math.ceil(categoryPosts / categoryPostPerPage);

    const categoryArray = Array.from({ length: categoryPages });

    categoryArray.forEach((item, index) => {
      createPage({
        path:
          index === 0
            ? `/category/${node.slug}/`
            : `/category/${node.slug}/${index + 1}/`,
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

// // ライブラリをインポート
// const { BetaAnalyticsDataClient } = require("@google-analytics/data");
// const { log } = require("console");

// // オプションを指定して、BetaAnalyticsDataClientのインスタンスを作成
// const credentialsFilePath = "./my-project-ga4.json";
// const analyticsDataClient = new BetaAnalyticsDataClient({
//   keyFilename: credentialsFilePath,
// });

// const propertyId = "341162119";

// async function runReportFunc() {
//   const [response] = await analyticsDataClient.runReport({
//     property: `properties/${propertyId}`,
//     dateRanges: [
//       {
//         startDate: "30daysAgo",
//         endDate: "today",
//       },
//     ],
//     dimensions: [
//       {
//         name: "pagePath",
//       },
//     ],
//     dimensionFilter: {
//       filter: {
//         fieldName: "pagePath",
//         stringFilter: {
//           matchType: "BEGINS_WITH",
//           value: "/web-tips/" /* ブログページに共通するパス */,
//         },
//       },
//     },
//     metrics: [
//       {
//         name: "screenPageViews",
//       },
//     ],
//     orderBys: [
//       {
//         desc: true,
//         metric: {
//           metricName: "screenPageViews",
//         },
//       },
//     ],
//   });

//   console.log("Report result:");
//   response.rows.forEach((row) => {
//     console.log(row.dimensionValues[0], row.metricValues[0]);
//   });
// }
// runReportFunc();
