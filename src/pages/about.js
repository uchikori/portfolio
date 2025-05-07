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
              <div className="content__block">
                <div className="flex-block">
                  <div className="flex-item four-column">
                    <h2 className="flex-item__title">プライバシーポリシー</h2>
                  </div>
                  <div className="flex-item seven-column sns-tag">
                    <div className="privacyPolicy">
                      <div className="privacyPolicy__content">
                        <p>UCHIWA Creative Studio（以下，「当方」といいます。）は，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。</p>
                        <h3>第1条（個人情報）</h3>
                        <p>「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報をいいます。また、容貌、指紋、声紋にかかるデータ、健康保険証の保険者番号等、単体で特定の個人を識別できる情報も含まれます。</p>
                        <h3>第2条（個人情報の収集方法）</h3>
                        <p>当方は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号等の個人情報をお尋ねすることがあります。また、ユーザーと提携先（情報提供元、広告主、広告配信先などを含みます）との間でなされた取引記録や決済に関する情報を収集することがあります。</p>
                        <h3>第3条（個人情報を収集・利用する目的）</h3>
                        <p>当方が個人情報を収集・利用する目的は，以下のとおりです。</p>
                        <ul>
                          <li>当方サービスの提供・運営のため</li>
                          <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                          <li>利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，ご利用をお断りするため</li>
                          <li>上記の利用目的に付随する目的</li>
                        </ul>
                        <h3>第4条（Cookieおよび類似技術の使用について）</h3>
                        <p>当方は、ユーザーの利便性向上やサービス向上、アクセス解析、ならびにユーザーの興味・関心に応じた広告配信を行うために、Cookieおよび類似技術を使用することがあります。Cookieによって収集された情報には、個人を特定できる情報は含まれません。ユーザーは、ブラウザの設定によりCookieを無効にすることが可能です。ただし、その場合、本サービスの一部がご利用いただけなくなることがあります。</p>
                        <h3>第5条（アクセス解析ツールの利用について）</h3>
                        <p>当方は、Googleアナリティクス等のアクセス解析ツールを利用して、ユーザーのアクセス情報を収集しております。これにより収集される情報には個人を特定できるものは含まれません。Googleアナリティクスに関する詳細は、Google社のプライバシーポリシーをご確認ください。</p>
                        <h3>第6条（利用目的の変更）</h3>
                        <p>当方は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更することがあります。変更後の目的については、ユーザーへの通知または本ウェブサイト上で公表するものとします。</p>
                        <h3>第7条（個人情報の第三者提供）</h3>
                        <ul>
                          <li>
                            当方は，次に掲げる場合を除いて，あらかじめユーザーの同意を得ることなく，第三者に個人情報を提供することはありません。ただし，個人情報保護法その他の法令で認められる場合を除きます。
                            <ul>
                              <li>人の生命，身体または財産の保護のために必要がある場合であって，本人の同意を得ることが困難であるとき</li>
                              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって，本人の同意を得ることが困難であるとき</li>
                              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって，本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                              <li>
                                予め次の事項を告知あるいは公表し，かつ当方が個人情報保護委員会に届出をしたとき
                                <ul>
                                  <li>利用目的に第三者への提供を含むこと</li>
                                  <li>第三者に提供されるデータの項目</li>
                                  <li>第三者への提供の手段または方法</li>
                                  <li>本人の求めに応じて個人情報の第三者への提供を停止すること</li>
                                  <li>本人の求めを受け付ける方法</li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            前項の定めにかかわらず，次に掲げる場合には，当該情報の提供先は第三者に該当しないものとします。
                            <ul>
                              <li>当方が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</li>
                              <li>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
                              <li>個人情報を特定の者との間で共同して利用する場合であって，その旨並びに共同して利用される個人情報の項目，共同して利用する者の範囲，利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について，あらかじめ本人に通知し，または本人が容易に知り得る状態に置いた場合</li>
                            </ul>
                          </li>
                        </ul>
                        <h3>第8条（個人情報の開示）</h3>
                        <ul>
                          <li>
                            当方は，本人から個人情報の開示を求められたときは，本人に対し，これを開示します。ただし，開示することにより次のいずれかに該当する場合は，その全部または一部を開示しないこともあります。
                            <ul>
                              <li>本人または第三者の生命，身体，財産その他の権利利益を害するおそれがある場合</li>
                              <li>当方の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                              <li>その他法令に違反することとなる場合</li>
                            </ul>
                          </li>
                          <li>前項の定めにかかわらず，履歴情報および特性情報などの個人情報以外の情報については，原則として開示いたしません。</li>
                        </ul>
                        <h3>第9条（個人情報の訂正および削除）</h3>
                        <ul>
                          <li>ユーザーは，当方の保有する自己の個人情報が誤った情報である場合には，当方が定める手続きにより，当方に対して個人情報の訂正，追加または削除（以下，「訂正等」といいます。）を請求することができます。</li>
                          <li>当方は，ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には，当該個人情報の訂正等を行うものとします。</li>
                          <li>当方は，前項の規定に基づき訂正等を行った場合，または訂正等を行わない旨の決定をしたときは、これをユーザーに通知します。</li>
                        </ul>
                        <h3>第10条（個人情報の利用停止等）</h3>
                        <p>本人から、利用目的外の使用や不正取得を理由に利用停止または消去を求められた場合、調査の上、適切に対応します。</p>
                        <h3>第11条（プライバシーポリシーの変更）</h3>
                        <p>本ポリシーは、法令等に定めがある場合を除き、予告なく変更できるものとします。変更後は本ウェブサイトに掲載した時点で効力を生じます。</p>
                        <h3>第12条（お問い合わせ窓口）</h3>
                        <p>
                          本ポリシーに関するお問い合わせは，下記の窓口までお願いいたします。
                          <br />
                          会社名：UCHIWA Creative Studio MAIL：info@uchiwa-deisgn.net
                        </p>
                      </div>
                    </div>
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
