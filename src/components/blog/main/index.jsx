import * as React from "react";
import { load } from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";
import { AdsenceContentBottom } from "../../adsence";
import { useLocation } from "@reach/router";
import { RelatedPosts } from "../../relatedposts";
export const BlogContents = (props) => {
  const location = useLocation();
  const { catId, id } = props;
  let { content } = props;

  const $ = load(content, null, false);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });
  content = $.html();

  return (
    <div className="flex-item ">
      <div className="singleContents" dangerouslySetInnerHTML={{ __html: content }}></div>
      <RelatedPosts id={id} catId={catId} />
      <AdsenceContentBottom format="auto" path={location.pathname} />
    </div>
  );
};
