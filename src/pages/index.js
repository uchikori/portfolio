import * as React from "react";
import { Slide } from "../components/TopPage/Slide";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";
// import { Seo } from "../components/Seo";

export default function Home() {
  return (
    <>
      <Layout hasLoadingObj>
        <Slide />
      </Layout>
    </>
  );
}

export const Head = () => {
  return (
    <>
      <Seo pageClass={"front-page"} />
    </>
  );
};
