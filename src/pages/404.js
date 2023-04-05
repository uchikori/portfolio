import * as React from "react";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";

export default function NotFound() {
  return (
    <Layout hasLoadingObj>
      <div id="thanks" className="page-wrapper notFound">
        <figure className="background-movie">
          <video
            src="../images/404-background.mp4"
            loop
            autoPlay
            muted
            playsInline
          ></video>
        </figure>

        <section className="main-visual">
          <div className="main-visual__inner">
            <header className="main-visual__header">
              <div className="main-visual__title">
                <h1 className="title-line head-title head-title__notFound error">
                  <span>
                    <img
                      src="../images/title-notfound.svg"
                      alt="404 not found"
                    />
                  </span>
                </h1>
                <p className="title-line head-text">
                  <span className="info">
                    お探しのページは見つかりませんでした。
                  </span>
                </p>
              </div>
            </header>
          </div>
        </section>

        <footer>
          <small>&copy;UCHIWA Creative Studio.all rights reserved.</small>
        </footer>
      </div>
    </Layout>
  );
}
export const Head = (props) => {
  const { location } = props;
  return (
    <>
      <Seo pagetitle={"ページが見つかりません"} pagepath={location.pathname} />
    </>
  );
};
