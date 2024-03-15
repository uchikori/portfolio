import { graphql, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Main } from "../components/blog/main";
import { Sidebar } from "../components/blog/sidebar";
import { Content } from "../components/global/Content";
import { MainVisual } from "../components/global/MainVisual";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";
import { useLocation } from "@reach/router";
import { extractText } from "../lib/extract-text";
export default function BlogPost({ data, pageContext }) {
  const rankingPostIds = pageContext.reportData;

  const location = useLocation();

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
        <div className="scroll-container">
          <MainVisual>
            <header className="main-visual__header">
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
                  />
                </figure>
              </div>
            </header>
          </MainVisual>
          <Content>
            <div className="content__publish">
              公開日
              <time dateTime={`${data.wpWebTips.date}`}>
                &emsp;{data.wpWebTips.date}
              </time>
            </div>
            <div className="content__block flex-block align-start">
              <Main
                content={data.wpWebTips.content}
                id={data.wpWebTips.databaseId}
                catId={data.wpWebTips.terms.nodes.map((cat) => cat.id)[0]}
              />
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
