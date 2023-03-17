import * as React from "react";
import { Layout } from "../components/Layout";

export default function Notes() {
  return (
    <>
      <Layout hasLoadingObj={false}>
        <div className="page-wrapper notes"></div>
      </Layout>
    </>
  );
}
