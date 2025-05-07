import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Content } from "../components/global/Content";
import { MainVisual } from "../components/global/MainVisual";
import { PageHeader } from "../components/page/PageHeader";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";

export default function About(props) {
  return (
    <>
      <Layout hasLoadingObj={false}>
        <div className="page-wrapper about">
          <span className="backgroundImage">
            <StaticImage src="../images/about-background.jpg" layout="fullWidth" placeholder="blurred" quality={90} alt="" />
          </span>
          <div className="scroll-container">
            <MainVisual>
              <PageHeader titleImage="h2-about" titleClass={"about"} subTitle={`札幌市の個人事業のWebデザイナー。\n「UCHIWA Creative Studio」という屋号で道内・道外問わず全国のお客様のWebサイト作りに携わらせて頂いております。`} alt="UCHIWA Creative Studio.について" />
            </MainVisual>

            <Content contentClass="about">
              <div className="content__block">
                <div className="flex-block align-center">
                  <div className="flex-item five-column">
                    <h2 className="flex-item__title">UCHIWAについて</h2>
                    <p>
                      北海道札幌市在住
                      <br />
                      本名：山内友暉と申します。
                      <br />
                      <br />
                      とにかく”作ることが好き”、”デザインが好き”、”コードを書くことが好き”
                      <br />
                      そんな人間です。
                      <br />
                      <br />
                      自分自身の「好き」を使って、”誰かの「心を動かす」モノを作りたい…”
                      <br />
                      そんな大それた野望を胸にお客様と2人3脚で作り上げていくことを心がけています。
                      <br />
                      <br />
                      サウナとバイクをこよなく愛する北海道民です。
                    </p>
                  </div>
                  <div className="flex-item five-column my-image">
                    <StaticImage src="../images/about-my-image.webp" width={468} height={668} quality={90} layout="constrained" placeholder="blurred" alt="ポートレート" />
                  </div>
                </div>
              </div>
              <div className="content__block">
                <div className="flex-block">
                  <div className="flex-item four-column">
                    <h2 className="flex-item__title">経歴</h2>
                  </div>
                  <div className="flex-item seven-column">
                    <p>
                      大学卒業後、東京の商社でパッケージシステム等の営業を経験。
                      <br />
                      <br />
                      その後北海道に戻り、ソフトウェア会社にてSEとして2年ほど勤務致しました。そこではプロジェクトの管理やシステムの導入に関わる支援全般を行っていました。
                      <br />
                      <br />
                      正直、これらの前職での経験が今の自分自身の活動に一番活きていると個人的には思います。
                      <br />
                      「人生無駄なことは一つもない」ということを身をもって体感しております。
                      <br />
                      <br />
                      会社に勤めつつ、昔から好きだった「何かを作ること」が諦められず、もともと興味のあったWeb業界について知識や技術を独学で学び続けていました。
                      <br />
                      <br />
                      その後独立した後は幸運にも制作会社様や個人のお客様などとお取引きさせて頂き今に至ります。
                    </p>
                  </div>
                </div>
              </div>
              <div className="content__block">
                <div className="flex-block">
                  <div className="flex-item four-column">
                    <h2 className="flex-item__title">仕事内容</h2>
                  </div>
                  <div className="flex-item seven-column">
                    <p>
                      Webデザイナーとして、ランディングページの制作、コーポレートサイトの制作、バナー広告の制作等を主軸に活動しています。
                      <br />
                      メインではありませんがたまに名刺のデザインなども承っています。
                      <br />
                      <br />
                      お客様との直接契約の他、制作会社様からのご依頼案件などをメインに活動しています
                    </p>
                  </div>
                </div>
              </div>
              <div className="content__block">
                <div className="flex-block">
                  <div className="flex-item four-column">
                    <h2 className="flex-item__title">運営者情報</h2>
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
                              <span> (サイトデザイン・コーディング・WordPress実装) </span>
                            </td>
                          </tr>
                          <tr>
                            <td>住所</td>
                            <td>北海道札幌市</td>
                          </tr>
                          <tr>
                            <td>Webサイト</td>
                            <td>
                              <Link to={"/"}>https://uchiwa-design.net/</Link>
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
                    <a href="https://www.instagram.com/uchiwa_cs" className="external-link" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                    <a href="https://www.facebook.com/WEBdesigner.uchiwa" className="external-link" target="_blank" rel="noopener noreferrer">
                      Facebook
                    </a>
                    <Link to={"/blog"} className="external-link">
                      Blog
                    </Link>
                  </div>
                </div>
              </div>
            </Content>
          </div>
        </div>
      </Layout>
    </>
  );
}

export const Head = (props) => {
  const { data } = props;
  return (
    <>
      <Seo pageTitle={"UCHIWA Creative Studio.について"} pageDesc={"札幌市の個人事業のWebデザイナー。「UCHIWA Creative Studio」という屋号で道内・道外問わず全国のお客様のWebサイト作りに携わらせて頂いております"} pagePath={`/about/`} pageImg={data.about.childImageSharp.original.src} />
    </>
  );
};

export const query = graphql`
  query {
    about: file(relativePath: { eq: "about-background.jpg" }) {
      childImageSharp {
        original {
          src
          height
          width
        }
      }
    }
  }
`;
