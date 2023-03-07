import React from "react";
import { Load } from "./global/Loading";

export const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Load />
    </>

  )
}