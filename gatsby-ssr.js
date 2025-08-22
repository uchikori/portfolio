const React = require("react");

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  // <html lang="ja"> を設定
  setHtmlAttributes({ lang: "ja" });

  // Google AdSense のスクリプトを head に追加
  setHeadComponents([<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3842486595943279" crossOrigin="anonymous"></script>]);
};
