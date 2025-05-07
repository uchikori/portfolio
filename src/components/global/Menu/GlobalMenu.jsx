import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const GlobalMenu = () => {
  //初回のレンダリングかどうかの判定
  const [isInitialRender, setIsInitialRender] = useState(true);

  const [open, setOpen] = useState(false);
  const [bodyFixed, setBodyFixed] = useState(false);

  const menuOpen = (event) => {
    setOpen((open) => {
      return !open;
    });
    setIsInitialRender(false);

    setBodyFixed((bodyFixed) => {
      return !bodyFixed;
    });
  };

  const toggleMenuClass = isInitialRender ? "" : open ? "menu-open" : "menu-close";

  useEffect(() => {
    bodyFixed ? document.body.classList.add("fixed") : document.body.classList.remove("fixed");
  }, [bodyFixed]);

  return (
    <>
      <button className={`list-menu hoverTarget ${open ? "menu-active" : null}`} onClick={menuOpen} aria-label="グローバルメニュー">
        <div className="list-menu-top">
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <div className="list-menu-bottom">
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </button>

      <nav className={`g-menu js-gMenu ${toggleMenuClass} `}>
        <div className="g-menu__item" style={{ "--i": "0.9s" }}>
          <Link to={"/"} className="g-menu__item-link">
            home
          </Link>

          <div className="g-menu__item-img">
            <StaticImage src="../../../images/home-firstview.webp" width={520} height={280} layout="constrained" alt="View More" quality={80} />
          </div>
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>home</span>
              <span>home</span>
              <span>home</span>
              <span>home</span>
              <span>home</span>
              <span>home</span>
              <span>home</span>
              <span>home</span>
              <span>home</span>
            </div>
          </div>
        </div>
        <div className="g-menu__item" style={{ "--i": "1.0s" }}>
          <Link to={"/about"} className="g-menu__item-link">
            about
          </Link>
          <div className="g-menu__item-img">
            <StaticImage src="../../../images/about-firstView.webp" width={520} height={280} layout="constrained" alt="View More" quality={80} />
          </div>
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>about</span>
              <span>about</span>
              <span>about</span>
              <span>about</span>
              <span>about</span>
              <span>about</span>
              <span>about</span>
              <span>about</span>
              <span>about</span>
            </div>
          </div>
        </div>
        <div className="g-menu__item" style={{ "--i": "1.1s" }}>
          <Link to={"/service"} className="g-menu__item-link">
            service
          </Link>
          <div className="g-menu__item-img">
            <StaticImage src="../../../images/service-firstView.webp" width={520} height={280} layout="constrained" alt="View More" quality={80} />
          </div>
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>service</span>
              <span>service</span>
              <span>service</span>
              <span>service</span>
              <span>service</span>
              <span>service</span>
              <span>service</span>
              <span>service</span>
              <span>service</span>
            </div>
          </div>
        </div>
        <div className="g-menu__item" style={{ "--i": "1.2s" }}>
          <Link to={"/price"} className="g-menu__item-link">
            price
          </Link>
          <div className="g-menu__item-img">
            <StaticImage src="../../../images/price-firstView.jpg.webp" width={520} height={280} layout="constrained" alt="View More" quality={80} />
          </div>
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>price</span>
              <span>price</span>
              <span>price</span>
              <span>price</span>
              <span>price</span>
              <span>price</span>
              <span>price</span>
              <span>price</span>
              <span>price</span>
            </div>
          </div>
        </div>
        <div className="g-menu__item" style={{ "--i": "1.3s" }}>
          <Link to={"/notes"} className="g-menu__item-link">
            notes
          </Link>
          <div className="g-menu__item-img">
            <StaticImage src="../../../images/notes-firstView.webp" width={520} height={280} layout="constrained" alt="View More" quality={80} />
          </div>
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>notes</span>
              <span>notes</span>
              <span>notes</span>
              <span>notes</span>
              <span>notes</span>
              <span>notes</span>
              <span>notes</span>
              <span>notes</span>
              <span>notes</span>
            </div>
          </div>
        </div>
        <div className="g-menu__item" style={{ "--i": "1.4s" }}>
          <Link to={"/works"} className="g-menu__item-link">
            works
          </Link>
          <div className="g-menu__item-img">
            <StaticImage src="../../../images/gallery-firstView.webp" width={520} height={280} layout="constrained" alt="View More" quality={80} />
          </div>
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>works</span>
              <span>works</span>
              <span>works</span>
              <span>works</span>
              <span>works</span>
              <span>works</span>
              <span>works</span>
              <span>works</span>
              <span>works</span>
            </div>
          </div>
        </div>
        <div className="g-menu__item" style={{ "--i": "1.5s" }}>
          <Link to={"/web-tips"} className="g-menu__item-link">
            blog
          </Link>
          <div className="g-menu__item-img">
            <StaticImage src="../../../images/blog-first-view.webp" width={520} height={280} layout="constrained" alt="View More" quality={80} />
          </div>
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>blog</span>
              <span>blog</span>
              <span>blog</span>
              <span>blog</span>
              <span>blog</span>
              <span>blog</span>
              <span>blog</span>
              <span>blog</span>
              <span>blog</span>
            </div>
          </div>
        </div>
        <div className="g-menu__item" style={{ "--i": "1.6s" }}>
          <Link to={"/contact"} className="g-menu__item-link">
            contact
          </Link>
          <div className="g-menu__item-img">
            <StaticImage src="../../../images/contact-firstView.webp" width={520} height={280} layout="constrained" alt="View More" quality={80} />
          </div>
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>Contact</span>
              <span>Contact</span>
              <span>Contact</span>
              <span>Contact</span>
              <span>Contact</span>
              <span>Contact</span>
              <span>Contact</span>
              <span>Contact</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
        <div className="g-menu__item" style={{ "--i": "1.7s" }}>
          <Link to={"/policy"} className="g-menu__item-link">
            policy
          </Link>
          <div className="g-menu__item-img">
            <StaticImage src="../../../images/policy-firstView.jpg" width={520} height={280} layout="constrained" alt="View More" quality={80} />
          </div>
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>policy</span>
              <span>policy</span>
              <span>policy</span>
              <span>policy</span>
              <span>policy</span>
              <span>policy</span>
              <span>policy</span>
              <span>policy</span>
              <span>policy</span>
            </div>
          </div>
        </div>
      </nav>

      <div className={`circle-bg ${open ? "circleActive" : null}`}></div>
    </>
  );
};
