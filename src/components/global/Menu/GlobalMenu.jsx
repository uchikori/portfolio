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

  const toggleMenuClass = isInitialRender
    ? ""
    : open
    ? "menu-open"
    : "menu-close";

  useEffect(() => {
    bodyFixed
      ? document.body.classList.add("fixed")
      : document.body.classList.remove("fixed");
  }, [bodyFixed]);

  return (
    <>
      <div
        className={`list-menu hoverTarget ${open ? "menu-active" : null}`}
        onClick={menuOpen}
      >
        <div className="list-menu-top">
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <div className="list-menu-bottom">
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>

      <nav className={`g-menu js-gMenu ${toggleMenuClass} `}>
        <div className="g-menu__item" style={{ "--i": "0.9s" }}>
          <a
            href="<?php echo esc_url(home_url()); ?>"
            className="g-menu__item-link"
          >
            home
          </a>
          <div className="g-menu__item-img">
            <img
              src="/images/home-firstview.webp"
              width="520"
              height="280"
              loading="lazy"
              alt="home"
            />
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
          <a
            href="<?php echo esc_url(home_url('about')); ?>"
            className="g-menu__item-link"
          >
            about
          </a>
          <div className="g-menu__item-img">
            <img
              src="/images/about-firstView.webp"
              width="520"
              height="280"
              loading="lazy"
              alt="about-page"
            />
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
          <a
            href="<?php echo esc_url(home_url('service')); ?>"
            className="g-menu__item-link"
          >
            service
          </a>
          <div className="g-menu__item-img">
            <img
              src="/images/service-firstView.webp"
              width="520"
              height="280"
              loading="lazy"
              alt="service-page"
            />
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
          <a
            href="<?php echo esc_url(home_url('price')); ?>"
            className="g-menu__item-link"
          >
            price
          </a>
          <div className="g-menu__item-img">
            <img
              src="/images/price-firstView.jpg.webp"
              width="520"
              height="280"
              loading="lazy"
              alt="price-page"
            />
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
          <a
            href="<?php echo esc_url(home_url('notes')); ?>"
            className="g-menu__item-link"
          >
            notes
          </a>
          <div className="g-menu__item-img">
            <img
              src="/images/notes-firstView.webp"
              width="520"
              height="280"
              loading="lazy"
              alt="notes-page"
            />
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
          <a
            href="<?php echo esc_url(home_url('gallery')); ?>"
            className="g-menu__item-link"
          >
            works
          </a>
          <div className="g-menu__item-img">
            <img
              src="/images/gallery-firstView.webp"
              width="520"
              height="280"
              loading="lazy"
              alt="works-page"
            />
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
          <a
            href="<?php echo get_post_type_archive_link('web-tips'); ?>"
            className="g-menu__item-link"
          >
            blog
          </a>
          <div className="g-menu__item-img">
            <img
              src="/images/blog-first-view.webp"
              width="520"
              height="280"
              loading="lazy"
              alt="blog-page"
            />
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
          <a
            href="<?php echo esc_url(home_url('contact')); ?>"
            className="g-menu__item-link"
          >
            Contact
          </a>
          <div className="g-menu__item-img">
            <img
              src="/images/contact-firstView.webp"
              width="520"
              height="280"
              loading="lazy"
              alt="contact-page"
            />
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
      </nav>

      <div className={`circle-bg ${open ? "circleActive" : null}`}></div>
    </>
  );
};
