import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
export default function BlogCard(props) {
  const { data } = props;
  console.log(data);
  return (
    <div className="slide__swiper">
      {data.allWpWebTips.edges.map(({ node }) => {
        return (
          <a href="/" className="blog-item" key={node.databaseId}>
            <div className="blog-item__image">
              <GatsbyImage
                image={
                  node.featuredImage.node.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt={node.title}
              />
            </div>
            <div className="blog-item__text-box">
              <h3 className="blog-title">{node.title}</h3>
              <time className="blog-postTime" datetime={node.date}>
                {node.date}
              </time>
            </div>
          </a>
        );
      })}
    </div>
  );
}
