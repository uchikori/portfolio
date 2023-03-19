import * as React from "react";
import { Slide } from "../components/TopPage/Slide";
import { Layout } from "../components/Layout";

export default function Home() {

  return (
    <>
      <Layout hasLoadingObj>

          <Slide />

      </Layout>
    </>
  );
}
