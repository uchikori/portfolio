import * as React from "react";
import { Content } from "../components/global/Content";
import { MainVisual } from "../components/global/MainVisual";
import { PageHeader } from "../components/page/PageHeader";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";
import { graphql } from "gatsby";

export default function Notes() {
  return (
    <>
      <Layout hasLoadingObj={false}>
        <div className="page-wrapper notes">
          <div className="scroll-container">
            <MainVisual>
              <PageHeader
                titleImage="title-notes"
                titleClass={"notes"}
                subTitle={`制作の過程でお客様ご自身に準備して頂きたいものや、\nご依頼前に事前にご確認頂きたい注意事項をまとめます`}
                alt="事前確認事項"
              />
            </MainVisual>
            <Content contentClass="notes">
              <div className="content__block">
                <h2>お見積り前のヒアリング事項</h2>
                <div className="list-wrap">
                  <ul className="hearing-list">
                    <li className="list-item">
                      サイト制作の内容
                      <br className="only-tab" />
                      <span>（新規立ち上げ、リニューアル)</span>
                    </li>
                    <li className="list-item">
                      サイトの種類
                      <br className="only-tab" />
                      <span>（コーポレートサイト、メディアサイト、LP等）</span>
                    </li>
                    <li className="list-item">ご希望の納期</li>
                    <li className="list-item">競合他社・参考にしたいサイト</li>
                    <li className="list-item">想定されるおおよそのページ数</li>
                    <li className="list-item">
                      画像データ・テキストデータの有無
                    </li>
                    <li className="list-item">
                      サーバー・ドメインの有無
                      <br className="only-tab" />
                      <span>（お客様の方で準備可能かどうか）</span>
                    </li>
                    <li className="list-item">全体のご予算</li>
                  </ul>
                </div>
                <div className="lead-text">
                  すべての項目は下記よりご確認できます。
                </div>
                <a
                  href="https://docs.google.com/forms/d/1AUwiErMWtScRxn9sW9tx1u58z2wfGXCblTflSJIrD-U/edit"
                  className="external-link google-forms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ヒアリングシート
                </a>
              </div>
              <div className="content__block">
                <h2>一般的なサイト制作の流れ</h2>
                <div className="flex-block align-center">
                  <div className="flex-item flow-number three-column">
                    <span className="flow-number-icon">01</span>
                  </div>
                  <div className="flex-item nine-column">
                    <h3 className="flow-item-title">見積前ヒアリング</h3>
                    <p>
                      上記の
                      <a
                        href="https://docs.google.com/forms/d/1AUwiErMWtScRxn9sW9tx1u58z2wfGXCblTflSJIrD-U/edit"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ヒアリングシート
                      </a>
                      を基に見積金額の算出とその後の制作に必要な項目のヒアリングをおこないます。
                    </p>
                  </div>
                </div>
                <div className="flex-block align-center">
                  <div className="flex-item flow-number three-column">
                    <span className="flow-number-icon">02</span>
                  </div>
                  <div className="flex-item nine-column">
                    <h3 className="flow-item-title">見積作成</h3>
                    <p>
                      作業全体の工数を試算し、それを基に正式なお見積りを作成します。
                    </p>
                  </div>
                </div>
                <div className="flex-block align-center">
                  <div className="flex-item flow-number three-column">
                    <span className="flow-number-icon">03</span>
                  </div>
                  <div className="flex-item nine-column">
                    <h3 className="flow-item-title">本契約</h3>
                    <p>
                      お見積りの内容にご納得頂いた後、本契約となります。契約時には「請負基本契約書」を締結させて頂きます
                    </p>
                  </div>
                </div>
                <div className="flex-block align-center">
                  <div className="flex-item twelve-column">
                    <span className="section-separate">制作工程</span>
                  </div>
                </div>
                <div className="flex-block align-center">
                  <div className="flex-item flow-number three-column">
                    <span className="flow-number-icon">04</span>
                  </div>
                  <div className="flex-item nine-column">
                    <h3 className="flow-item-title">
                      サイト設計・
                      <br className="only-tab" />
                      ワイヤーフレーム作成
                    </h3>
                    <p>
                      ヒアリング内容を基に、サイト全体の構造を示したサイトマップの作成、ページごとのレイアウト設計を示したワイヤーフレーム作成と順に進めていきます。（テキスト原稿の準備が整っていない場合はワイヤーを基にお客様の方で内容をご考案頂きます。）
                    </p>
                  </div>
                </div>
                <div className="flex-block align-center">
                  <div className="flex-item flow-number three-column">
                    <span className="flow-number-icon">05</span>
                  </div>
                  <div className="flex-item nine-column">
                    <h3 className="flow-item-title">サイトデザイン</h3>
                    <p>
                      ワイヤーフレームを基に、各ページのデザインを作りこんでいきます。まずはTOPページをしっかりと作りこみ、全体の雰囲気や世界観を構築します。お客様との合意が得られた段階で、残りの下層ページについてはＴＯＰページを基に一気に作りこんでいきます。
                    </p>
                  </div>
                </div>
                <div className="flex-block align-center">
                  <div className="flex-item flow-number three-column">
                    <span className="flow-number-icon">06</span>
                  </div>
                  <div className="flex-item nine-column">
                    <h3 className="flow-item-title">
                      サイトのマークアップ
                      <span className="only-tab">（コーディング）</span>
                    </h3>
                    <p>
                      HTML/CSS/JavaScript(jQuery)を使用して、サイト全体のコーディングを行っていきます。
                      <br />
                      WordPressを用いる場合はこの段階で組み込みも行っていきます。
                      <br />
                      基本的にはコーディング段階に入ってからのデザインの修正はできませんのでご了承ください。
                    </p>
                  </div>
                </div>
                <div className="flex-block align-center">
                  <div className="flex-item flow-number three-column">
                    <span className="flow-number-icon">07</span>
                  </div>
                  <div className="flex-item nine-column">
                    <h3 className="flow-item-title">全体チェック・修正</h3>
                    <p>
                      サイト全体が完成した後に私とお客様の方で最終チェックを行います。チェック方法としては、私が持つテスト用のサーバーにサイト一式をアップロードして、そのＵＲＬにお客様の方でアクセス頂きご確認いただきます。
                    </p>
                  </div>
                </div>
                <div className="flex-block align-center">
                  <div className="flex-item flow-number three-column">
                    <span className="flow-number-icon">08</span>
                  </div>
                  <div className="flex-item nine-column">
                    <h3 className="flow-item-title">Webサイトの公開</h3>
                    <p>
                      修正を終え、問題がないことが確認出来たら、本番用のサーバーにアップロードし晴れてWebサイトのリリースとなります。
                    </p>
                  </div>
                </div>
              </div>
              <div className="content__block">
                <h2>ご依頼時の注意事項</h2>
                <div className="list-wrap">
                  <ul className="cautions-list">
                    <li className="list-item">
                      ドメイン・サーバーの契約および管理代行は行っていおりません。もし、契約方法が分からない場合はご相談ください。
                    </li>
                    <li className="list-item">
                      また、完成したサイトのその後の運用(ブログ記事を更新する等々）などもこちらでは対応できませんので。あらかじめご了承ください。
                    </li>
                    <li className="list-item">
                      完成したサイトは私自身の「制作実績」として、公開することを前提とした契約とさせて頂きます。もし、事情がありどうしても掲載したくないという場合は契約時にその旨をお伝えください
                    </li>
                  </ul>
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
      <Seo
        pageTitle={"事前確認事項"}
        pageDesc={
          "制作の過程でお客様ご自身に準備して頂きたいものや、\nご依頼前に事前にご確認頂きたい注意事項をまとめます"
        }
        pagePath={`/notes/`}
        pageImg={data.notes.childImageSharp.original.src}
      />
    </>
  );
};

export const query = graphql`
  query {
    notes: file(relativePath: { eq: "service-background.jpg" }) {
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
