import * as React from "react"
import { GlobalMenu } from "../components/GlobalMenu";
import { Load } from "../components/Load";
import { MouseCursor } from "../components/MouseCursor";
import perlin from "../lib/perlin.js";

export default function Home(props) {
  const { data } = props;

  return (
    <>

      <Load />

      <MouseCursor />

      <div className="container">

        <GlobalMenu />

        <div className="slides">
          <div className="slides-nav">
            <nav className="slides-nav__nav">
              <span className="page-current">01</span>
              <span className="page-line"></span>
              <span className="page-total">07</span>
            </nav>
          </div>
          <div className="scroll-lead">
            Scroll
          </div>
          <div className="sns-block">
            <a href="<?php echo esc_url('https://www.facebook.com/WEBdesigner.uchiwa'); ?>" className="sns-icon" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon-facebook.svg" alt="facebook" />
            </a>
            <a href="<?php echo esc_url('https://www.instagram.com/uchiwa_cs'); ?>" className="sns-icon" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon-instagram.svg" alt="instagram" />
            </a>
            <a href="<?php echo get_post_type_archive_link('web-tips'); ?>" className="sns-icon">
              <img src="/images/icon-blog.svg" alt="blog" />
            </a>
          </div>
          <section className="slide  is-active">
            <div className="slide__content">
              <figure className="slide__figure"><canvas id="siteTopAnimation" className="slide__img" style={{background: "#050523"}}></canvas></figure>
              <header className="slide__header">
                <div className="slide__title">
                  <h1 className="title-line head-title head-title__main"><span><img src="/images/site-title.svg" alt="UCHIWA Creative Studio." /></span></h1>
                  <p className="title-line head-text"><span>自分自身の「好き」を使って、<br />”誰かの「心を動かす」モノを作りたい…”</span></p>
                </div>
              </header>
            </div>
          </section>
          <section className="slide">
            <div className="slide__content">
              <figure className="slide__figure"><div className="slide__img" style={{backgroundImage: "url('/images/about-background.webp')"}}></div></figure>
              <header className="slide__header">
                <div className="slide__title">
                  <h2 className="title-line head-title head-title__about"><span><img src="/images/h2-about.svg" alt="UCHIWA Creative Studioについて" /></span></h2>
                  <p className="title-line head-text"><span>札幌市の個人事業のWebデザイナー。<br />「UCHIWA Creative Studio」という屋号で道内・道外問わず全国のお客様のWebサイト作りに携わらせて頂いております。</span></p>
                  <a href="<?php echo esc_url(home_url('about')); ?>" className="title-line page-link"><span><img src="/images/link.svg" alt="View More" /></span></a>
                </div>
              </header>
            </div>
          </section>
          <section className="slide">
            <div className="slide__content">
              <figure className="slide__figure"><canvas id="service-canvas" className="slide__img" style={{backgroundImage: "url('/images/service-background.jpg.webp')"}}></canvas></figure>              <header className="slide__header">
                <div className="slide__title">
                  <h2 className="title-line head-title head-title__service"><span><img src="/images/title-service.svg" alt="事業・サービス内容" /></span></h2>
                  <p className="title-line head-text"><span>Webを中心に「コンセプトメイキング」「デザイン」「コーディング」等のサイト制作全般の業務を承っております</span></p>
                  <a href="<?php echo esc_url(home_url('service')); ?>" className="title-line page-link"><span><img src="/images/link.svg" alt="View More" /></span></a>
                </div>
              </header>
            </div>
          </section>
          <section className="slide">
            <div className="slide__content">
              <figure className="slide__figure"><div className="slide__img" style={{backgroundImage: "url('/images/price-background.jpg.webp')"}}></div></figure>
              <header className="slide__header">
                <div className="slide__title">
                  <h2 className="title-line head-title head-title__works"><span><img src="/images/title-price.svg" alt="制作料金表" /></span></h2>
                  <p className="title-line head-text"><span>Webサイト制作にかかる料金表を掲載しております。<br />ご検討の際の目安にぜひご参考ください。</span></p>
                  <a href="<?php echo esc_url(home_url('price')); ?>" className="title-line page-link"><span><img src="/images/link.svg" alt="View More" /></span></a>
                </div>
              </header>
            </div>
          </section>
          <section className="slide">
            <div className="slide__content">
              <figure className="slide__figure"><div className="slide__img" style={{backgroundImage: "url('/images/gallery-background.jpg.webp')"}}></div></figure>
              <header className="slide__header">
                <div className="slide__title">
                  <h2 className="title-line head-title head-title__works"><span><img src="/images/title-works.svg" alt="制作実績" /></span></h2>
                  <p className="title-line head-text"><span>これまでのお仕事の中でお客様から掲載の許可を頂いているもののみを公開しています。※他趣味制作のものも掲載</span></p>
                  <a href="<?php echo esc_url(home_url('gallery')); ?>" className="title-line page-link"><span><img src="/images/link.svg" alt="View More" /></span></a>
                </div>
              </header>
            </div>
          </section>
          <section className="slide">
            <div className="slide__content">
              <figure className="slide__figure"><div className="slide__img" style={{backgroundImage: "url('/images/blog-background.jpg.webp')"}}></div></figure>
              <header className="slide__header">
                <div className="slide__title">
                  <h2 className="title-line head-title head-title__blog"><span><img src="/images/title-blog.svg" alt="ブログ" /></span></h2>
                  <p className="title-line head-text"><span>Web運用や制作に役立つ情報発信メディア。<br />お客様自身が「Webクリエイター」になれる、そんな情報発信を目指しています。</span></p>
                  <a href="<?php echo get_post_type_archive_link('web-tips'); ?>" className="title-line page-link" ><span><img src="/images/link.svg" alt="View More" /></span></a>
                </div>
                <div className="slide__swiper swiper-container">
                  <a className="blog-item swiper-slide" href="<?php the_permalink(); ?>">
                    <div className="blog-item__image">
                      <img />
                      <div className="blog-item__overlay">
                        READ MORE
                      </div>
                    </div>
                    <div className="blog-item__text-box">
                      <h3 className="blog-title">
                        WordPressで自作のWebサイトを開設する方法【①ドメイン取得とサーバー契約編】                
                      </h3>
                      <time className="blog-postTime" dateTime="<?php the_time('Y-m-d'); ?>"></time>
                    </div>
                  </a>
                </div>
              </header>
            </div>
          </section>
          <section className="slide">
            <div className="slide__content">
              <figure className="slide__figure"><div className="slide__img" style={{backgroundImage: "url('/images/contact-background.jpg.webp')"}}></div></figure>
              <header className="slide__header">
                <div className="slide__title">
                  <h2 className="title-line head-title head-title__service"><span><img src="/images/title-contact.svg" alt="お問い合わせ" /></span></h2>
                  <p className="title-line head-text"><span>Webサイト立ち上げのご相談、お見積りのご依頼（無料）などお気軽にお問い合わせください</span></p>
                  <a href="<?php echo esc_url(home_url('contact')); ?>" className="title-line page-link"><span><img src="/images/link.svg" alt="View More" /></span></a>
                </div>
              </header>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
