import { useEffect } from "react";
import { navigate } from "gatsby";

export const useViewTransition = () => {
  useEffect(() => {
    const handlePopState = async () => {
      //ブラウザのview-transition-apiがサポートされていたら
      if (document.startViewTransition) {
        // const transition = document.startViewTransition(() => {
        //   const hasIdElement = document.getElementById(id);
        //   if (hasIdElement) {
        //     hasIdElement
        //       .querySelector(".gatsby-image-wrapper")
        //       .classList.add("transition-active");
        //   }
        //   console.log(hasIdElement.querySelector(".gatsby-image-wrapper"));
        // });

        // await transition.finished.finally(() => {
        //   const hasIdElement = document.getElementById(id);
        //   if (hasIdElement) {
        //     hasIdElement
        //       .querySelector(".gatsby-image-wrapper")
        //       .classList.remove("transition-active");
        //   }
        //   console.log(hasIdElement.querySelector(".gatsby-image-wrapper"));
        // });
        document.startViewTransition(() => {});
      }
    };

    //ブラウザの履歴が変更されたときの挙動（戻るや進む）
    window.addEventListener("popstate", handlePopState);
    return () => {
      //コンポーネントのアンマウント時にイベントリスナーを削除
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
};
