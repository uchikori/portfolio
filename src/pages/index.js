import * as React from "react";

import { useRef } from "react";
import { Slide } from "../components/TopPage/Slide";
import { Layout } from "../components/Layout";
import { Sns } from "../components/global/Sns";
import { ScrollLead } from "../components/global/ScrollLead";
import { useEffect } from "react";
import { graphql } from "gatsby";

export default function Home(props) {
  const { data } = props;
  const slides = useRef(null); //slides要素の取得

  useEffect(() => {
    window.addEventListener("load", () => {
      let vh = window.innerHeight;
      slides.current.style = `height: ${vh}px;`;
    });
    window.addEventListener("resize", () => {
      let vh = window.innerHeight;
      slides.current.style = `height: ${vh}px;`;
    });
  }, []);

  return (
    <>
      <Layout hasLoadingObj>
        <div ref={slides} className="slides">
          <ScrollLead />
          <Sns />
          <Slide blogData={data} />
        </div>
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    allWpWebTips(sort: { date: DESC }, limit: 3) {
      edges {
        node {
          title
          databaseId
          date(formatString: "YYYY-MM-DD")
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 90
                    placeholder: BLURRED
                    layout: CONSTRAINED
                    width: 248
                    height: 155
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`;
