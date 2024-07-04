import * as React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  HatenaShareButton,
  FacebookIcon,
  TwitterIcon,
  LineIcon,
  HatenaIcon,
} from "react-share";

export const Share = (props) => {
  const articleTitle = props.title;
  const articleUrl = props.url;

  const iconSize = 32;

  return (
    <div className="share">
      <p className="share__title">share!</p>
      <ul className="share__list">
        <li className="share__item">
          <TwitterShareButton url={articleUrl} title={articleTitle}>
            <TwitterIcon size={iconSize} round={true} />
          </TwitterShareButton>
        </li>
        <li className="share__item">
          <FacebookShareButton url={articleUrl} quote={articleTitle}>
            <FacebookIcon size={iconSize} round={true} />
          </FacebookShareButton>
        </li>
        <li className="share__item">
          <LineShareButton url={articleUrl} title={articleTitle}>
            <LineIcon size={iconSize} round={true} />
          </LineShareButton>
        </li>
        <li className="share__item">
          <HatenaShareButton url={articleUrl} title={articleTitle}>
            <HatenaIcon size={iconSize} round={true} />
          </HatenaShareButton>
        </li>
      </ul>
    </div>
  );
};
