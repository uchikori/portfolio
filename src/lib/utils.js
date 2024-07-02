import { navigate } from "gatsby";

const basePath = "/web-tips/";
const categoryPath = "/class/";
export const isArchivePage = (url) => {
  const regex = new RegExp(`^${categoryPath}.+`);
  if (
    url === basePath ||
    url?.startsWith(`${basePath}page-`) ||
    regex.test(url)
  ) {
    return true;
  } else {
    return false;
  }
};
export const isBlogPage = (url) => {
  const basePathEscaped = basePath.replace(/\//g, "\\/");
  const regex = new RegExp(`^${basePathEscaped}\\d+/?$`);
  if (regex.test(url)) {
    return true;
  } else {
    return false;
  }
};

export const extractBlogIdFromUrl = (url) => {
  const pathname = url;
  const splitArray = pathname.split("/").filter((item) => item !== "");
  const blogId = splitArray[1];
  return blogId;
};

/**
 * クラスの付け替え発生する場合
 */
export const viewTransition = (url, className) => {
  // return new Promise(async (resolve) => {
  // //現在のURLからBlogIDを取得
  const detailId = extractBlogIdFromUrl(url);
  console.log("BlogID", detailId);

  //BlogIDを持つ要素を取得
  const hasIdElement = document.getElementById(detailId);
  //要素が存在する場合
  if (hasIdElement) {
    //ブラウザがview-transition-apiがサポートしていたら
    if (document.startViewTransition) {
      //ViewTransitionを開始
      const transition = document.startViewTransition(() => {
        /**
         * 現在のページのDOM操作
         */
        //htmlルート要素にクラス名を付ける
        document.documentElement.classList.add(...className);
        //クラス名を付ける
        hasIdElement
          .querySelector(`.gatsby-image-wrapper`)
          .classList.add("transition-active");
        console.log(hasIdElement.querySelector(`.gatsby-image-wrapper`));
        console.log(document.documentElement);
      });
      //ViewTransitionの完了を待機
      transition.finished.finally(() => {
        //DOM操作
        document.documentElement.classList.remove(...className);
        hasIdElement
          .querySelector(`.gatsby-image-wrapper`)
          .classList.remove("transition-active");

        console.log(hasIdElement.querySelector(`.gatsby-image-wrapper`));
        console.log(document.documentElement);
      });
      //ブラウザがview-transition-apiがサポートしていなかったら
    } else {
      //通常のページ遷移
      navigate(url);
    }
  }
  // });
};

/**
 * 要素に最初から固有のview-transition-nameを付けている場合
 */
// export const viewTransition = (url, className) => {
//   // //現在のURLからBlogIDを取得
//   const detailId = extractBlogIdFromUrl(url);
//   console.log("BlogID", detailId);

//   //BlogIDを持つ要素を取得
//   const hasIdElement = document.getElementById(detailId);
//   //要素が存在する場合
//   if (hasIdElement) {
//     //ブラウザがview-transition-apiがサポートしていたら
//     if (document.startViewTransition) {
//       //ViewTransitionを開始
//       const transition = document.startViewTransition(() => {});
//       //ViewTransitionの完了を待機
//       transition.finished.finally(() => {});
//       //ブラウザがview-transition-apiがサポートしていなかったら
//     } else {
//       //通常のページ遷移
//       navigate(url);
//     }
//   }
// };
