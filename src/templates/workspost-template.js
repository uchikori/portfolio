import { graphql, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Content } from "../components/global/Content";
import { MainVisual } from "../components/global/MainVisual";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";
import { extractText } from "../lib/extract-text";
import { useLocation } from "@reach/router";
export default function WorksPost(props) {
  const { data } = props;
  return (
    <Layout hasLoadingObj={false}>
      <div className="page-wrapper page-single">
        <span className="backgroundImage">
          <StaticImage src="../images/service-background.jpg" layout="fullWidth" placeholder="blurred" quality={90} alt="" />
        </span>
        <div className="scroll-container">
          <MainVisual>
            <header className="main-visual__header">
              <div className="main-visual__title">
                {data.wpPost.categories.nodes.map((node) => {
                  return (
                    <Link to={node.link} className="single-category">
                      {node.name}
                    </Link>
                  );
                })}
                <h1 className="single-title">{data.wpPost.title}</h1>
                <span className="single-en-title">{data.wpPost.englishTitle.englishTitle}</span>
              </div>
            </header>
          </MainVisual>
          <Content>
            <div className="content__block">
              <figure className="first-image">
                <GatsbyImage image={data.wpPost.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={data.wpPost.featuredImage.node.altText} />
              </figure>
              {/* <div className="gallery-meta">
                <div className="gallery-meta__item">
                  <p className="gallery-meta__title">client</p>
                  <div className="gallery-meta__info">{data.wpPost.galleryMetaGroup.galleryMetaGroup.galleryType}</div>
                </div>
                <div className="gallery-meta__item">
                  <p className="gallery-meta__title">my role</p>
                  <div className="gallery-meta__info">{data.wpPost.galleryMetaGroup.galleryMetaGroup.galleryRole}</div>
                </div>
                <div className="gallery-meta__item">
                  <p className="gallery-meta__title">technorogies</p>
                  <div className="gallery-meta__info">{data.wpPost.galleryMetaGroup.galleryMetaGroup.galleryTech}</div>
                </div>
                <div className="gallery-meta__item">
                  <p className="gallery-meta__title">year</p>
                  <div className="gallery-meta__info">{data.wpPost.galleryMetaGroup.galleryMetaGroup.galleryYear}</div>
                </div>
              </div> */}
            </div>
            <div className="content__block" style={{ padding: "0" }}>
              <div className="wp-content__body" dangerouslySetInnerHTML={{ __html: data.wpPost.content }}></div>
            </div>
            <div className="content__block">
              <figure className="mockup-image__pc">
                <GatsbyImage image={data.wpPost.mockUpPc.mockupImagePc.localFile.childImageSharp.gatsbyImageData} alt={data.wpPost.mockUpPc.mockupImagePc.altText} />
              </figure>
            </div>
            {data.wpPost.mockUpMovie.mockupMovie ? (
              <div className="content__block">
                <div className="mockup-image__wrap">
                  <figure className="mockup-image__video content__inner">
                    <video src={data.wpPost.mockUpMovie.mockupMovie.mediaItemUrl} loop autoPlay muted playsInline></video>
                  </figure>
                </div>
              </div>
            ) : (
              ""
            )}
            {data.wpPost.mockUpImageTab.mockupImageTab ? (
              <div className="content__block">
                <figure className="mockup-image__tab">
                  <GatsbyImage image={data.wpPost.mockUpImageTab.mockupImageTab.localFile.childImageSharp.gatsbyImageData} alt={data.wpPost.mockUpImageTab.mockupImageTab.altText} />
                </figure>
                <figure className="mockup-image__sp">
                  <GatsbyImage image={data.wpPost.mockUpImageSp.mockupImageSp.localFile.childImageSharp.gatsbyImageData} alt={data.wpPost.mockUpImageSp.mockupImageSp.altText} />
                </figure>
              </div>
            ) : (
              ""
            )}
            {data.wpPost.cssMockupImage.cssMockupImage ? (
              <div className="content__block">
                <div className="mockup__iphone">
                  <div className="device iphone">
                    <div className="sidebt bt1"></div>
                    <div className="sidebt bt2"></div>
                    <div className="sidebt bt3"></div>
                    <div className="pwrbt"></div>
                    <div className="border">
                      <div className="case">
                        <div className="camera"></div>
                        <div className="speaker"></div>
                        <div className="screen">
                          <GatsbyImage image={data.wpPost.cssMockupImage.cssMockupImage.localFile.childImageSharp.gatsbyImageData} alt={data.wpPost.cssMockupImage.cssMockupImage.altText} />
                        </div>
                        <div className="homebt"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {data.wpPost.linkBtn.linkBtn ? (
              <div className="link-wrap">
                <a href={data.wpPost.linkBtn.linkBtn} className="link-btn default" target="_blank" rel="noopener noreferrer">
                  Page Link
                </a>
              </div>
            ) : (
              ""
            )}
          </Content>
        </div>
      </div>
    </Layout>
  );
}
export const Head = (props) => {
  const { data } = props;
  const location = useLocation();
  const description = extractText(data.wpPost.content);
  return (
    <>
      <Seo pageTitle={data.wpPost.title} pageDesc={description} pagePath={location.pathname} blogImg={data.wpPost.featuredImage.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src} />
    </>
  );
};

export const query = graphql`
  query ($id: Int!) {
    wpPost(databaseId: { eq: $id }) {
      databaseId
      date
      content
      excerpt
      title
      categories {
        nodes {
          link
          name
          slug
        }
      }
      galleryNumber {
        galleryNum
      }
      galleryMetaGroup {
        galleryMetaGroup {
          galleryRole
          galleryTech
          galleryType
          galleryYear
        }
      }
      englishTitle {
        englishTitle
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 90, width: 1544, height: 832)
            }
          }
        }
      }
      mockUpMovie {
        mockupMovie {
          mediaItemUrl
        }
      }
      mockUpImageTab {
        mockupImageTab {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 90)
            }
          }
        }
      }
      mockUpImageSp {
        mockupImageSp {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 90)
            }
          }
        }
      }
      mockUpPc {
        mockupImagePc {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 90)
            }
          }
        }
      }
      cssMockupImage {
        cssMockupImage {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, quality: 100, width: 316)
            }
          }
        }
      }
      linkBtn {
        linkBtn
      }
    }
  }
`;
