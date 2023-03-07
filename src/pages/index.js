import * as React from "react"
import { useEffect } from "react";
import { GlobalMenu } from "../components/global/Menu/GlobalMenu";
import { Load } from "../components/global/Loading";
import { MouseCursor } from "../components/global/MouseCursor";

import { useState, useRef } from "react";
import { Slide } from "../components/Slide";

export default function Home() {

  window.addEventListener('load', function () {
    let elem = document.querySelector('.slides');
    let vh = window.innerHeight;
    elem.style.height = vh + 'px';
  });

  const [innerWidth, setInnerWidth] = useState(0);

  const slides = useRef(null);//slides要素の取得

  //画面サイズの可変で高さを決める
  useEffect(() => {
    console.log(innerWidth);
    setInnerWidth(window.innerWidth);
    let vh = window.innerHeight;
    slides.current.style.height = vh + 'px';
  },[innerWidth]);

  return (
    <>

      <Load />

      <MouseCursor />

      <div className="container">

        <GlobalMenu />

        <div ref={ slides }className="slides">
          <div className="slides-nav">
            <nav className="slides-nav__nav">
              <span className="page-current">01</span>
              <span className="page-line"></span>
              <span className="page-total">07</span>
            </nav>
          </div>
          <div className="scroll-lead">
            Scroll
          </div>
          <div className="sns-block">
            <a href="https://www.facebook.com/WEBdesigner.uchiwa" className="sns-icon" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon-facebook.svg" alt="facebook" />
            </a>
            <a href="https://www.instagram.com/uchiwa_cs" className="sns-icon" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon-instagram.svg" alt="instagram" />
            </a>
            <a href="/" className="sns-icon">
              <img src="/images/icon-blog.svg" alt="blog" />
            </a>
          </div>

          <Slide />

        </div>
      </div>
    </>
  )
}
