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
  const analyticsDataClient = new BetaAnalyticsDataClient({
    credentials: {
      client_email: "test-556@my-project-ga4-382101.iam.gserviceaccount.com",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC6wx4eWC+yOMM2\nIcdYPuNV8rSJJfTwu8bs0bX2vIfMWHFVFrpwaswx2TWCp1SsvoRKdCE0UIXbee+I\nzXUxzIbcwC7U9ZFPxSeVsfNpyscScTmFcZWzGmIfNlssK/kcQFmdE7NetyTX6yiK\n+Dv85nXx8kObI0PcPjqvhUjt94CM1H/WquPWs4iaj8+XnmbQo61gf4FKjdJBXL7t\neGLc+4MUkNQXW9PKI4YASfB/VniJIqx7SVAbPhaUCRtwwQEYBwtG8mr/CV2XFqVt\ncj4J+QfOVdO8BZ5Es9WH3SnzNh8kmfa2FXiUxL+VWQufDxUNvPFG05eCoq4qC7tA\nPaTciBdzAgMBAAECggEAUThLn9ywGWywEJmODOWEjjs3ojFcnVi8QP9OiBgjYo3P\n87YnrH31gXQ53jERFPLhq1NnoU2nePRFZJQddGPC/ruhYkHNSQivl11FQ2vJOU7+\nOfdUqAhARdyot8QD2PJvRm1r4zP4lOISxqT/yZMcFfVKy2wBtgVmFjD7r2mkgRmm\nroJEgBIXxf+PN0VcR3N/bihrl2mrIniICy2wyLIuXFc6QN42pVptVCChLdD7VEeb\nSGcitwwJCFK5sP0bP0msZh8BghksWIPz65HieSj0/cxYFSbytwBlyiiqGf63+/H+\nrf5owS6s+VUrAFnoXtEVeQCWsA7mtOnEFzjl9lwaMQKBgQDd36KN04mD1cdpMMUw\nNmX+yd5opgGfrHeNh0maSeNk1NzKGi9j6ZzFL2xjbG+YwaRpth6O6mrn3oz8jFO7\nflferdU7g8jwNQ59UUBJHYWlAVxH/UMJlUDzQiWbfNQ1beon2L6MYkg1wAlW/30E\n0rjrQbHPX8GRYFnQE09+aVgCKwKBgQDXfPTs7WCKp9ktPa2b6exr7119bIPEdZYn\njGCQF2bGNc8EGtQTOJ9gR6L8GRtozKrhCRF4B5AvF4k8BiEw5uU9k4FpWjopqQ9Y\n80iCsDi7L+j5kwaYQrylp+WPiMwnZaHRN9Dbgxad3QRJ21/dXfzztGZhlNJNklDb\ni/PTQ5dD2QKBgBRXBBfsZJbpajaCehFJa2BIMVN2pH922B7pYB382BPOT89XRzDp\noa2SA2W58yEV33SxdWu0ochP5qzgUGzH0FZhqUKjejBLLODgKfyJ8E6IKWWQGi0u\nuZ2TWs8+SlX7lZPBkvZbrDMBP9nx4gwnJTyr8RkJtj0VkCY7HvZ/wcmxAoGANBlV\nCjd2IO/l9Sc1Yz3SWGI+A0YKMaSQUi2BZzURNxjpXT+zSJZnChsnz7WuR887/T55\nB8EkXg5dsrJ0seMRR6rzHeqfp1Tljgb74AUFIlS6CiU+8e8otxB50xMq8NeEoRXS\nnE/8VtyJ3eV5Lwc7UhyqqCsYEYMvo3UZ1VlBKDkCgYEAtbsh0/ylJ8hQAcbEjrse\np6u/ScnULbymlD1zKdif/10oAoSsyV4tkcCSO0k4CndPTzjURLOuRS33XrAw4lbj\n5m4EoNotwK29t44HgPB4AT8iMkHZWiZ1A8p4KwGqjO6C/1SHR5eAEZJOZkspzKJn\nslc6e3MJnt7X5wwdfEQgumQ=\n-----END PRIVATE KEY-----\n",
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
        reportData: rankingPostIds,
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
