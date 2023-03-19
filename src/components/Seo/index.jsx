import * as React from "react";

export const Seo = (props) => {
  const { isFront } = props;
  return (
    <>
      <body className={isFront} />
    </>
  );
};
