import React from "react";
import { navigate } from "gatsby";

const TransitionLink = ({ to, children, transitionName, ...props }) => {
  //リンクがクリックされたときの処理
  const handleClick = async (e) => {
    //デフォルトの挙動のページ遷移をキャンセル
    // e.preventDefault();
    //ブラウザがview-transition-apiがサポートされていたら
    if (document.startViewTransition) {
      //transitionNameを使って要素を取得
      const element = document.querySelector(
        `[data-view-transition="view-transition-${transitionName}"]`
      );

      //要素がある場合
      if (element) {
        //ViewTransitionを開始
        document.startViewTransition(() => {
          console.log("startViewTransition");
          //リンクを実行
          // navigate(to);
        });
        //要素がない場合
      } else {
        //リンクを実行
        // navigate(to);
      }
      //ブラウザがview-transition-apiがサポートされていない場合
    } else {
      navigate(to);
    }
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default TransitionLink;
