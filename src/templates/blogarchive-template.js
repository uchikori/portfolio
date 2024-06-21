import * as React from "react";
import { Sidebar } from "../components/blog/sidebar";
import { Content } from "../components/global/Content";
import { MainVisual } from "../components/global/MainVisual";
import { Layout } from "../components/Layout";
import { PageHeader } from "../components/page/PageHeader";
import { useLocation } from "@reach/router";
import { graphql, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Seo } from "../components/Seo";
import { Pagenation } from "../components/blog/pagenation";
import { AdsenceContentBottom } from "../components/adsence";
import TransitionLink from "../components/TransitionLink";

export default function WebTips(props) {
  const { data, pageContext } = props;
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
            <PageHeader
              titleImage="title-blog"
              titleClass={"blog"}
              subTitle={`Web運用や制作に役立つ情報発信メディア。\nお客様自身が「Webクリエイター」になれる、そんな情報発信を目指しています。`}
              alt="ブログ"
            />
          </MainVisual>
          <Content>
            <div className="flex-block align-start">
              <main className="flex-item nine-column">
                {data.allWpWebTips.nodes.map((node) => {
                  return (
                    <TransitionLink
                      id={node.databaseId}
                      className="media01 flex-block"
                      to={`/web-tips/${node.databaseId}`}
                      key={node.databaseId}
                      transitionName={node.databaseId}
                    >
                      <div className="flex-item media01__thumbnail four-column">
                        <GatsbyImage
                          image={
                            node.featuredImage.node.localFile.childImageSharp
                              .gatsbyImageData
                          }
                          alt={node.featuredImage.node.altText}
                          data-view-transition={`view-transition-${node.databaseId}`}
                          style={{
                            viewTransitionName: `view-transition-${node.databaseId}`,
                          }}
                        />
                        <div className="media01__thumbnail-overlay">
                          READ MORE
                        </div>
                      </div>
                      <div className="flex-item eight-column media01__body">
                        <div className="media01__meta">
                          <div className="term">{node.terms.nodes[0].name}</div>
                          <time dateTime={node.date}>{node.date}</time>
                        </div>

                        <h2 className="media01__title mt-16">{node.title}</h2>
                      </div>
                    </TransitionLink>
                  );
                })}
                <Pagenation pageContext={pageContext} />
                <AdsenceContentBottom
                  format={"autorelaxed"}
                  path={location.pathname}
                />
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
  return (
    <>
      <Seo
        adsence={true}
        pageClass={"post-type-archive-web-tips"}
        pageTitle={"Web制作お役立ち情報"}
        pageDesc={
          "Web運用や制作に役立つ情報発信メディア。お客様自身が「Webクリエイター」になれる、そんな情報発信を目指しています。"
        }
        pagePath={"/web-tips/"}
        pageImg={data.webTips.childImageSharp.original.src}
      />
    </>
  );
};
export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allWpWebTips(sort: { date: DESC }, skip: $skip, limit: $limit) {
      nodes {
        databaseId
        date(formatString: "YYYY-MM-DD")
        title
        terms {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 90
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  width: 254
                  height: 142
                )
              }
            }
          }
        }
      }
    }
    webTips: file(relativePath: { eq: "blog-background.jpg" }) {
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
