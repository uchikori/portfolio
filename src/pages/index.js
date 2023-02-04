import * as React from "react"
import { useEffect } from "react";
import { GlobalMenu } from "../components/GlobalMenu";
import { Load } from "../components/Load";
import { MouseCursor } from "../components/MouseCursor";
import * as noise from "simplenoise"
import { useState } from "react";

export default function Home() {

  window.addEventListener('load', function () {
      let elem = document.querySelector('.slides');
      let vh = window.innerHeight;
      elem.style.height = vh + 'px';
  });
  window.addEventListener('resize', function () {
    let elem = document.querySelector('.slides');
    let vh = window.innerHeight;
    elem.style.height = vh + 'px';
  });

  useEffect(() => {
    const canvas = document.getElementById('siteTopAnimation');
    const canvasContext = canvas.getContext('2d');

    noise.seed(Math.random());

    let stageW = 0;
    let stageH = 0;

    //画面がリサイズされたとき、resize関数を流す
    window.addEventListener('resize', resize);

    //アニメーション描画の設定
    function draw(time) {
      //画面をリセット
      canvasContext.clearRect(0, 0, stageW, stageH);

      canvasContext.lineWidth = 1;//線の太さ
      canvasContext.strokeStyle = "white";
      const amplitude = stageH / 3;//振幅の大きさ
      const lineNum = 150;//ラインの数
      const segmentNum = 150;//分割数

      //0からlineNum-1までの整数が順番に並んだ配列を得る
      [...Array(lineNum).keys()].forEach(function (j) {

        const coefficient = 50 + j;
        canvasContext.beginPath();//線の開始

        const h = Math.round(j / lineNum * 60) + 275;
        const s = 100;
        const l = Math.round(j / lineNum * 47);

        canvasContext.strokeStyle = `hsl(${h}, ${s}%, ${l}%)`;

        [...Array(segmentNum).keys()].forEach(function (i) {
          const x = (i / (segmentNum - 1)) * stageW;
          const px = i / (50 + j);//水平方向の距離
          const py = j / 50 + time;//時間
          const y = amplitude * noise.perlin2(px, py) + stageH / 2;//求めたいY座標=振幅*乱数（パーリンノイズ）

          if (i === 0) {
            canvasContext.moveTo(x, y);//開始点
          } else {
            canvasContext.lineTo(x, y);//終了点
          }
        });
        canvasContext.stroke();//線を描く
      });
    }

    //アニメーションのタイミング
    function tick() {
      requestAnimationFrame(tick);
      const time = Date.now() / 2000
      draw(time);
    }

    //リサイズ時
    function resize() {
      stageW = window.innerWidth * devicePixelRatio;
      stageH = window.innerHeight * devicePixelRatio;

      canvas.width = stageW;
      canvas.height = stageH;
    }

    resize();
    tick();

  },[]);

  return (
    <>

      <Load />

      <MouseCursor />

      <div className="container">

        <GlobalMenu />

        <div className="slides">
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
            <a href="" className="sns-icon">
              <img src="/images/icon-blog.svg" alt="blog" />
            </a>
          </div>
          <section className="slide  is-active">
            <div className="slide__content">
              <figure className="slide__figure"><canvas id="siteTopAnimation" className="slide__img" style={{background: "#050523"}}></canvas></figure>
              <header className="slide__header">
                <div className="slide__title">
                  <h1 className="title-line head-title head-title__main"><span><img src="/images/site-title.svg" alt="UCHIWA Creative Studio." /></span></h1>
                  <p className="title-line head-text"><span>自分自身の「好き」を使って、<br />”誰かの「心を動かす」モノを作りたい…”</span></p>
                </div>
              </header>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
