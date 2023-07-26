/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

const path = require("path");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `UCHIWA Creative Studio`,
    description: `札幌市のホームページ制作・デザイン制作スタジオ`,
    siteUrl: `https://uchiwa-design.net`,
    locale: `ja_JP`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          `http://shin-pf.uchiwa-design.net/graphql`,
        verbose: true,
        schema: {
          queryDepth: 15,
          circularQueryLimit: 10,
          timeout: 60000,
          requestConcurrency: 50,
        },
        html: {
          useGatsbyImage: true,
        },
        useACF: true,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: path.join[(__dirname, "components/styles")],
        },
        // Override the file regex for Sass
        sassRuleTest: /\.s(a|c)ss$/,
        // Override the file regex for CSS modules
        sassRuleModulesTest: /\.module\.s(a|c)ss$/,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-TXSC6XJ`,
        includeInDevelopment: true,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UCHIWA Creative Studio 札幌市のホームページ制作・デザイン制作`,
        short_name: `UCHIWA Creative Studio`,
        start_url: `/`,
        background_color: `#0E1037`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
        createLinkInHead: true,
      },
    },
  ],
};
