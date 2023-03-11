import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const FrontHeader = (props) => {
  const { titleImage, titleClass, subTitle, alt, link = false } = props;

  return (
    <header className="slide__header">
      <div className="slide__title">
        <h1 className={`title-line head-title head-title__${titleClass}`}>
          <span>
            <img src={titleImage} alt={alt} />
          </span>
        </h1>
        <p
          className="title-line head-text"
          style={{ "white-space": "pre-wrap" }}
        >
          <span>{subTitle}</span>
        </p>
        {link ? (
          <Link href={`/${titleClass}`} className="title-line page-link">
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
    </header>
  );
};
