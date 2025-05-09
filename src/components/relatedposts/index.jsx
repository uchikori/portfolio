import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export const RelatedPosts = (props) => {
  const { id, catId } = props;
  const randomSelect = (array, num) => {
    let newArray = [];

    while (newArray.length < num && array.length > 0) {
      const rand = Math.floor(Math.random() * array.length);
      newArray.push(array[rand]);
      array.splice(rand, 1);
    }
    return newArray;
  };

  //WordPressへのクエリ発行
  const data = useStaticQuery(graphql`
    query {
      allWpWebTips(sort: { date: DESC }) {
        nodes {
          databaseId
          date(formatString: "YYYY-MM-DD")
          excerpt
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
                  gatsbyImageData(quality: 90, placeholder: BLURRED, layout: CONSTRAINED, width: 268, height: 150)
                }
              }
            }
          }
        }
      }
    }
  `);

  //現投稿ページのpost以外の同一カテゴリーのpostを取得
  const basePosts = data.allWpWebTips.nodes.filter((node) => {
    return (
      //全投稿の中から現ページのIDと異なるもののみtrue
      node.databaseId !== id &&
      //且つ全投稿のカテゴリの0番目が現ページのカテゴリと同一のもののみtrue
      node.terms.nodes.map((cat) => cat.id)[0] === catId
    );
  });
  const relatedPosts = randomSelect(basePosts, 5);
  if (!relatedPosts.length) {
    return null;
  } else {
    return (
      <div className="relatedposts">
        <h3>関連記事</h3>
        <ul>
          {relatedPosts.map((item) => {
            const removePTagExcerpt = item.excerpt.replace(/<\/?p>/g, "");
            return (
              <li className="blog-card" key={item.databaseId}>
                <Link to={`/web-tips/${item.databaseId}`}>
                  <figure className="blog-card-thumbnail">
                    <GatsbyImage image={item.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={item.featuredImage.node.altText} />
                  </figure>
                  <div className="blog-card-content">
                    <h4 className="blog-card-title">{item.title}</h4>
                    <p className="blog-card-excerpt">{removePTagExcerpt}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};
