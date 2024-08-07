import React, { useState } from "react";

import { useEffect, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Canvas } from "../Canvas";
import { FrontHeader } from "../Front-header";
import { Three } from "../Three";
import { ScrollLead } from "../../global/ScrollLead";
import { Sns } from "../../global/Sns";

export function Slide() {
  const slides = useRef(null); //slides要素の取得

  //Slidesホイールアニメーション
  const [deltaNum, setDeltaNum] = useState(0); //スクロール量
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0); //slideの数
  useEffect(() => {
    const isSliding = () => {
      setDeltaNum(0);
      document.body.classList.add("is-sliding");
      setTimeout(() => {
        document.body.classList.remove("is-sliding");
      }, 1000);
    };
    //マウスホイール制御
    const handleWheel = (event) => {
      const direction = event.deltaY > 0 ? "down" : "up";
      if (direction === "down") {
        //ホイール中の場合
        if (document.body.classList.contains("is-sliding")) {
          setDeltaNum(0);
        } else {
          setDeltaNum((prevDeltaNum) => prevDeltaNum + 1);
          if (deltaNum > 7) {
            setCurrentSlideIndex((currentSlideIndex) => {
              return currentSlideIndex === 6 ? 0 : currentSlideIndex + 1;
            });
            isSliding();
          }
        }
      } else if (direction === "up") {
        //ホイール中の場合
        if (document.body.classList.contains("is-sliding")) {
          setDeltaNum(0);
        } else {
          setDeltaNum((prevDeltaNum) => prevDeltaNum - 1);
          if (deltaNum < -7) {
            setCurrentSlideIndex((currentSlideIndex) => {
              return currentSlideIndex === 0 ? 6 : currentSlideIndex - 1;
            });
            isSliding();
          }
        }
      }
    };
    //キーボード制御
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        if (document.body.classList.contains("is-sliding")) return;
        setCurrentSlideIndex((currentSlideIndex) => {
          return currentSlideIndex === 6 ? 0 : currentSlideIndex + 1;
        });
        isSliding();
      } else if (event.key === "ArrowUp") {
        if (document.body.classList.contains("is-sliding")) return;
        setCurrentSlideIndex((currentSlideIndex) => {
          return currentSlideIndex === 0 ? 6 : currentSlideIndex - 1;
        });
        isSliding();
      }
    };
    //tabキー制御
    document.addEventListener("keydown", handleKeyDown);
    //マウスホイール制御
    slides.current.addEventListener("wheel", handleWheel);
  });

  //Slidesタッチアニメーション
  let startY = useRef(0);
  let moveY = useRef(0);
  let offsetY = useRef(0);
  useEffect(() => {
    const isSliding = () => {
      document.body.classList.add("is-sliding");
      setTimeout(() => {
        document.body.classList.remove("is-sliding");
      }, 1000);
    };
    const touchStart = (event) => {
      startY.current = event.touches[0].pageY;
    };
    const touchMove = (event) => {
      moveY.current = event.changedTouches[0].pageY;
      offsetY.current = startY.current - moveY.current;
    };
    const touchEnd = () => {
      if (offsetY.current > 100) {
        setCurrentSlideIndex((currentSlideIndex) => {
          return currentSlideIndex === 6 ? 0 : currentSlideIndex + 1;
        });
        isSliding();
        startY.current = 0;
        moveY.current = 0;
        offsetY.current = 0;
      } else if (offsetY.current < -100) {
        setCurrentSlideIndex((currentSlideIndex) => {
          return currentSlideIndex === 0 ? 6 : currentSlideIndex - 1;
        });
        isSliding();
        startY.current = 0;
        moveY.current = 0;
        offsetY.current = 0;
      }
    };
    slides.current.addEventListener("touchstart", touchStart);
    slides.current.addEventListener("touchmove", touchMove);
    slides.current.addEventListener("touchend", touchEnd);
  });

  return (
    <>
      <div ref={slides} className="slides">
        <ScrollLead />

        <Sns />

        <div className="slides-nav">
          <nav className="slides-nav__nav">
            <span className="page-current">0{currentSlideIndex + 1}</span>
            <span className="page-line"></span>
            <span className="page-total">07</span>
          </nav>
        </div>
        <section
          className={`slide ${currentSlideIndex === 0 ? "is-active" : ""}`}
        >
          <div className="slide__content">
            <Canvas />
            <FrontHeader
              titleImage={"site-title"}
              titleClass={"main"}
              subTitle={` 好きなことを原動力に、\n誰かの心を揺さぶるデザインを追求します。`}
              alt="UCHIWA Creative Studio."
            />
          </div>
        </section>

        <section
          className={`slide ${currentSlideIndex === 1 ? "is-active" : ""}`}
        >
          <div className="slide__content">
            <figure className="slide__figure">
              <StaticImage
                className="slide__img"
                src="../../../images/about-background.jpg"
                layout="fullWidth"
                placeholder="blurred"
                quality={90}
                alt=""
              />
            </figure>
            <FrontHeader
              titleImage="h2-about"
              titleClass={"about"}
              subTitle={`札幌市の個人事業のWebデザイナー。\n「UCHIWA Creative Studio」という屋号で道内・道外問わず全国のお客様のWebサイト作りに携わらせて頂いております。`}
              alt="UCHIWA Creative Studio.について"
              link
            />
          </div>
        </section>

        <section
          className={`slide ${currentSlideIndex === 2 ? "is-active" : ""}`}
        >
          <div className="slide__content">
            <figure className="slide__figure">
              <StaticImage
                className="slide__img"
                src="../../../images/service-background.jpg"
                layout="fullWidth"
                quality={90}
                placeholder="blurred"
                alt=""
              />
              <Three />
            </figure>
            <FrontHeader
              titleImage="title-service"
              titleClass={"service"}
              subTitle={`Webを中心に「コンセプトメイキング」「デザイン」「コーディング」等のサイト制作全般の業務を承っております`}
              alt="事業・サービス内容"
              link
            />
          </div>
        </section>

        <section
          className={`slide ${currentSlideIndex === 3 ? "is-active" : ""}`}
        >
          <div className="slide__content">
            <figure className="slide__figure">
              <StaticImage
                className="slide__img"
                src="../../../images/price-background.jpg"
                layout="fullWidth"
                quality={90}
                placeholder="blurred"
                alt=""
              />
            </figure>
            <FrontHeader
              titleImage="title-price"
              titleClass={"price"}
              subTitle={`Webサイト制作にかかる料金表を掲載しております。\nご検討の際の目安にぜひご参考ください。`}
              alt="制作料金表"
              link
            />
          </div>
        </section>

        <section
          className={`slide ${currentSlideIndex === 4 ? "is-active" : ""}`}
        >
          <div className="slide__content">
            <figure className="slide__figure">
              <StaticImage
                className="slide__img"
                src="../../../images/gallery-background.jpg"
                layout="fullWidth"
                quality={90}
                placeholder="blurred"
                alt=""
              />
            </figure>
            <FrontHeader
              titleImage="title-works"
              titleClass={"works"}
              subTitle={`これまでのお仕事の中でお客様から掲載の許可を頂いているもののみを公開しています。※他趣味制作のものも掲載`}
              alt="制作実績"
              link
            />
          </div>
        </section>

        <section
          className={`slide ${currentSlideIndex === 5 ? "is-active" : ""}`}
        >
          <div className="slide__content">
            <figure className="slide__figure">
              <StaticImage
                className="slide__img"
                src="../../../images/blog-background.jpg"
                layout="fullWidth"
                quality={90}
                placeholder="blurred"
                alt=""
              />
            </figure>
            <FrontHeader
              titleImage="title-blog"
              titleClass={"web-tips"}
              subTitle={`Web運用や制作に役立つ情報発信メディア。\nお客様自身が「Webクリエイター」になれる、そんな情報発信を目指しています。`}
              alt="ブログ"
              link
              blog
            />
          </div>
        </section>

        <section
          className={`slide ${currentSlideIndex === 6 ? "is-active" : ""}`}
        >
          <div className="slide__content">
            <figure className="slide__figure">
              <StaticImage
                className="slide__img"
                src="../../../images/contact-background.jpg"
                layout="fullWidth"
                quality={90}
                placeholder="blurred"
                alt=""
              />
            </figure>
            <FrontHeader
              titleImage="title-contact"
              titleClass={"contact"}
              subTitle={`Webサイト立ち上げのご相談、お見積りのご依頼（無料）などお気軽にお問い合わせください`}
              alt="お問い合わせ"
              link
            />
          </div>
        </section>
      </div>
    </>
  );
}
