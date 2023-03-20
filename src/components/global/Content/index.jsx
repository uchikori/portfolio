import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import * as React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import { ContactLink } from "../ContactLink";
import { PageFooter } from "../PageFooter";

gsap.registerPlugin(ScrollTrigger);

export const Content = (props) => {
  const { children, contentClass } = props;

  const scrollWraper = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const items = self.selector(".content__block");
      items.forEach((item) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=25%",
            end: "center center",
            onEnter: function () {
              item.classList.add("scroll-on");
            },
          },
        });
      });
    }, scrollWraper);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <>
      <section className="content" ref={scrollWraper}>
        <div className="content__inner">
          <div className={`content__${contentClass}`}>{children}</div>
          <ContactLink />
        </div>
      </section>
      <PageFooter />
    </>
  );
};
