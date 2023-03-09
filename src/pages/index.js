import * as React from "react";
import { useEffect } from "react";

import { useState, useRef } from "react";
import { Slide } from "../components/TopPage/Slide";
import { Layout } from "../components/Layout";
import { Sns } from "../components/global/Sns";
import { ScrollLead } from "../components/global/ScrollLead";

export default function Home() {
  const [innerWidth, setInnerWidth] = useState(0);

  const slides = useRef(null); //slides要素の取得

  //画面サイズの可変で高さを決める
  // useEffect(() => {
  //   console.log(innerWidth);
  //   setInnerWidth(window.innerWidth);
  //   let vh = window.innerHeight;
  //   slides.current.style.height = vh + "px";
  // }, [innerWidth]);

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
