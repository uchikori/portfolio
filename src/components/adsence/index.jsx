import * as React from "react";
import { useEffect } from "react";
export const Adsence = (props) => {
  const { format, path } = props;
  useEffect(() => {
    if (window) {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    }
  }, [path]);

  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3842486595943279" crossorigin="anonymous"></script>
      <ins className="adsbygoogle" style={{ display: "block", textAlign: "center" }} data-ad-client="ca-pub-3842486595943279" data-ad-slot="1500727811" data-ad-format={format} data-full-width-responsive="false" />
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </>
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
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3842486595943279" crossorigin="anonymous"></script>
      <ins className="adsbygoogle" style={{ display: "block", textAlign: "center" }} data-ad-client="ca-pub-3842486595943279" data-ad-slot="1692299501" data-ad-format={format} />
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </>
  );
};
