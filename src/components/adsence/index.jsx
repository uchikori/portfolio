import * as React from "react";
import { useEffect, useRef } from "react";
export const Adsence = (props) => {
  const { format, slot, path } = props;

  const adRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        if (window.adsbygoogle && adRef.current && !adRef.current.innerHTML) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {
        console.error("Error occurred while pushing to adsbygoogle:", e);
      }
    }, 1000); // 1秒遅延して広告を初期化
    return () => clearTimeout(timer);
  }, [path]);

  return (
    <>
      <ins className="adsbygoogle" style={{ display: "block", textAlign: "center" }} data-ad-client="ca-pub-3842486595943279" data-ad-slot="1500727811" data-ad-format={format} data-full-width-responsive="false" ref={adRef} />
    </>
  );
};
export const AdsenceContentBottom = (props) => {
  const { format, slot, path } = props;

  const adRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        if (window.adsbygoogle && adRef.current && !adRef.current.innerHTML) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {
        console.error("Error occurred while pushing to adsbygoogle:", e);
      }
    }, 1000); // 1秒遅延して広告を初期化
    return () => clearTimeout(timer);
  }, [path]);

  return (
    <>
      <ins className="adsbygoogle" style={{ display: "block", textAlign: "center" }} data-ad-client="ca-pub-3842486595943279" data-ad-slot="1692299501" data-ad-format={format} ref={adRef} />
    </>
  );
};
