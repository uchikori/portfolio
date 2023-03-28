import * as React from "react";

export const Seo = (props) => {
  const { pageClass } = props;
  return (
    <>
      <body className={pageClass} />
    </>
  );
};
