import React from "react";
import { Load } from "./global/Loading";
import { GlobalMenu } from "./global/Menu/GlobalMenu";
import { MouseCursor } from "./global/MouseCursor";

export const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Load />
      <MouseCursor />
      <div className="container">
        <GlobalMenu />
        {children}
      </div>
    </>
  );
};
