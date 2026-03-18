import * as React from "react";
import { useEffect, useRef } from "react";

export const Adsence = (props) => {
  const { format, slot, path } = props;

  const adRef = useRef(null);

  useEffect(() => {
    // SSR対応: サーバーサイドでは実行しない
    if (typeof window === "undefined") return;

    const initAd = () => {
      if (window.adsbygoogle && adRef.current && adRef.current.innerHTML === "") {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error("Error occurred while pushing to adsbygoogle:", e);
        }
      }
    };

    const checkAndInitAd = () => {
      if (window.adsbygoogle) {
        initAd();
      } else {
        // AdSenseスクリプトが読み込まれるまで待つ（最大5秒）
        const startTime = Date.now();
        const checkTimer = setInterval(() => {
          if (window.adsbygoogle) {
            initAd();
            clearInterval(checkTimer);
          } else if (Date.now() - startTime > 5000) {
            // 5秒以上待ってもスクリプトが読み込まれない場合は終了
            clearInterval(checkTimer);
            console.warn("AdSense script did not load within 5 seconds");
          }
        }, 100);
      }
    };

    // DOMが準備完了になるまで待つ
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", checkAndInitAd);
      return () => document.removeEventListener("DOMContentLoaded", checkAndInitAd);
    } else {
      // 既に準備完了している場合は少し遅延させて実行
      const timer = setTimeout(checkAndInitAd, 100);
      return () => clearTimeout(timer);
    }
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
    // SSR対応: サーバーサイドでは実行しない
    if (typeof window === "undefined") return;

    const initAd = () => {
      if (window.adsbygoogle && adRef.current && adRef.current.innerHTML === "") {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error("Error occurred while pushing to adsbygoogle:", e);
        }
      }
    };

    const checkAndInitAd = () => {
      if (window.adsbygoogle) {
        initAd();
      } else {
        // AdSenseスクリプトが読み込まれるまで待つ（最大5秒）
        const startTime = Date.now();
        const checkTimer = setInterval(() => {
          if (window.adsbygoogle) {
            initAd();
            clearInterval(checkTimer);
          } else if (Date.now() - startTime > 5000) {
            // 5秒以上待ってもスクリプトが読み込まれない場合は終了
            clearInterval(checkTimer);
            console.warn("AdSense script did not load within 5 seconds");
          }
        }, 100);
      }
    };

    // DOMが準備完了になるまで待つ
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", checkAndInitAd);
      return () => document.removeEventListener("DOMContentLoaded", checkAndInitAd);
    } else {
      // 既に準備完了している場合は少し遅延させて実行
      const timer = setTimeout(checkAndInitAd, 100);
      return () => clearTimeout(timer);
    }
  }, [path]);

  return (
    <>
      <ins className="adsbygoogle" style={{ display: "block", textAlign: "center" }} data-ad-client="ca-pub-3842486595943279" data-ad-slot="1692299501" data-ad-format={format} ref={adRef} />
    </>
  );
};
