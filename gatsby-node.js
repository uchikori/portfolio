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
      allWpType {
        nodes {
          id
          slug
          name
          databaseId
          description
          webTips {
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
        blogPages: blogPages,
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
        },
      });
    });
  });
};
