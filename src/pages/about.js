import * as React from "react";
import { ScrollLead } from "../components/global/ScrollLead";
import { Layout } from "../components/Layout";

export default function About() {
  return (
    <>
      <Layout hasLoadingObj={false}>
        <div className="page-wrapper about">
          <div className="scroll-container">
            <section className="main-visual">
              <div className="main-visual__inner">
                <header className="main-visual__header">
                  <div className="main-visual__title">
                    <h1 className="title-line head-title head-title__about">
                      <span>
                        <img
                          src="../images/h2-about.svg"
                          alt="UCHIWA Creative Studioについて"
                        />
                      </span>
                    </h1>
                    <p className="title-line head-text">
                      <span></span>
                    </p>
                  </div>
                </header>
              </div>
              <ScrollLead />
            </section>
            <section className="content">
              <div className="content__inner">
                <div className="page-about">
                  <div className="content__block">
                    <div className="flex-block align-center">
                      <div className="flex-item five-column">
                        <h2 className="flex-item__title">UCHIWAについて</h2>
                        <p></p>
                      </div>
                      <div className="flex-item five-column my-image">
                        <img
                          width="468"
                          height="668"
                          src="../images/about-my-image.webp"
                          alt="ポートレート"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="content__block">
                    <div className="flex-block">
                      <div className="flex-item four-column">
                        <h2 className="flex-item__title">経歴</h2>
                      </div>
                      <div className="flex-item seven-column">
                        <p></p>
                      </div>
                    </div>
                  </div>
                  <div className="content__block">
                    <div className="flex-block">
                      <div className="flex-item four-column">
                        <h2 className="flex-item__title">仕事内容</h2>
                      </div>
                      <div className="flex-item seven-column">
                        <p></p>
                      </div>
                    </div>
                  </div>
                  <div className="content__block">
                    <div className="flex-block">
                      <div className="flex-item four-column">
                        <h2 className="flex-item__title">概要</h2>
                      </div>
                      <div className="flex-item seven-column">
                        <figure className="block-table">
                          <table>
                            <tbody>
                              <tr>
                                <td>屋号</td>
                                <td>UCHIWA Creative Studio</td>
                              </tr>
                              <tr>
                                <td>事業形態</td>
                                <td>個人事業主</td>
                              </tr>
                              <tr>
                                <td>事業主</td>
                                <td>
                                  山内友暉<span>（YUKI YAMAUCHI）</span>
                                </td>
                              </tr>
                              <tr>
                                <td>事業内容</td>
                                <td>
                                  Webサイト制作
                                  <span>
                                    {" "}
                                    (サイトデザイン・コーディング・WordPress実装){" "}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>住所</td>
                                <td>北海道札幌市</td>
                              </tr>
                              <tr>
                                <td>Webサイト</td>
                                <td>
                                  <a href="https://uchiwa-design.net">
                                    https://uchiwa-design.net/
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>MAIL</td>
                                <td>info@uchiwa-design.net</td>
                              </tr>
                            </tbody>
                          </table>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className="content__block">
                    <div className="flex-block">
                      <div className="flex-item four-column">
                        <h2 className="flex-item__title">ソーシャルメディア</h2>
                      </div>
                      <div className="flex-item seven-column sns-tag">
                        <a
                          href="<?php echo esc_url('https://www.instagram.com/uchiwa_cs'); ?>"
                          className="external-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Instagram
                        </a>
                        <a
                          href="<?php echo esc_url('https://www.facebook.com/WEBdesigner.uchiwa'); ?>"
                          className="external-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Facebook
                        </a>
                        <a
                          href="<?php echo get_post_type_archive_link('web-tips'); ?>"
                          className="external-link"
                        >
                          Blog
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <footer>
              <small>&copy;UCHIWA Creative Studio.all rights reserved.</small>
            </footer>
          </div>
        </div>
      </Layout>
    </>
  );
}
