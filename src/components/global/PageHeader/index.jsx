import * as React from "react";

export const PageHeader = (props) => {
  const { titleImage, titleClass, subTitle, alt } = props;

  return (
    <header className="main-visual__header">
      <div className="main-visual__title">
        <h1 className={`title-line head-title head-title__${titleClass}`}>
          <span>
            <img src={`../../../images/${titleImage}.svg`} alt={alt} />
          </span>
        </h1>
        <p className="title-line head-text" style={{ whiteSpace: "pre-wrap" }}>
          <span>{subTitle}</span>
        </p>
      </div>
    </header>
  );
};
