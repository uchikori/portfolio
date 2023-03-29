import * as React from "react";
import { load } from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";
export const Main = (props) => {
  let { content } = props;

  const $ = load(content, null, false);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });
  content = $.html();

  return (
    <main className="flex-item nine-column bg-white">
      <div
        className="singleContents"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </main>
  );
};
