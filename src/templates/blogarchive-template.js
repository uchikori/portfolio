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
import { useViewTransition } from "../lib/useViewTransition";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faClock } from "@fortawesome/free-solid-svg-icons";
export default function WebTips(props) {
  const { data, pageContext } = props;
  const rankingPostIds = pageContext.reportData;
  //現在のURLを取得
  const location = useLocation();

  // useViewTransition();

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
                <div className="article__items">
                  {data.allWpWebTips.nodes.map((node) => {
                    return (
                      <article id={node.databaseId}>
                        <Link
                          className="card"
                          to={`/web-tips/${node.databaseId}`}
                          currentPath={location.pathname}
                          key={node.databaseId}
                        >
                          <div className="card__thumbnail">
                            <GatsbyImage
                              image={
                                node.featuredImage.node.localFile
                                  .childImageSharp.gatsbyImageData
                              }
                              alt={node.featuredImage.node.altText}
                              data-view-transition={`view-transition-${node.databaseId}`}
                              // style={{
                              //   viewTransitionName: `view-transition-${node.databaseId}`,
                              // }}
                            />
                            <div className="card__thumbnailoverlay">
                              READ MORE
                            </div>
                          </div>
                          <div className="card__body">
                            <div className="card__meta">
                              <div className="term">
                                <FontAwesomeIcon
                                  icon={faTag}
                                  className="tagIcon"
                                />
                                {node.terms.nodes[0].name}
                              </div>
                              <time dateTime={node.date}>
                                <FontAwesomeIcon
                                  icon={faClock}
                                  className="clockIcon"
                                />
                                {node.date}
                              </time>
                            </div>

                            <h2 className="card__title">{node.title}</h2>
                          </div>
                        </Link>
                      </article>
                    );
                  })}
                </div>
                <Pagenation pageContext={pageContext} />
                {/* <AdsenceContentBottom
                  format={"autorelaxed"}
                  path={location.pathname}
                /> */}
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
