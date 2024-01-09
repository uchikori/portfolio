import { graphql, useStaticQuery } from "gatsby";
import { Analytics } from "@vercel/analytics/react";
import * as React from "react";

export const Seo = (props) => {
  const { pageClass, pageTitle, pageDesc, pagePath, pageImg, blogImg } = props;
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          locale
        }
      }
    }
  `);
  const title = pageTitle
    ? `${pageTitle}|${data.site.siteMetadata.title} `
    : data.site.siteMetadata.title;
  const description = pageDesc || data.site.siteMetadata.description;
  const url = pagePath
    ? `${data.site.siteMetadata.siteUrl}${pagePath}`
    : data.site.siteMetadata.siteUrl;
  const imgurl = pageImg
    ? `${data.site.siteMetadata.siteUrl}${pageImg}`
    : `${data.site.siteMetadata.siteUrl}${blogImg}` ||
      `${data.site.siteMetadata.siteUrl}/home-firstview.webp`;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content={data.site.siteMetadata.title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={data.site.siteMetadata.locale} />
      <meta property="og:image" content={imgurl} />
      <meta name="twitter:card" content="summary_large_image" />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3842486595943279"
        crossOrigin="anonymous"
      ></script>
      {/* <script defer src="https://sdk.form.run/js/v2/formrun.js"></script> */}
      <script src="https://www.google.com/recaptcha/api.js"></script>
      <Analytics />
      <body className={pageClass} />
    </>
  );
};
