import * as React from "react";
import { Slide } from "../components/TopPage/Slide";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";
import { graphql } from "gatsby";
// import { Seo } from "../components/Seo";

export default function Home() {
  return (
    <>
      <Layout hasLoadingObj>
        <Slide />
      </Layout>
    </>
  );
}

export const Head = (props) => {
  const { data } = props;
  return (
    <>
      <Seo
        pageClass={"front-page"}
        pageImg={data.ogp.childImageSharp.original.src}
      />
    </>
  );
};

export const query = graphql`
  query {
    ogp: file(relativePath: { eq: "ogp.jpg" }) {
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
