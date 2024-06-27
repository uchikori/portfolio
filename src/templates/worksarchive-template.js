import * as React from "react";
import { Layout } from "../components/Layout";
import { Link, graphql } from "gatsby";
import { MainVisual } from "../components/global/MainVisual";
import { PageHeader } from "../components/page/PageHeader";
import { Content } from "../components/global/Content";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { extractText } from "../lib/extract-text";
import { Pagenation } from "../components/blog/pagenation";
import { Seo } from "../components/Seo";

export default function Works(props) {
  const { data, pageContext } = props;
  return (
    <>
      <Layout hasLoadingObj={false}>
        <div className="page-wrapper gallery">
          <span className="backgroundImage">
            <StaticImage
              src="../images/gallery-background.jpg"
              layout="fullWidth"
              placeholder="blurred"
              quality={90}
              alt=""
            />
          </span>
          <div className="scroll-container">
            <MainVisual>
              <PageHeader
                titleImage="title-works"
                titleClass={"works"}
                subTitle={`これまでのお仕事の中でお客様から掲載の許可を頂いているもののみを公開しています。※他趣味制作のものも掲載`}
                alt="制作実績"
              />
            </MainVisual>
            <Content>
              {data.allWpPost.nodes.map((node) => {
                return (
                  <div className="content__gallery" key={node.databaseId}>
                    <div className="content__block">
                      <div className="gallery-item">
                        <div className="flex-block align-center">
                          <div className="flex-item seven-column">
                            <figure className="gallery-item__image">
                              <GatsbyImage
                                image={
                                  node.featuredImage.node.localFile
                                    .childImageSharp.gatsbyImageData
                                }
                                objectPosition={"50% 50%"}
                                layout="fullWidth"
                                alt={node.featuredImage.node.altText}
                              />
                            </figure>
                          </div>
                          <div className="flex-item five-column">
                            <span className="gallery-item__num">
                              {node.galleryNumber.galleryNum}
                            </span>
                            <h2 className="gallery-item__title">
                              {node.title}
                            </h2>

                            <span className="gallery-item__en-title">
                              {node.englishTitle.englishTitle}
                            </span>
                            <Link
                              to={`/category/${node.categories.nodes[0].slug}/`}
                              className="gallery-item__category"
                            >
                              {node.categories.nodes[0].name}
                            </Link>
                            <p className="gallery-item__description">
                              {extractText(node.content)}
                            </p>
                            <Link
                              to={`/${node.databaseId}/`}
                              className="gallery-item__link"
                            >
                              detail
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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
      <Seo
        pageTitle={"制作実績"}
        pageDesc={
          "これまでのお仕事の中でお客様から掲載の許可を頂いているもののみを公開しています。※他趣味制作のものも掲載"
        }
        pagePath={"/works/"}
        pageImg={data.wpPost.childImageSharp.original.src}
      />
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
                gatsbyImageData(
                  quality: 90
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  width: 668
                  height: 376
                )
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
