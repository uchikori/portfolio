import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
export default function BlogCard() {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allWpPost(sort: { date: DESC }) {
  //       nodes {
  //         databaseId
  //         title
  //       }
  //     }
  //   }
  // `);
  // console.log(data);
  const data = useStaticQuery(graphql`
    query {
      allWpWebTips(limit: 3, sort: { date: DESC }) {
        nodes {
          databaseId
          date(formatString: "YYYY-MM-DD")
          title
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
  `);
  console.log(data);
  return (
    <div className="slide__swiper">
      {data.allWpWebTips.nodes.map((node) => {
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
      })}
    </div>
  );
}
