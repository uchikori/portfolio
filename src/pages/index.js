import * as React from "react";

import { useState, useRef } from "react";
import { Slide } from "../components/TopPage/Slide";
import { Layout } from "../components/Layout";
import { Sns } from "../components/global/Sns";
import { ScrollLead } from "../components/global/ScrollLead";
import { useEffect } from "react";

export default function Home() {
  const slides = useRef(null); //slides要素の取得

  useEffect(() => {
    window.addEventListener("load", () => {
      let vh = window.innerHeight;
      slides.current.style = `height: ${vh}px;`;
    });
    window.addEventListener("resize", () => {
      let vh = window.innerHeight;
      slides.current.style = `height: ${vh}px;`;
    });
  }, []);

  return (
    <>
      <Layout>
        <div ref={slides} className="slides">
          <div className="slides-nav">
            <nav className="slides-nav__nav">
              <span className="page-current">01</span>
              <span className="page-line"></span>
              <span className="page-total">07</span>
            </nav>
          </div>
          <ScrollLead />
          <Sns />
          <Slide />
        </div>
      </Layout>
    </>
  );
}
