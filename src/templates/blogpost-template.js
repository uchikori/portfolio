import { graphql, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { BlogContents } from "../components/blog/main";
import { Sidebar } from "../components/blog/sidebar";
import { Content } from "../components/global/Content";
import { MainVisual } from "../components/global/MainVisual";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";
import { useLocation } from "@reach/router";
import { extractText } from "../lib/extract-text";
import { useViewTransition } from "../lib/useViewTransition";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faClock } from "@fortawesome/free-solid-svg-icons";
export default function BlogPost({ data, pageContext }) {
  const rankingPostIds = pageContext.reportData;

  const location = useLocation();

  // useViewTransition();

  // useEffect(() => {
  // const parentIdElement = document.getElementById(data.wpWebTips.databaseId);
  // const target = parentIdElement.querySelector(".gatsby-image-wrapper");
  // if (target) {
  //   target.classList.add("transition-active");
  // }
  // console.log(target);
  // }, []);

  return (
    <Layout hasLoadingObj={false}>
      <div className="page-wrapper web-tips">
        <span className="backgroundImage">
          <StaticImage
            src="../images/blog-background.jpg"
            layout="fullWidth"
            placeholder="blurred"
            quality={90}
            alt=""
          />
        </span>
        <div
          id={data.wpWebTips.databaseId}
          className="scroll-container web-tips"
          style={{ display: "flex", flexDirection: "column", gap: "8rem" }}
        >
          {/* <MainVisual> */}
          {/* <header className="main-visual__header">
              <div className="main-visual__left">
                <div className="main-visual__title">
                  <h1 className="title-line head-title">
                    {data.wpWebTips.title}
                  </h1>
                </div>
                <div className="term">
                  <Link to={`/class/${data.wpWebTips.terms.nodes[0].slug}`}>
                    {data.wpWebTips.terms.nodes[0].name}
                  </Link>
                </div>
              </div>
              <div className="main-visual__right">
                <figure className="first-image">
                  <GatsbyImage
                    image={
                      data.wpWebTips.featuredImage.node.localFile
                        .childImageSharp.gatsbyImageData
                    }
                    alt={data.wpWebTips.featuredImage.node.altText}
                    data-view-transition={`view-transition-${data.wpWebTips.databaseId}`}
                    // className="transition-active"
                    // style={{
                    //   viewTransitionName: `view-transition-${data.wpWebTips.databaseId}`,
                    // }}
                  />
                </figure>
              </div>
            </header> */}
          {/* <div className="web-tips__hero" style={{ marginTop: "12rem" }}>
            <header className="web-tips__header">
              <div className="web-tips__title">
                <h1 className="title-line head-title">
                  {data.wpWebTips.title}
                </h1>
              </div>
              <div className="term">
                <FontAwesomeIcon icon={faTag} />
                <Link to={`/class/${data.wpWebTips.terms.nodes[0].slug}`}>
                  {data.wpWebTips.terms.nodes[0].name}
                </Link>
              </div>
            </header>
            <figure className="web-tips__eyecatch first-image">
              <GatsbyImage
                image={
                  data.wpWebTips.featuredImage.node.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt={data.wpWebTips.featuredImage.node.altText}
                data-view-transition={`view-transition-${data.wpWebTips.databaseId}`}
                // className="transition-active"
                // style={{
                //   viewTransitionName: `view-transition-${data.wpWebTips.databaseId}`,
                // }}
              />
            </figure>
            <div className="content__publish">
              公開日：
              <time dateTime={`${data.wpWebTips.date}`}>
                {data.wpWebTips.date}
              </time>
            </div>
          </div> */}
          {/* </MainVisual> */}
          <Content>
            <div
              className="flex-block align-start"
              style={{ marginTop: "12rem" }}
            >
              <main className="nine-column bg-glass transitionElement">
                <article>
                  <div className="web-tips__hero">
                    <header className="web-tips__header">
                      <div className="web-tips__title">
                        <h1 className="title-line head-title">
                          {data.wpWebTips.title}
                        </h1>
                      </div>
                      <div className="term">
                        <FontAwesomeIcon icon={faTag} className="tagIcon" />
                        <Link
                          to={`/class/${data.wpWebTips.terms.nodes[0].slug}`}
                        >
                          {data.wpWebTips.terms.nodes[0].name}
                        </Link>
                      </div>
                      <div className="content__publish">
                        <FontAwesomeIcon icon={faClock} className="clockIcon" />
                        <time dateTime={`${data.wpWebTips.date}`}>
                          {data.wpWebTips.date}
                        </time>
                      </div>
                    </header>
                    <figure className="web-tips__eyecatch ">
                      <GatsbyImage
                        image={
                          data.wpWebTips.featuredImage.node.localFile
                            .childImageSharp.gatsbyImageData
                        }
                        alt={data.wpWebTips.featuredImage.node.altText}
                        data-view-transition={`view-transition-${data.wpWebTips.databaseId}`}
                        // className="transition-active"
                        // style={{
                        //   viewTransitionName: `view-transition-${data.wpWebTips.databaseId}`,
                        // }}
                      />
                    </figure>
                  </div>
                  <BlogContents
                    content={data.wpWebTips.content}
                    id={data.wpWebTips.databaseId}
                    catId={data.wpWebTips.terms.nodes.map((cat) => cat.id)[0]}
                  />
                </article>
              </main>
              <Sidebar path={location.pathname} rankingData={rankingPostIds} />
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}
export const Head = (props) => {
  const { data } = props;
  const location = useLocation();
  const description = extractText(data.wpWebTips.content);

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
    image:
      data.wpWebTips.featuredImage.node.localFile.childImageSharp
        .gatsbyImageData.images.fallback.src,
  };
  return (
    <>
      <Seo
        pageClass={"web-tips-template"}
        pageTitle={data.wpWebTips.title}
        pageDesc={description}
        pagePath={location.pathname}
        adsence={true}
        blogImg={
          data.wpWebTips.featuredImage.node.localFile.childImageSharp
            .gatsbyImageData.images.fallback.src
        }
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
      date(formatString: "YYYY-MM-DD")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                quality: 90
                width: 800
                height: 450
                pngOptions: { quality: 90 }
                webpOptions: { quality: 90 }
              )
            }
          }
        }
      }
    }
  }
`;
