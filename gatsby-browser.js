import "/src/components/styles/style.scss";
// import "@fontsource/orbitron/500.css";
// import "@fontsource/orbitron/600.css";
import "@fontsource/orbitron/700.css";
import "@fontsource/orbitron/900.css";
// import "@fontsource/noto-sans-jp/500.css";
// import "@fontsource/noto-sans-jp/700.css";
// import "@fontsource/noto-sans-jp/900.css";
import {
  isArchivePage,
  isBlogPage,
  extractBlogIdFromUrl,
  viewTransition,
} from "./src/lib/utils";

//ページ遷移開始時
export const onPreRouteUpdate = ({ location, prevLocation }) => {
  //現在のURLを取得
  const currentUrl = location.pathname;
  console.log("current pathname", currentUrl);
  //遷移先のURLを取得
  const targetUrl = prevLocation ? prevLocation.pathname : null;
  console.log("new pathname", targetUrl);

  //現在のURLがBlogページ&遷移先のURLがArchiveページの場合
  if (isBlogPage(currentUrl) && isArchivePage(targetUrl)) {
    console.log("ブログ記事からアーカイブへの遷移です");
    const navigationClass = ["currentBlog", "toArchive"];

    viewTransition(currentUrl, targetUrl, navigationClass);
  }
  //現在のURLがArchiveページ&遷移先のURLがBlogページの場合
  if (isArchivePage(currentUrl) && isBlogPage(targetUrl)) {
    console.log("アーカイブからブログ記事への遷移です");
    const navigationClass = ["currentArchive", "toBlog"];

    viewTransition(targetUrl, targetUrl, navigationClass);
  }
  //現在のURLがBlogページ&遷移先のURLがBlogページの場合
  // if (isBlogPage(currentUrl) && isBlogPage(targetUrl)) {
  //   console.log("ブログ記事からブログ記事への遷移です");
  //   const navigationClass = ["currentBlog", "toBlog"];

  //   viewTransition(targetUrl, navigationClass);
  // }
};

// ページ遷移完了後
export const onRouteUpdate = async ({ location, prevLocation }) => {
  //現在のURLを取得
  const currentUrl = location.pathname;
  console.log("current pathname", currentUrl);
  //遷移元のURLを取得
  const fromUrl = prevLocation ? prevLocation.pathname : null;
  console.log("from pathname", fromUrl);

  //現在のURLがBlogページ&遷移元のURLがArchiveページの場合
  if (isBlogPage(currentUrl) && isArchivePage(fromUrl)) {
    console.log("アーカイブからブログ記事への遷移です");
    const navigationClass = ["currentBlog", "fromArchive"];
    // await viewTransition(currentUrl, navigationClass);

    //現在のURLからBlogIDを取得
    const detailId = extractBlogIdFromUrl(currentUrl);
    console.log("BlogID", detailId);
    const hasIdElement = document.getElementById(detailId);
    //DOM操作
    if (hasIdElement) {
      console.log(hasIdElement.querySelector(`.gatsby-image-wrapper`));
      hasIdElement
        .querySelector(`.gatsby-image-wrapper`)
        .classList.add("transition-active");
      setTimeout(() => {
        hasIdElement
          .querySelector(`.gatsby-image-wrapper`)
          .classList.remove("transition-active");
        console.log(hasIdElement.querySelector(`.gatsby-image-wrapper`));
      }, 2000);
    }
  }
  //現在のURLがArchiveページ&遷移元のURLがBlogページの場合
  if (isArchivePage(currentUrl) && isBlogPage(fromUrl)) {
    console.log("ブログ記事からアーカイブへの遷移です");
    const navigationClass = ["currentArchive", "fromBlog"];
    // await viewTransition(fromUrl, navigationClass);

    //現在のURLからBlogIDを取得
    const detailId = extractBlogIdFromUrl(fromUrl);
    console.log("BlogID", detailId);
    const hasIdElement = document.getElementById(detailId);
    //DOM操作
    if (hasIdElement) {
      hasIdElement
        .querySelector(`.gatsby-image-wrapper`)
        .classList.add("transition-active");
      console.log(hasIdElement.querySelector(`.gatsby-image-wrapper`));
      setTimeout(() => {
        hasIdElement
          .querySelector(`.gatsby-image-wrapper`)
          .classList.remove("transition-active");
        console.log(hasIdElement.querySelector(`.gatsby-image-wrapper`));
      }, 2000);
    }
  }
  //現在のURLがBlogページ&遷移元のURLがBlogページの場合
  // if (isBlogPage(currentUrl) && isBlogPage(fromUrl)) {
  //   console.log("ブログ記事からブログ記事への遷移です");
  //   const navigationClass = ["currentBlog", "fromBlog"];
  //   // await viewTransition(fromUrl, navigationClass);

  //   //現在のURLからBlogIDを取得
  //   const detailId = extractBlogIdFromUrl(currentUrl);
  //   console.log("BlogID", detailId);
  //   const hasIdElement = document.getElementById(detailId);
  //   //DOM操作

  //   hasIdElement
  //     .querySelector(".gatsby-image-wrapper")
  //     .classList.add("transition-active");
  //   setTimeout(() => {
  //     hasIdElement
  //       .querySelector(".gatsby-image-wrapper")
  //       .classList.remove("transition-active");
  //     console.log(hasIdElement.querySelector(".gatsby-image-wrapper"));
  //   });
  // }
};
