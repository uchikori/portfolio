import React from "react";
import { navigate } from "gatsby";
// import { isArchivePage, isBlogPage } from "../../lib/utils";

const TransitionLink = ({ id, to, children, transitionName, currentPath, ...props }) => {
  //リンクがクリックされたときの処理
  const handleClick = async (e) => {
    //デフォルトの挙動のページ遷移をキャンセル
    e.preventDefault();
    //ブラウザがview-transition-apiがサポートされていたら
    if (document.startViewTransition) {
      // const transition = document.startViewTransition(() => {
      //   const parentIdElement = document.getElementById(id);
      //   parentIdElement
      //     .querySelector(".gatsby-image-wrapper")
      //     .classList.add("transition-active");
      //   console.log(parentIdElement.querySelector(".gatsby-image-wrapper"));
      // });

      // await transition.finished.finally(() => {
      //   const parentIdElement = document.getElementById(id);

      //   console.log(parentIdElement.querySelector(".gatsby-image-wrapper"));
      // });
      // navigate(to);

      // //ViewTransitionを開始

      const transition = document.startViewTransition(() => {
        // console.log("ViewTransitionを開始");
      });

      navigate(to);

      //遷移先が記事ページで、現在のページがアーカイブページの場合
      // if (isBlogPage(to) && isArchivePage(currentPath)) {
      //   console.log(targetRef.current);
      //   //要素がある場合
      //   if (targetRef.current) {
      //     // //ViewTransitionを開始
      //     const transition = document.startViewTransition(() => {
      //       targetRef.current.querySelector(
      //         ".gatsby-image-wrapper"
      //       ).style.viewTransitionName = "banner-image";
      //     });
      //     console.log(targetRef.current.querySelector(".gatsby-image-wrapper"));

      //     await transition.finished.finally(() => {
      //       if (targetRef.current) {
      //         targetRef.current.querySelector(
      //           ".gatsby-image-wrapper"
      //         ).style.viewTransitionName = "";
      //       }
      //     });

      //     //要素がない場合
      //   } else {
      //     console.log("targetRef.current is null");
      //     //リンクを実行
      //     // navigate(to);
      //   }
      // }
      //ブラウザがview-transition-apiがサポートされていない場合
    } else {
      navigate(to);
    }
  };

  return (
    <a id={id} onClick={handleClick} href={to} {...props}>
      {children}
    </a>
  );
};

export default TransitionLink;
