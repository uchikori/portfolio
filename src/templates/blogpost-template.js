import { graphql, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { BlogContents } from "../components/blog/main";
import { Sidebar } from "../components/blog/sidebar";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";
import { useLocation } from "@reach/router";
import { extractText } from "../lib/extract-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { Share } from "../components/blog/Share";
import { ContentBlog } from "../components/global/ContentBlog";
import BackToTop from "../components/global/BackToTop";
// import { AdsenceContentBottom } from "../components/adsence";
export default function BlogPost({ data, pageContext }) {
  const rankingPostIds = pageContext.reportData;

  const location = useLocation();

  // 投稿日と更新日を比較
  const publishedDate = new Date(data.wpWebTips.date);
  const modifiedDate = new Date(data.wpWebTips.modified);
  const showModified = modifiedDate > publishedDate;

  return (
    <Layout hasLoadingObj={false}>
      <div className="page-wrapper web-tips">
        <span className="backgroundImage">
          <StaticImage src="../images/blog-background.jpg" layout="fullWidth" placeholder="blurred" quality={90} alt="background-image" />
        </span>
        <div id={data.wpWebTips.databaseId} className="scroll-container web-tips" style={{ display: "flex", flexDirection: "column", gap: "8rem" }}>
          <ContentBlog>
            <div className="flex-block align-start" style={{ marginTop: "12rem" }}>
              <main className="nine-column bg-glass transitionElement">
                <article>
                  <div className="web-tips__hero">
                    <header className="web-tips__header">
                      <div className="web-tips__title">
                        <h1 className="title-line head-title">{data.wpWebTips.title}</h1>
                      </div>
                      <div className="term">
                        <FontAwesomeIcon icon={faTag} className="tagIcon" />
                        <Link to={`/class/${data.wpWebTips.terms.nodes[0].slug}`}>{data.wpWebTips.terms.nodes[0].name}</Link>
                      </div>
                      <div className="content__publish">
                        <span className="published">
                          投稿日：<time dateTime={`${data.wpWebTips.date}`}>{data.wpWebTips.date}</time>
                        </span>
                        {showModified && (
                          <span className="updated">
                            更新日：<time dateTime={`${data.wpWebTips.modified}`}>{data.wpWebTips.modified}</time>
                          </span>
                        )}
                      </div>
                    </header>
                    <figure className="web-tips__eyecatch ">
                      <GatsbyImage
                        image={data.wpWebTips.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                        alt={data.wpWebTips.featuredImage.node.altText}
                        data-view-transition={`view-transition-${data.wpWebTips.databaseId}`}
                        placeholder="none"
                        // className="transition-active"
                        // style={{
                        //   viewTransitionName: `view-transition-${data.wpWebTips.databaseId}`,
                        // }}
                      />
                    </figure>
                  </div>
                  <BlogContents content={data.wpWebTips.content} id={data.wpWebTips.databaseId} catId={data.wpWebTips.terms.nodes.map((cat) => cat.id)[0]} />
                  <Share title={data.wpWebTips.title} url={location.href} />
                  {/* <AdsenceContentBottom format={"autorelaxed"} path={location.pathname} /> */}
                </article>
              </main>
              <Sidebar path={location.pathname} rankingData={rankingPostIds} />
            </div>
          </ContentBlog>
        </div>
      </div>
      <BackToTop />
    </Layout>
  );
}
export const Head = (props) => {
  const { data } = props;
  const location = useLocation();
  const description = extractText(data.wpWebTips.excerpt);

  // console.log(description);

  // 構造化データ
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "Article",
    headline: data.wpWebTips.title,
    author: {
      "@type": "Person",
      name: data.wpWebTips.lastEditedBy.node.name,
      url: "https://www.uchiwa-design.net/about",
    },
    datePublished: `${data.wpWebTips.dateGmt}+09:00`,
    dateModified: `${data.wpWebTips.modified}+09:00`,
    image: data.wpWebTips.featuredImage.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src,
  };
  return (
    <>
      <Seo
        pageClass={"web-tips-template"}
        pageTitle={data.wpWebTips.title}
        pageDesc={description}
        pagePath={location.pathname}
        // adsence={true}
        blogImg={data.wpWebTips.featuredImage.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src}
      />
      {<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </>
  );
};
export const query = graphql`
  query ($id: Int!) {
    wpWebTips(databaseId: { eq: $id }) {
      databaseId
      title
      content
      excerpt
      modified(formatString: "YYYY-MM-DD")
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
      date(formatString: "YYYY-MM-DD")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, quality: 90, width: 800, height: 450, pngOptions: { quality: 90 }, webpOptions: { quality: 90 })
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        siteUrl
        locale
      }
    }
  }
`;
