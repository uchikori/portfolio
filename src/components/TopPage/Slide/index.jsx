import React, { useState } from "react";
import * as noise from "simplenoise";
import { useEffect, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export const Slide = () => {
  //Canvasアニメーション
  const canvas = useRef(null);
  useEffect(() => {
    console.log(canvas.current);
    const canvasEl = canvas.current;
    const canvasContext = canvasEl.getContext("2d");

    noise.seed(Math.random());

    let stageW = 0;
    let stageH = 0;

    //画面がリサイズされたとき、resize関数を流す
    window.addEventListener("resize", resize);

    //アニメーション描画の設定
    function draw(time) {
      //画面をリセット
      canvasContext.clearRect(0, 0, stageW, stageH);

      canvasContext.lineWidth = 1; //線の太さ
      canvasContext.strokeStyle = "white";
      const amplitude = stageH / 3; //振幅の大きさ
      const lineNum = 150; //ラインの数
      const segmentNum = 150; //分割数

      //0からlineNum-1までの整数が順番に並んだ配列を得る
      [...Array(lineNum).keys()].forEach(function (j) {
        // const coefficient = 50 + j;
        canvasContext.beginPath(); //線の開始

        const h = Math.round((j / lineNum) * 60) + 275;
        const s = 100;
        const l = Math.round((j / lineNum) * 47);

        canvasContext.strokeStyle = `hsl(${h}, ${s}%, ${l}%)`;

        [...Array(segmentNum).keys()].forEach(function (i) {
          const x = (i / (segmentNum - 1)) * stageW;
          const px = i / (50 + j); //水平方向の距離
          const py = j / 50 + time; //時間
          const y = amplitude * noise.perlin2(px, py) + stageH / 2; //求めたいY座標=振幅*乱数（パーリンノイズ）

          if (i === 0) {
            canvasContext.moveTo(x, y); //開始点
          } else {
            canvasContext.lineTo(x, y); //終了点
          }
        });
        canvasContext.stroke(); //線を描く
      });
    }

    //アニメーションのタイミング
    function tick() {
      requestAnimationFrame(tick);
      const time = Date.now() / 2000;
      draw(time);
    }

    //リサイズ時
    function resize() {
      stageW = window.innerWidth * devicePixelRatio;
      stageH = window.innerHeight * devicePixelRatio;

      canvasEl.width = stageW;
      canvasEl.height = stageH;
    }

    resize();
    tick();
  }, []);

  //Slidesアニメーション
  const [deltaNum, setDeltaNum] = useState(0); //スクロール量
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0); //slideの数
  const scrollThereshold = 2; //微小なスクロール量で動作しないようにするための定数

  const slides = useRef([]);
  const numSlides = slides.current.length;

  useEffect(() => {
    //マウスホイール制御
    const handleWheel = (event) => {
      const delta = Math.sign(event.deltaY);
      console.log(delta);
      if (delta > 0) {
        //ホイール中の場合
        if (document.body.classList.contains("is-sliding")) {
          //それ以上ホイール量を増やさない
          setDeltaNum(0);
          //ホイール中じゃない場合
        } else {
          //ホイール量をマイナスし続ける（上方向）
          setDeltaNum((deltaNum) => {
            return deltaNum - 1;
          });
          console.log(deltaNum);
          //ホイール量が2を超えた場合
          if (Math.abs(deltaNum) >= scrollThereshold) {
            //ホイール量には7をセット
            setDeltaNum(7);
          }
        }
      } else if (delta < 0) {
        //ホイール中の場合
        if (document.body.classList.contains("is-sliding")) {
          setDeltaNum(0);
        } else {
          setDeltaNum((deltaNum) => {
            return deltaNum + 1;
          });
          console.log(deltaNum);
          if (Math.abs(deltaNum) >= scrollThereshold) {
            setDeltaNum(7);
          }
        }
      }
    };
    //クラス付与でアニメーション
    const showSlide = () => {
      setDeltaNum(0);
      if (document.body.classList.contains("is-sliding")) {
        return;
      }
      slides.current.forEach((i, slide) => {});
    };
    //前スライドへの動作
    //次スライドへの動作
    document.addEventListener("wheel", handleWheel);
  }, [deltaNum]);

  return (
    <>
      <section
        className={`slide ${
          isActive ? "is-active" : isPrev ? "is-prev" : "is-next"
        }`}
        ref={(element) => {
          slides.current[0] = element;
        }}
      >
        <div className="slide__content">
          <figure className="slide__figure">
            <canvas
              id="siteTopAnimation"
              ref={canvas}
              className="slide__img"
              style={{ background: "#050523" }}
            ></canvas>
          </figure>
          <header className="slide__header">
            <div className="slide__title">
              <h1 className="title-line head-title head-title__main">
                <span>
                  <img
                    src="/images/site-title.svg"
                    alt="UCHIWA Creative Studio."
                  />
                </span>
              </h1>
              <p className="title-line head-text">
                <span>
                  自分自身の「好き」を使って、
                  <br />
                  ”誰かの「心を動かす」モノを作りたい…”
                </span>
              </p>
            </div>
          </header>
        </div>
      </section>
      <section
        className="slide"
        ref={(element) => {
          slides.current[1] = element;
        }}
      >
        <div className="slide__content">
          <figure className="slide__figure">
            <StaticImage
              className="slide__img"
              src="../../../images/about-background.jpg"
              layout="fullWidth"
              quality={90}
              alt=""
            />
            {/* <div
              className="slide__img"
              style="background-image: url(<?php echo get_template_directory_uri(); ?>/coding/dist/images/about-background.webp)"
            ></div> */}
          </figure>
          <header className="slide__header">
            <div className="slide__title">
              <h2 className="title-line head-title head-title__about">
                <span>
                  <StaticImage
                    src="../../../images/h2-about.svg"
                    layout="constrained"
                    alt="UCHIWA Creative Studioについて"
                    quality={90}
                  />
                  {/* <img
                    src="<?php echo get_template_directory_uri(); ?>/coding/dist/images/h2-about.svg"
                    alt="UCHIWA Creative Studioについて"
                  /> */}
                </span>
              </h2>

              <p className="title-line head-text">
                <span>
                  札幌市の個人事業のWebデザイナー。
                  <br />
                  「UCHIWA Creative
                  Studio」という屋号で道内・道外問わず全国のお客様のWebサイト作りに携わらせて頂いております。
                </span>
              </p>
              <Link href="/about" className="title-line page-link">
                <span>
                  <StaticImage
                    src="../../../images/link.svg"
                    layout="fullWidth"
                    alt="View More"
                  />
                  {/* <img
                    src="<?php echo get_template_directory_uri(); ?>/coding/dist/images/link.svg"
                    alt="View More"
                  /> */}
                </span>
              </Link>
            </div>
          </header>
        </div>
      </section>
      <section
        className="slide"
        ref={(element) => {
          slides.current[2] = element;
        }}
      >
        <div className="slide__content">
          <figure className="slide__figure">
            <StaticImage
              className="slide__img"
              src="../../../images/service-background.jpg"
              layout="fullWidth"
              quality={90}
              alt=""
            />
          </figure>
          <header className="slide__header">
            <div className="slide__title">
              <h2 className="title-line head-title head-title__service">
                <span>
                  <StaticImage
                    src="../../../images/title-service.svg"
                    layout="constrained"
                    alt="事業・サービス内容"
                    quality={90}
                  />
                </span>
              </h2>

              <p className="title-line head-text">
                <span>
                  Webを中心に「コンセプトメイキング」「デザイン」「コーディング」等のサイト制作全般の業務を承っております
                </span>
              </p>
              <Link href="/service" className="title-line page-link">
                <span>
                  <StaticImage
                    src="../../../images/link.svg"
                    layout="fullWidth"
                    alt="View More"
                  />
                </span>
              </Link>
            </div>
          </header>
        </div>
      </section>
    </>
  );
};
