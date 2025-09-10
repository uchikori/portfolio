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
  return (
    <>
      <Layout hasLoadingObj={false}>
        <div className="page-wrapper gallery">
          <span className="backgroundImage">
            <StaticImage src="../images/gallery-background.jpg" layout="fullWidth" placeholder="blurred" quality={90} alt="" />
          </span>
          <div className="scroll-container">
            <MainVisual>
              <PageHeader titleImage="title-works" titleClass={"works"} subTitle={`これまでのお仕事の中でお客様から掲載の許可を頂いているもののみを公開しています。※他趣味制作のものも掲載`} alt="制作実績" />
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
  const { data } = props;
  return (
    <>
      <Seo pageTitle={"制作実績"} pageDesc={"これまでのお仕事の中でお客様から掲載の許可を頂いているもののみを公開しています。※他趣味制作のものも掲載"} pagePath={"/works/"} pageImg={data.wpPost.childImageSharp.original.src} />
    </>
  );
};
export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allWpPost(sort: { date: DESC }, skip: $skip, limit: $limit) {
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
                gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED, width: 368, height: 207)
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
