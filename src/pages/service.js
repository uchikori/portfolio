import * as React from "react";
import { Content } from "../components/global/Content";
import { MainVisual } from "../components/global/MainVisual";
import { PageHeader } from "../components/global/PageHeader";
import { SvgAnimation } from "../components/service/SvgAnimation";
import { Layout } from "../components/Layout";
import { Link } from "gatsby";
import { Accordion } from "../components/service/accordion";
import { Seo } from "../components/Seo";

export default function Service() {
  return (
    <>
      <Layout hasLoadingObj={false}>
        <div className="page-wrapper service">
          <div className="scroll-container">
            <MainVisual>
              <PageHeader
                titleImage="title-service"
                titleClass={"service"}
                subTitle={`Webを中心に「コンセプトメイキング」「デザイン」「コーディング」等のサイト制作全般の業務を承っております`}
                alt="事業・サービス内容"
              />
            </MainVisual>

            <Content contentClass="service">
              <div className="content__block">
                <h2>UCHIWA Creative Studioが考える「Webデザイン」</h2>
                <p>
                  今やインターネットが世間一般に普及したことによって、自社の広告塔としてWebを利用することはごくごく当たり前になりつつあります。
                  <br />
                  さらに、ノーコードツールなどのアプリケーション側の技術も相まって、今や特別な技術がなくとも誰でも簡単に自分のWebサイトを持てる時代になりました。
                  <br />
                  <br />
                  そんな中で我々のようなWeb制作者に求められることは果たして何なのでしょうか？？
                  <br />
                  <br />
                  ・単なる「ホームページを作ること」？
                  <br />
                  ・「キレイにデザインできること」？
                  <br />
                  <br />
                  私自身が思うにそれは、「お客様のサービスの価値をきちんと世間に届けること…」だと思います。
                  <br />
                  <br />
                  私のような制作者が自分自身の仕事を「Webサイトを作ることだ！」と定義づけしまうと、一番大事な「何のために」「何を」「誰に」「どのように」ということをしばしば忘れてしまいがちです。
                  <br />
                  先ほど述べた「ホームページを作ること」「キレイなデザイン」というのはあくまでも制作者としての表現方法であり、それは「何のために」「何を」「誰に」「どのように」（私はこれをコンセプトメイキングと呼んでいます）ということを考えたあとの話になるのではないでしょうか？
                  <br />
                  <br />
                  UCHIWA Creative
                  Studioでは表現方法だけに注力せずに、その前のコンセプト作りにもしっかりと力を入れ、お客様にとって本当に価値のあるWebサイトを作ることを目指しています。
                </p>
              </div>
              <div className="content__block">
                <SvgAnimation />
              </div>
              <div className="content__block">
                <Accordion
                  headingtitle="concept"
                  headingAlt="concept"
                  text={`「Webサイトを作りたい」と思っても、実際には「何から始めたら良いかわからない…」という方も多くいらっしゃるのではないでしょうか。\nそんな方のためには、ヒアリングシートをご準備し、サイトの目指す方向性をお客様と一緒に考え認識合わせを行います。\n方向性が決まったら、ヒアリングの内容や競合他社サイトの調査からWebサイト全体の構成を考えます（サイトマップ作成）。\nさらにサイトマップが完成したら、デザインの骨格となる「ワイヤーフレーム」を作成しお客様との最終確認を行った後、デザインフェーズへと進みます。（基本的には１ステップづつお客様とコミュニケーションを図りながら進めていきます）\n\n・ヒアリングシートお渡し\n・コンセプト決定\n・競合調査\n・サイトマップ作成\n・ワイヤーフレーム作成\n※あくまでも一般的な流れであり、すべての制作過程がこの限りではありません。`}
                />
                <Accordion
                  headingtitle="design"
                  headingAlt="design"
                  text={`サイトのコンセプトや参考サイトを基に全体のデザインを構築していきます。\nまずはFV（ファーストビュー画面）のみを作り上げそこで一度お客様との確認を行い、その後TOPページ全体を構築していきます。\n下層ページデザインの段階へ進んだ後は、基本的には最後まで一気に完成させ、最後にお客様の確認を頂きデザイン確定となります。\n\n\n「ワイヤーフレーム」と「参考サイト」の他、「サイトコンセプト」等をご提供頂ければ制作会社様からの外注作業のお仕事も承っておりますので、ぜひご利用ください。下記対応可能なデザイン範囲（ソフトはPhotoshop・AdobeXD・Figma等々を使用）\n・Twitter・Facebook・Instagram等の広告バナー\n・YouTubeなどのサムネイル用画像\n・ECサイト掲載用の商品画像の加工\n・ランディングページのデザイン\n・コーポレートサイト等のデザイン`}
                />
                <Accordion
                  headingtitle="coding"
                  headingAlt="coding"
                  text={`デザインカンプを基に忠実にデザインを再現するコーディングを行います。\nコーディング後、下記のツールにて文法やエラーのチェックを行い、実装となります。\n\n・W3C Markup Validation Service\n・W3C CSS Validation Service・競合調査\n・PerfectPixel by WellDoneCode\n・HTMLエラーチェッカー\n\n制作会社からの外注のご依頼の場合、レスポンシブのデザインカンプもご提供お願いいたします。\nもし、ご提供が難しい場合はPC版のデザインをご提供頂きこちらでレスポンシブデザインを作成・ご提示し、ご確認いただきます（別途費用）\nお互いに余計な手戻りを防ぐためにこのような方法をとらせて頂いておりますのであらかじめご了承下さい。`}
                />
                <Accordion
                  headingtitle="wordpress"
                  headingAlt="wordpress"
                  text={` お客様ご自身で更新を行う機能（ニュース記事やブログ記事）が必要な場合、WordPressを使用したサイト構築をご提案をさせて頂きます。\nWordPressの使用に慣れていない・初めてという方には更新方法を記載した簡易マニュアルを制作させて頂くことも可能です。\n（別途費用・PDF形式でのご提供）\n\n保守性の担保の難しさや、コード解析にかかる工数の増幅の観点から、基本的には既存のテーマを改良した実装は行っておりませんので、ご留意ください。`}
                />
              </div>
              <div className="content__block">
                <h2>対応が難しい、または承っていないサービス</h2>
                <div className="flex-block align-center">
                  <div className="flex-item service-icon three-column">
                    <img src="../images/icon-writing.svg" alt="" />
                  </div>
                  <div className="flex-item nine-column">
                    <h3 className="title-svgImg writing">
                      <img src="../images/writing.svg" alt="原稿作成" />
                    </h3>
                    <p>
                      ワイヤーフレーム作成時に、テキスト原稿のおおまかな構成は作成することは可能です。
                      <br />
                      しかしながら、自社のサービス内容を誰よりも把握しているのはお客様であり、誰よりも熱意をもって説明できるのも又お客様です。
                      <br />
                      そのため、最終的なテキストの内容はすべてお客様にお任せしています。
                    </p>
                  </div>
                </div>
                <div className="flex-block align-center">
                  <div className="flex-item service-icon three-column">
                    <img src="../images/icon-server.svg" alt="" />
                  </div>
                  <div className="flex-item nine-column">
                    <h3 className="title-svgImg server">
                      <img src="../images/server.svg" alt="サーバー契約" />
                    </h3>
                    <p>
                      ドメイン・サーバーのご契約に関しては基本的にはお客様に行っていただきます。これらはお客様の大事な資産であり、制作会社が管理してしまうことによって後々のトラブルに繋がる可能性も大いにあります。
                      <br />
                      もちろん代行という形ではなく、お手伝いという形でサポートさせて頂ける部分はありますので、最初のヒアリング時に是非ご相談ください。
                    </p>
                  </div>
                </div>
                <div className="flex-block align-center">
                  <div className="flex-item service-icon three-column">
                    <img src="../images/icon-photo.svg" alt="" />
                  </div>
                  <div className="flex-item nine-column">
                    <h3 className="title-svgImg photo">
                      <img src="../images/photo.svg" alt="写真撮影" />
                    </h3>
                    <p>
                      サイトに使用する写真素材もまたライティングと同様にお客様の伝えたいメッセージそのものになります。できれば汎用的なものではなく、実際の物やサービスを撮影したものが望ましいです。どうしても難しい場合は、費用はお客様ご負担でPIXTAやAdobe
                      Stockなどから適した素材を探させて頂きます。
                    </p>
                  </div>
                </div>
                <div className="link-wrap">
                  <Link to={"/notes"} className="link-btn default">
                    ご依頼方法・注意事項
                  </Link>
                </div>
              </div>
            </Content>
          </div>
        </div>
      </Layout>
    </>
  );
}

export const Head = () => {
  return (
    <>
      <Seo />
    </>
  );
};
