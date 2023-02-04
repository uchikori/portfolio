import React from "react";
import { useEffect, useState } from "react";

export const MouseCursor = (props) => {

    //マウス動かしたときの挙動
    const [mouseX, setMouseX] = useState(0);//マウスX座標
    const [mouseY, setMouseY] = useState(0);//マウスY座標
    useEffect(() => {
        const mouseMoveListener = (event) => {
            setMouseX(event.clientX);
            setMouseY(event.clientY);
        }

        window.addEventListener('mousemove', mouseMoveListener);

        return () => {
            window.addEventListener('mousemove', mouseMoveListener);
        };

    },[]);

    //マウスがリンクにホバーした際の挙動
    const [hover, setHover] = useState(false);//カーソルがターゲットに乗った際のトグル
    const links = document.querySelectorAll("a");
    const targets = document.querySelectorAll('.hoverTarget');
    links.forEach((link) => {
        link.onmouseover = () => {
            setHover(true);
        }
        link.onmouseleave = () => {
            setHover(false);
        }
    })
    targets.forEach((target) => {
        target.onmouseover = () => {
            setHover(true);
        }
        target.onmouseleave = () => {
            setHover(false);
        }
    })


    // window.addEventListener('load', ()=>{
    //     if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
    //         const cursor = document.querySelector(".js-cursor");
    //         const follower = document.querySelector(".js-follower");
    //         const link = document.querySelectorAll("a");
    //         const target = document.querySelectorAll('.hoverTarget');

    //         let posX = 0;
    //         let posY = 0;
    //         let mouseX = 0;
    //         let mouseY = 0;

    //         gsap.to({}, 0.007, {
    //             repeat: -1,
    //             onRepeat: function () {
    //                 posX += (mouseX - posX) / 8;
    //                 posY += (mouseY - posY) / 8;

    //                 gsap.set(follower, {
    //                     css: {
    //                         top: posY - 20,
    //                         left: posX - 20
    //                     }
    //                 });

    //                 gsap.set(cursor, {
    //                     css: {
    //                         top: mouseY,
    //                         left: mouseX
    //                     }
    //                 });
    //             }
    //         });

    //         window.addEventListener("mousemove", function (e) {
    //             mouseX = e.pageX;
    //             mouseY = e.pageY;
    //         });

    //         // マウスオーバー時の処理
    //         link.forEach(function (item) {
    //             item.onmouseover = function () {
    //                 follower.classList.add('is-hover');
    //             }
    //             item.onmouseout = function () {
    //                 follower.classList.remove('is-hover');
    //             }
    //         });
    //         target.forEach(function (item) {
    //             item.onmouseover = function () {
    //                 follower.classList.add('is-hover');
    //             }
    //             item.onmouseout = function () {
    //                 follower.classList.remove('is-hover');
    //             }
    //         });
    //     }
    // })


    return (
        <>
            <div className="cursor js-cursor" style={{ transform : `translate(${mouseX}px, ${mouseY}px)` }}></div>

            <div className={`follower js-follower ${ hover ? "is-hover" : ""}`} style={{ transform: `translate(${mouseX}px, ${mouseY}px)` }}></div>
        </>
    )
}