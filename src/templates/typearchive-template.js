import * as React from "react";
import { Sidebar } from "../components/blog/sidebar";
import { Content } from "../components/global/Content";
import { MainVisual } from "../components/global/MainVisual";
import { Layout } from "../components/Layout";
import { PageHeader } from "../components/page/PageHeader";
import { useLocation } from "@reach/router";
import { Seo } from "../components/Seo";
import { graphql } from "gatsby";

export default function Type(props) {
  const { data, pageContext } = props;
  console.log(data);
  console.log(pageContext);
  const location = useLocation();
  return (
    <Layout hasLoadingObj={false}>
      <div className="page-wrapper web-tips">
        <div className="scroll-container">
          <MainVisual>
            <PageHeader
              titleImage="title-blog"
              titleClass={"blog"}
              subTitle={pageContext.description}
              typeSlug={pageContext.typeSlug}
              typeName={pageContext.typeName}
              alt="ブログ"
            />
          </MainVisual>
          <Content>
            <div className="content__block flex-block align-start">
              <main className="flex-item nine-column bg-white"></main>
              <Sidebar path={location.pathname} />
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
  query ($typeId: String!, $skip: Int!, $limit: Int!) {
    allWpWebTips(
      sort: { date: DESC }
      skip: $skip
      limit: $limit
      filter: { terms: { nodes: { elemMatch: { id: { eq: $typeId } } } } }
    ) {
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
