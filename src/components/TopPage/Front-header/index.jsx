import { graphql, Link, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import BlogCard from "../BlogCard";

export const FrontHeader = (props) => {
  const {
    titleImage,
    titleClass,
    subTitle,
    alt,
    link = false,
    blog = false,
  } = props;

  const blogData = useStaticQuery(graphql`
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
  `);

  return (
    <header className="slide__header">
      <div className="slide__title">
        <h1 className={`title-line head-title head-title__${titleClass}`}>
          <span>
            <img src={`../../../images/${titleImage}.svg`} alt={alt} />
          </span>
        </h1>
        <p className="title-line head-text" style={{ whiteSpace: "pre-wrap" }}>
          <span>{subTitle}</span>
        </p>
        {link ? (
          <Link to={`/${titleClass}`} className="title-line page-link">
            <span>
              <StaticImage
                src="../../../images/link.svg"
                layout="fullWidth"
                alt="View More"
              />
            </span>
          </Link>
        ) : (
          ""
        )}
      </div>
      {blog ? <BlogCard data={blogData} /> : null}
    </header>
  );
};
