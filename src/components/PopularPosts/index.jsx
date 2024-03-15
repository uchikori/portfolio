import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

export const PopularPosts = (props) => {
  // 閲覧数で降順にソートする
  const { rankingData } = props;

  //WordPressへのクエリ発行
  const data = useStaticQuery(graphql`
    query {
      allWpWebTips(sort: { date: DESC }) {
        nodes {
          databaseId
          date(formatString: "YYYY-MM-DD")
          title
          terms {
            nodes {
              id
            }
          }
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

  const sortedData = data.allWpWebTips.nodes
    .sort(
      (a, b) =>
        rankingData.indexOf(a.databaseId) - rankingData.indexOf(b.databaseId)
    )
    .filter((item) => rankingData.includes(item.databaseId));

  return (
    <ul className="wpp-list wpp-list-with-thumbnails">
      {sortedData.map((item) => {
        return (
          <li key={item.databaseId}>
            <Link to={`/web-tips/${item.databaseId}`}>
              <GatsbyImage
                image={
                  item.featuredImage.node.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt={item.featuredImage.node.altText}
                className="wpp-thumbnail wpp_featured attachment-single-web-tips size-single-web-tips wp-post-image"
              />
              <h3 className="wpp-post-title">{item.title}</h3>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
