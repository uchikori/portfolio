import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
export default function BlogCard() {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allWpWebTips(sort: { date: DESC }, limit: 3) {
  //       edges {
  //         node {
  //           title
  //           databaseId
  //           date(formatString: "YYYY-MM-DD")
  //           featuredImage {
  //             node {
  //               localFile {
  //                 childImageSharp {
  //                   gatsbyImageData(
  //                     quality: 90
  //                     layout: CONSTRAINED
  //                     width: 248
  //                     height: 155
  //                   )
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  return (
    <div className="slide__swiper">
      {/* {data.allWpWebTips.edges.map(({ node }) => {
        return (
          <a
            href={`/web-tips/${node.databaseId}`}
            className="blog-item"
            key={node.databaseId}
          >
            <div className="blog-item__image">
              <GatsbyImage
                image={
                  node.featuredImage.node.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt={node.title}
              />
              <div className="blog-item__overlay">READ MORE</div>
            </div>
            <div className="blog-item__text-box">
              <h3 className="blog-title">{node.title}</h3>
              <time className="blog-postTime" dateTime={node.date}>
                {node.date}
              </time>
            </div>
          </a>
        );
      })} */}
    </div>
  );
}
