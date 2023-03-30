import { Link } from "gatsby";
import * as React from "react";

export const PageHeader = (props) => {
  const { titleImage, titleClass, subTitle, typeSlug, typeName, alt } = props;

  return (
    <header className="main-visual__header">
      <div className="main-visual__title">
        <h1
          className={`title-line head-title ${
            titleClass ? `head-title__${titleClass}` : ""
          }`}
        >
          {titleImage ? (
            <span>
              <img src={`../../../images/${titleImage}.svg`} alt={alt} />
            </span>
          ) : (
            ""
          )}
        </h1>
        {typeSlug ? (
          <div className="term">
            <Link to={`/class/${typeSlug}/`} className="term__link">
              {typeName}
            </Link>
          </div>
        ) : (
          ""
        )}
        <p className="title-line head-text" style={{ whiteSpace: "pre-wrap" }}>
          <span>{subTitle}</span>
        </p>
      </div>
    </header>
  );
};
