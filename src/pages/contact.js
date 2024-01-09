import * as React from "react";
import { Layout } from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { MainVisual } from "../components/global/MainVisual";
import { PageHeader } from "../components/page/PageHeader";
import { Content } from "../components/global/Content";
import { Seo } from "../components/Seo";
import { useEffect, useState, useCallback, useRef } from "react";
import { graphql } from "gatsby";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Contact() {
  const formEl = useRef(null);
  const onSubmit = (token) => {
    const form = formEl;
    if (form.reportValidity()) {
      form.submit();
    }
  };
  useEffect(() => {
    window["onSubmit"] = onSubmit;
    return () => {
      delete window["onSubmit"];
    };
  }, []);

  return (
    <>
      <Layout hasLoadingObj={false}>
        <div className="page-wrapper contact">
          <span className="backgroundImage">
            <StaticImage
              src="../images/contact-background.jpg"
              layout="fullWidth"
              placeholder="blurred"
              quality={90}
              alt=""
            />
          </span>
          <div className="scroll-container">
            <MainVisual>
              <PageHeader
                titleImage="title-contact"
                titleClass={"contact"}
                subTitle={`Webサイト立ち上げのご相談、お見積りのご依頼（無料）などお気軽にお問い合わせください`}
                alt="お問い合わせ"
              />
            </MainVisual>
            <Content>
              <div className="content__block">
                <form
                  ref={formEl}
                  className="formrun"
                  action="https://ssgform.com/s/kuVGTEUHUB95"
                  method="post"
                >
                  <div className="form-inner">
                    <div className="contact-form">
                      <div className="contact-form__item">
                        <label
                          className="contact-form__item__label two-column"
                          htmlFor="お名前"
                        >
                          Name
                          <span>*</span>
                        </label>
                        <span className="wpcf7-form-control-wrap">
                          <input
                            id="お名前"
                            name="お名前"
                            type="text"
                            className="your-name type-text"
                            placeholder="山田 太郎"
                          />
                        </span>
                      </div>

                      <div className="contact-form__item">
                        <label
                          className="contact-form__item__label two-column"
                          htmlFor="フリガナ"
                        >
                          Kana
                          <span>*</span>
                        </label>
                        <span className="wpcf7-form-control-wrap">
                          <input
                            id="フリガナ"
                            name="フリガナ"
                            type="text"
                            className="your-kana type-text"
                            placeholder="ヤマダ タロウ"
                          />
                        </span>
                      </div>

                      <div className="contact-form__item">
                        <label
                          className="contact-form__item__label two-column"
                          htmlFor="会社名"
                        >
                          Company-name
                        </label>
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="会社名"
                        >
                          <input
                            id="会社名"
                            name="会社名"
                            type="text "
                            className="your-company type-text"
                            placeholder="会社名"
                          />
                        </span>
                      </div>

                      <div className="contact-form__item">
                        <label
                          className="contact-form__item__label two-column"
                          htmlFor="メールアドレス"
                        >
                          メールアドレス
                          <span>*</span>
                        </label>
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="メールアドレス"
                        >
                          <input
                            id="メールアドレス"
                            name="メールアドレス"
                            type="email"
                            className="type-email"
                            placeholder="example@email.com"
                          />
                        </span>
                      </div>

                      <div className="contact-form__item">
                        <label
                          className="contact-form__item__label two-column"
                          htmlFor="種別"
                        >
                          Type
                          <span>*</span>
                        </label>
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="種別"
                        >
                          <select id="種別" className="type-select" name="種別">
                            <option>以下から選択してください</option>
                            <option value="公開中の実績について（削除依頼等）">
                              公開中の実績について（削除依頼等）
                            </option>
                            <option value="その他の制作実績について（個別にお見せできます）">
                              その他の制作実績について（個別にお見せできます）
                            </option>
                            <option value="お仕事依頼のご相談">
                              お仕事依頼のご相談
                            </option>
                            <option value="その他ご質問等">
                              その他ご質問等
                            </option>
                          </select>
                        </span>
                      </div>

                      <div className="contact-form__item align-top">
                        <label
                          className="contact-form__item__label two-column"
                          htmlFor="メッセージ"
                        >
                          Message
                          <span>*</span>
                        </label>
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="メッセージ"
                        >
                          <textarea
                            id="メッセージ"
                            cols={82}
                            rows={16}
                            name="メッセージ"
                            className="type-textarea"
                          ></textarea>
                        </span>
                      </div>

                      <div className="contact-form__item align-top">
                        <span className="contact-form__item__label two-column">
                          Polisy
                          <span>*</span>
                        </span>
                        <div
                          className="eight-column"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "2rem",
                          }}
                        >
                          <div className="privacyPolicy">
                            <div className="privacyPolicy__content">
                              <p>
                                UCHIWA Creative
                                Studio（以下，「当方」といいます。）は，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
                              </p>
                              <h3>第1条（個人情報）</h3>
                              <p>
                                「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
                              </p>
                              <h3>第2条（個人情報の収集方法）</h3>
                              <p>
                                当方は，ユーザーが利用登録をする際に氏名，生年月日，住所，電話番号，メールアドレス，銀行口座番号などの個人情報をお尋ねすることがあります。また，ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を,当方の提携先（情報提供元，広告主，広告配信先などを含みます。以下，｢提携先｣といいます。）などから収集することがあります。
                              </p>
                              <h3>第3条（個人情報を収集・利用する目的）</h3>
                              <p>
                                当方が個人情報を収集・利用する目的は，以下のとおりです。
                              </p>
                              <ul>
                                <li>当方サービスの提供・運営のため</li>
                                <li>
                                  ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）
                                </li>
                                <li>
                                  利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，ご利用をお断りするため
                                </li>
                                <li>上記の利用目的に付随する目的</li>
                              </ul>
                              <h3>第4条（利用目的の変更）</h3>
                              <ul>
                                <li>
                                  当方は，利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更するものとします。
                                </li>
                                <li>
                                  利用目的の変更を行った場合には，変更後の目的について，ユーザーへの通知や本ウェブサイト上での公表は行いません。
                                </li>
                              </ul>
                              <h3>第5条（個人情報の第三者提供）</h3>
                              <ul>
                                <li>
                                  当方は，次に掲げる場合を除いて，あらかじめユーザーの同意を得ることなく，第三者に個人情報を提供することはありません。ただし，個人情報保護法その他の法令で認められる場合を除きます。
                                  <ul>
                                    <li>
                                      人の生命，身体または財産の保護のために必要がある場合であって，本人の同意を得ることが困難であるとき
                                    </li>
                                    <li>
                                      公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって，本人の同意を得ることが困難であるとき
                                    </li>
                                    <li>
                                      国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって，本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
                                    </li>
                                    <li>
                                      予め次の事項を告知あるいは公表し，かつ当方が個人情報保護委員会に届出をしたとき
                                      <ul>
                                        <li>
                                          利用目的に第三者への提供を含むこと
                                        </li>
                                        <li>第三者に提供されるデータの項目</li>
                                        <li>第三者への提供の手段または方法</li>
                                        <li>
                                          本人の求めに応じて個人情報の第三者への提供を停止すること
                                        </li>
                                        <li>本人の求めを受け付ける方法</li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  前項の定めにかかわらず，次に掲げる場合には，当該情報の提供先は第三者に該当しないものとします。
                                  <ul>
                                    <li>
                                      当方が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合
                                    </li>
                                    <li>
                                      合併その他の事由による事業の承継に伴って個人情報が提供される場合
                                    </li>
                                    <li>
                                      個人情報を特定の者との間で共同して利用する場合であって，その旨並びに共同して利用される個人情報の項目，共同して利用する者の範囲，利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について，あらかじめ本人に通知し，または本人が容易に知り得る状態に置いた場合
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <h3>第6条（個人情報の開示）</h3>
                              <ul>
                                <li>
                                  当方は，本人から個人情報の開示を求められたときは，本人に対し，これを開示します。ただし，開示することにより次のいずれかに該当する場合は，その全部または一部を開示しないこともあります。
                                  <ul>
                                    <li>
                                      本人または第三者の生命，身体，財産その他の権利利益を害するおそれがある場合
                                    </li>
                                    <li>
                                      当方の業務の適正な実施に著しい支障を及ぼすおそれがある場合
                                    </li>
                                    <li>その他法令に違反することとなる場合</li>
                                  </ul>
                                </li>
                                <li>
                                  前項の定めにかかわらず，履歴情報および特性情報などの個人情報以外の情報については，原則として開示いたしません。
                                </li>
                              </ul>
                              <h3>第7条（個人情報の訂正および削除）</h3>
                              <ul>
                                <li>
                                  ユーザーは，当方の保有する自己の個人情報が誤った情報である場合には，当方が定める手続きにより，当方に対して個人情報の訂正，追加または削除（以下，「訂正等」といいます。）を請求することができます。
                                </li>
                                <li>
                                  当方は，ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には，当該個人情報の訂正等を行うものとします。
                                </li>
                                <li>
                                  当方は，前項の規定に基づき訂正等を行った場合，または訂正等を行わない旨の決定をしたときは、これをユーザーに通知します。
                                </li>
                              </ul>
                              <h3>第8条（個人情報の利用停止等）</h3>
                              <ul>
                                <li>
                                  当方は，本人から，個人情報が，利用目的の範囲を超えて取り扱われているという理由，または不正の手段により取得されたものであるという理由により，その利用の停止または消去（以下，「利用停止等」といいます。）を求められた場合には，必要な調査を行います。
                                </li>
                                <li>
                                  前項の調査結果に基づき，その請求に応じる必要があると判断した場合には，当該個人情報の利用停止等を行います。
                                </li>
                                <li>
                                  当方は，前項の規定に基づき利用停止等を行った場合，または利用停止等を行わない旨の決定をしたときは，これをユーザーに通知します。
                                </li>
                              </ul>
                              <h3>第9条（プライバシーポリシーの変更）</h3>
                              <ul>
                                <li>
                                  本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，ユーザーに通知することなく，変更することができるものとします。
                                </li>
                                <li>
                                  当方が別途定める場合を除いて，変更後のプライバシーポリシーは，本ウェブサイトに掲載したときから効力を生じるものとします。
                                </li>
                              </ul>
                              <h3>第10条（お問い合わせ窓口）</h3>
                              <p>
                                本ポリシーに関するお問い合わせは，下記の窓口までお願いいたします。
                                <br />
                                会社名：UCHIWA Creative Studio
                                MAIL：info@uchiwa-deisgn.net
                              </p>
                            </div>
                          </div>
                          <label
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "1rem",
                            }}
                          >
                            <input
                              type="checkbox"
                              name="プライバシーポリシーへの同意"
                              className="type-checkbox"
                            />
                            <span className="wpcf7-list-item-label">
                              プライバシーポリシーに同意する
                            </span>
                          </label>
                        </div>
                      </div>

                      <div className="contact-form__submit">
                        <label className="contact-form__item__label two-column"></label>
                        <span className="wpcf7-form-control-wrap">
                          <button
                            className="g-recaptcha submitbtn link-btn hoverTarget"
                            data-sitekey="6LeDGUspAAAAAC0bwp7I5bzq_Cuhok18rbL7Sj1W"
                            data-callback="onSubmit"
                            data-action="submit"
                          >
                            SUBMIT
                          </button>
                        </span>
                      </div>

                      {/* <div className="contact-form__submit">
                        <button
                          className="submitbtn link-btn hoverTarget"
                          type="submit"
                        >
                          SUBMIT
                        </button>
                      </div> */}
                    </div>
                  </div>
                </form>
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
        pageTitle={"お問い合わせ"}
        pageDesc={
          "Webサイト立ち上げのご相談、お見積りのご依頼（無料）などお気軽にお問い合わせください"
        }
        pagePath={`/contact/`}
        pageImg={data.contact.childImageSharp.original.src}
      />
    </>
  );
};

export const query = graphql`
  query {
    contact: file(relativePath: { eq: "contact-background.jpg" }) {
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
