import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { Main } from "../components/blog/main";
import { Sidebar } from "../components/blog/sidebar";
import { Content } from "../components/global/Content";
import { MainVisual } from "../components/global/MainVisual";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";

export default function blogPost({ data }) {
  console.log(data);
  return (
    <Layout hasLoadingObj={false}>
      <div className="page-wrapper web-tips">
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
              <Main content={data.wpWebTips.content} />
              <Sidebar></Sidebar>
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}
export const Head = () => {
  return (
    <>
      <Seo pageClass={"web-tips-template"} />
    </>
  );
};
export const query = graphql`
  query {
    wpWebTips(databaseId: { eq: 650 }) {
      title
      content
      terms {
        nodes {
          slug
          name
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
              )
            }
          }
        }
      }
    }
  }
`;
