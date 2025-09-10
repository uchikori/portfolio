import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { extractText } from "../../lib/extract-text";

export const GalleryItem = (props) => {
  const { node } = props;

  return (
    <Link to={`/${node.databaseId}/`} aria-label={`${node.title}の詳細ページへ`}>
      <div className="gallery-item">
        <figure className="gallery-item__image">
          <GatsbyImage image={node.featuredImage.node.localFile.childImageSharp.gatsbyImageData} objectPosition={"50% 50%"} layout="fullWidth" alt={node.featuredImage.node.altText} />
          <div className="gallery-item__image-overlay">READ MORE</div>
        </figure>

        <div className="gallery-item__body">
          <span className="gallery-item__category" aria-label={`${node.categories.nodes[0].name}の一覧ページへ`}>
            {node.categories.nodes[0].name}
          </span>
          <h2 className="gallery-item__title">{node.title}</h2>
          <p className="">{extractText(node.content)}</p>
        </div>
      </div>
    </Link>
  );
};
