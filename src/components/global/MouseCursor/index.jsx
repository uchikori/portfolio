import React from "react";
import { useEffect, useState } from "react";

export const MouseCursor = () => {
  //マウス動かしたときの挙動
  const [mouseX, setMouseX] = useState(0); //マウスX座標
  const [mouseY, setMouseY] = useState(0); //マウスY座標
  useEffect(() => {
    const mouseMoveListener = (event) => {
      setMouseX(event.pageX);
      setMouseY(event.pageY);
    };

    window.addEventListener("mousemove", mouseMoveListener);

    return () => {
      window.addEventListener("mousemove", mouseMoveListener);
    };
  });

  //マウスがリンクにホバーした際の挙動
  const [hover, setHover] = useState(false); //カーソルがターゲットに乗った際のトグル
  useEffect(() => {
    const links = document.querySelectorAll("a");
    const targets = document.querySelectorAll(".hoverTarget");
    links.forEach((link) => {
      link.onmouseover = () => {
        setHover(true);
      };
      link.onmouseleave = () => {
        setHover(false);
      };
    });
    targets.forEach((target) => {
      target.onmouseover = () => {
        setHover(true);
      };
      target.onmouseleave = () => {
        setHover(false);
      };
    });
  }, [hover]);

  return (
    <>
      <div
        className="cursor js-cursor"
        style={{ transform: `translate(${mouseX}px, ${mouseY}px)` }}
      ></div>

      <div
        className={`follower js-follower ${hover ? "is-hover" : ""}`}
        style={{ transform: `translate(${mouseX}px, ${mouseY}px)` }}
      ></div>
    </>
  );
};
