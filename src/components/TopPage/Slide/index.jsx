import React, { useState } from "react";

import { useEffect, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { Canvas } from "../Canvas";
import { FrontHeader } from "../Front-header";

export function Slide() {
  //Slidesホイールアニメーション
  const [deltaNum, setDeltaNum] = useState(0); //スクロール量
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0); //slideの数
  const slides = useRef([]);

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
          setDeltaNum((deltaNum) => deltaNum + 1);
          console.log(deltaNum);
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
          setDeltaNum((deltaNum) => deltaNum - 1);
          console.log(deltaNum);
          if (deltaNum < -7) {
            setCurrentSlideIndex((currentSlideIndex) => {
              return currentSlideIndex === 0 ? 6 : currentSlideIndex - 1;
            });
            isSliding();
          }
        }
      }
    };
    document.addEventListener("wheel", handleWheel);
  }, [deltaNum]);

  //Slidesタッチアニメーション
  // const [startY, setStartY] = useState(0);
  // const [moveY, setMoveY] = useState(0);
  useEffect(() => {
    const isSliding = () => {
      setDeltaNum(0);
      document.body.classList.add("is-sliding");
      setTimeout(() => {
        document.body.classList.remove("is-sliding");
      }, 1000);
    };
    let startY = 0;
    let moveY = 0;
    const dist = 100;
    const touchStart = (event) => {
      startY = event.touches[0].pageY;
      console.log(startY);
    };
    const touchMove = (event) => {
      moveY = event.changedTouches[0].pageY;
      console.log(moveY);
    };
    const touchEnd = () => {
      if (startY > moveY && startY > moveY + dist) {
        setCurrentSlideIndex((currentSlideIndex) => {
          return currentSlideIndex === 6 ? 0 : currentSlideIndex + 1;
        });
        isSliding();
      } else if (startY < moveY && startY + dist < moveY) {
        setCurrentSlideIndex((currentSlideIndex) => {
          return currentSlideIndex === 0 ? 6 : currentSlideIndex - 1;
        });
      } else {
        return false;
      }
    };
    document.addEventListener("touchstart", touchStart);
    document.addEventListener("touchmove", touchMove);
    document.addEventListener("touchend", touchEnd);
  }, []);

  const title = useStaticQuery(graphql`
    query {
      main: file(relativePath: { eq: "site-title.svg" }) {
        publicURL
      }
      about: file(relativePath: { eq: "h2-about.svg" }) {
        publicURL
      }
      service: file(relativePath: { eq: "title-service.svg" }) {
        publicURL
      }
      price: file(relativePath: { eq: "title-price.svg" }) {
        publicURL
      }
      works: file(relativePath: { eq: "title-works.svg" }) {
        publicURL
      }
      blog: file(relativePath: { eq: "title-blog.svg" }) {
        publicURL
      }
      contact: file(relativePath: { eq: "title-contact.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <>
      <section
        className={`slide ${currentSlideIndex === 0 ? "is-active" : ""}`}
      >
        <div className="slide__content">
          <Canvas />
          <FrontHeader
            titleImage={title.main.publicURL}
            titleClass={"main"}
            subTitle={` 自分自身の「好き」を使って、\n"誰かの「心を動かす」モノを作りたい…"`}
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
              quality={90}
              alt=""
            />
          </figure>
          <FrontHeader
            titleImage={title.about.publicURL}
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
              alt=""
            />
          </figure>
          <FrontHeader
            titleImage={title.service.publicURL}
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
              alt=""
            />
          </figure>
          <FrontHeader
            titleImage={title.price.publicURL}
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
              alt=""
            />
          </figure>
          <FrontHeader
            titleImage={title.works.publicURL}
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
              alt=""
            />
          </figure>
          <FrontHeader
            titleImage={title.blog.publicURL}
            titleClass={"blog"}
            subTitle={`Web運用や制作に役立つ情報発信メディア。\nお客様自身が「Webクリエイター」になれる、そんな情報発信を目指しています。`}
            alt="ブログ"
            link
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
              alt=""
            />
          </figure>
          <FrontHeader
            titleImage={title.contact.publicURL}
            titleClass={"contact"}
            subTitle={`Webサイト立ち上げのご相談、お見積りのご依頼（無料）などお気軽にお問い合わせください`}
            alt="お問い合わせ"
            link
          />
        </div>
      </section>
    </>
  );
}
