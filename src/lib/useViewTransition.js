import { useEffect } from "react";
import { navigate } from "gatsby";

const useViewTransition = (transitionName) => {
  useEffect(() => {
    const handlePopState = () => {
      //ブラウザのview-transition-apiがサポートされていたら
      if (document.startViewTransition) {
        //[data-view-transition]を持つ要素を取得
        const element = document.querySelector(
          `[data-view-transition="view-transition-${transitionName}"]`
        );
        //要素が存在していたら
        if (element) {
          //view-transitionを開始
          document.startViewTransition(() => {});
        }
      }
    };

    //ブラウザの履歴が変更されたときの挙動（戻るや進む）
    window.addEventListener("popstate", handlePopState);
    return () => {
      //コンポーネントのアンマウント時にイベントリスナーを削除
      window.removeEventListener("popstate", handlePopState);
    };
  }, [transitionName]);
};

export default useViewTransition;
