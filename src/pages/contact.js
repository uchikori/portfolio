import * as React from "react";
import { Layout } from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { MainVisual } from "../components/global/MainVisual";
import { PageHeader } from "../components/page/PageHeader";
import { Content } from "../components/global/Content";
import { Seo } from "../components/Seo";

export default function Contact() {
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
                  className="formrun"
                  action="https://form.run/api/v1/r/5skolcbezps0ffixpvsg03uw"
                  method="post"
                >
                  <div className="form-inner">
                    <div className="contact-form">
                      <div className="contact-form__item">
                        <label className="contact-form__item__label two-column">
                          Name
                          <span>*</span>
                        </label>
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="your-name"
                        >
                          <input
                            name="your-name"
                            type="text"
                            className="your-name type-text"
                            placeholder="姓"
                            data-formrun-required
                          />
                        </span>
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="your-fn"
                        >
                          <input
                            name="your-fn"
                            type="text "
                            className="your-fn type-text"
                            placeholder="名"
                            data-formrun-required
                          />
                        </span>
                      </div>

                      <div className="contact-form__item">
                        <label className="contact-form__item__label two-column">
                          Kana
                          <span>*</span>
                        </label>
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="your-kana"
                        >
                          <input
                            name="your-kana"
                            type="text"
                            className="your-kana type-text"
                            placeholder="セイ"
                            data-formrun-required
                          />
                        </span>
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="your-mei"
                        >
                          <input
                            name="your-mei"
                            type="text "
                            className="your-mei type-text"
                            placeholder="メイ"
                            data-formrun-required
                          />
                        </span>
                      </div>

                      <div className="contact-form__item">
                        <label className="contact-form__item__label two-column">
                          Company-name
                        </label>
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="your-company"
                        >
                          <input
                            name="your-company"
                            type="text "
                            className="your-company type-text"
                            placeholder="会社名"
                          />
                        </span>
                      </div>

                      <div className="contact-form__item">
                        <label className="contact-form__item__label two-column">
                          メールアドレス
                          <span>*</span>
                        </label>
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="your-company"
                        >
                          <input
                            name="your-mail"
                            type="email"
                            className="type-email"
                            data-formrun-type="email"
                            data-formrun-required
                          />
                          <div data-formrun-show-if-error="メールアドレス">
                            メールアドレスを正しく入力してください
                          </div>
                        </span>
                      </div>

                      <div className="contact-form__item">
                        <label className="contact-form__item__label two-column">
                          Type
                          <span>*</span>
                        </label>
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="your-menu"
                        >
                          <select
                            className="type-select"
                            name="your-menu"
                            data-formrun-required
                          >
                            <option value>以下から選択してください</option>
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
                          <div data-formrun-show-if-error="メールアドレス">
                            お問い合わせ種別を正しく選択してください
                          </div>
                        </span>
                      </div>

                      <div className="contact-form__item align-top">
                        <label className="contact-form__item__label two-column">
                          Message
                          <span>*</span>
                        </label>
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="your-message"
                        >
                          <textarea
                            cols={82}
                            rows={16}
                            name="お問い合わせ"
                            className="type-textarea"
                            data-formrun-required
                          ></textarea>
                        </span>

                        <div data-formrun-show-if-error="お問い合わせ">
                          お問い合わせ入力してください
                        </div>
                      </div>

                      <div className="contact-form__item">
                        <span className="contact-form__item__label two-column"></span>
                        <div className="eight-column">
                          <label
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "1rem",
                            }}
                          >
                            <input
                              type="checkbox"
                              name="個人情報利用同意"
                              className="type-checkbox"
                              data-formrun-required
                            />
                            <span className="wpcf7-list-item-label">
                              個人情報利用に同意する
                            </span>
                          </label>

                          <div data-formrun-show-if-error="個人情報利用同意">
                            同意してください
                          </div>
                        </div>
                      </div>

                      <div
                        className="_formrun_gotcha"
                        style={{
                          position: "absolute",
                          height: "1px",
                          width: "1px",
                          overflow: "hidden",
                        }}
                      >
                        <label htmlFor="_formrun_gotcha">
                          If you are a human, ignore this field
                        </label>
                        <input
                          type="text"
                          name="_formrun_gotcha"
                          id="_formrun_gotcha"
                          tabIndex="-1"
                        />
                      </div>

                      <div className="contact-form__submit">
                        <button
                          className="submitbtn link-btn hoverTarget"
                          type="submit"
                          data-formrun-error-text="未入力の項目があります"
                          data-formrun-submitting-text="送信中..."
                        >
                          SUBMIT
                        </button>
                      </div>
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
      />
    </>
  );
};
