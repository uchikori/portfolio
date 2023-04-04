import * as React from "react";
import { useEffect } from "react";
export const Adsence = (props) => {
  const { format, path } = props;
  console.log(path);
  useEffect(() => {
    if (window) {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    }
  }, [path]);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", textAlign: "center" }}
      data-ad-client="ca-pub-3842486595943279"
      data-ad-slot="1500727811"
      data-ad-format={format}
    />
  );
};
export const AdsenceContentBottom = (props) => {
  const { format, path } = props;
  useEffect(() => {
    if (window) {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    }
  }, [path]);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", textAlign: "center" }}
      data-ad-client="ca-pub-3842486595943279"
      data-ad-slot="1692299501"
      data-ad-format={format}
    />
  );
};
