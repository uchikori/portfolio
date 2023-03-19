import * as React from "react";

import { useRef } from "react";
import { Slide } from "../components/TopPage/Slide";
import { Layout } from "../components/Layout";
import { Sns } from "../components/global/Sns";
import { ScrollLead } from "../components/global/ScrollLead";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const slides = useRef(null); //slides要素の取得

  return (
    <>
      <Layout hasLoadingObj>

          <Slide />

      </Layout>
    </>
  );
}
