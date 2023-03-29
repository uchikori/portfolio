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
};
