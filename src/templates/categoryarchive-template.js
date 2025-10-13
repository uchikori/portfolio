import * as React from "react";
import { Layout } from "../components/Layout";
import { Link, graphql } from "gatsby";
import { MainVisual } from "../components/global/MainVisual";
import { PageHeader } from "../components/page/PageHeader";
import { Content } from "../components/global/Content";
import { StaticImage } from "gatsby-plugin-image";
import { Pagenation } from "../components/blog/pagenation";
import { Seo } from "../components/Seo";
import { GalleryItem } from "../components/gallery";

export default function Works(props) {
  const { data, pageContext } = props;

  // console.log(pageContext);

  return (
    <>
      <Layout hasLoadingObj={false}>
        <div className="page-wrapper gallery">
          <span className="backgroundImage">
            <StaticImage src="../images/gallery-background.jpg" layout="fullWidth" placeholder="blurred" quality={90} alt="" />
          </span>
          <div className="scroll-container">
            <MainVisual>
              {/* <PageHeader titleImage={`${pageContext.taxonomyName}-${pageContext.categoryName}`} titleClass={"main"} subTitle={pageContext.description} alt={pageContext.name} /> */}
              <PageHeader titleImage={""} titleClass={"text"} subTitle={pageContext.description} alt={pageContext.categorySlug} />
            </MainVisual>
            <Content>
              <div className="gallery-items">
                {data.allWpPost.nodes.map((node) => {
                  return <GalleryItem node={node} key={node.databaseId} />;
                })}
              </div>
              <Pagenation pageContext={pageContext} />
            </Content>
          </div>
        </div>
      </Layout>
    </>
  );
}
export const Head = (props) => {
  const { data, pageContext } = props;
  return (
    <>
      <Seo pageTitle={pageContext.categoryName} pageDesc={pageContext.description} pagePath={`/category/${pageContext.categorySlug}`} pageImg={data.wpPost.childImageSharp.original.src} />
    </>
  );
};
export const query = graphql`
  query ($categoryId: String!, $skip: Int!, $limit: Int!) {
    allWpPost(sort: { date: DESC }, skip: $skip, limit: $limit, filter: { terms: { nodes: { elemMatch: { id: { eq: $categoryId } } } } }) {
      nodes {
        databaseId
        slug
        title
        galleryNumber {
          galleryNum
        }
        englishTitle {
          englishTitle
        }
        categories {
          nodes {
            slug
            name
          }
        }
        content
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED, width: 668, height: 416)
              }
            }
          }
        }
      }
    }
    wpPost: file(relativePath: { eq: "gallery-background.jpg" }) {
      childImageSharp {
        original {
          src
          height
          width
        }
      }
    }
  }
`;
