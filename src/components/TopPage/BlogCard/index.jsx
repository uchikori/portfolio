import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
export default function BlogCard() {
  const data = useStaticQuery(graphql`
    query {
      allWpPost(sort: { date: DESC }) {
        nodes {
          databaseId
          title
        }
      }
    }
  `);
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
