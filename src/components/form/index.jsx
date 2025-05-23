import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { navigate } from "gatsby";

//フォームのバリデーション
const schema = yup.object().shape({
  name: yup.string().required("※入力必須の項目です"),
  kana: yup.string().required("※入力必須の項目です"),
  company: yup.string(""),
  email: yup.string().email("※正しいメールアドレスの形式でご入力ください").required("※入力必須の項目です"),
  type: yup.string().oneOf(["公開中の実績について（削除依頼等）", "その他の制作実績について（個別にお見せできます）", "お仕事依頼のご相談", "その他ご質問等"], "※いずれかを選択してください").required(),

  textarea: yup.string().required("※入力必須の項目です"),
});

export const Form = () => {
  //ポリシーチェックボックスの状態
  const [isChecked, setIsChecked] = useState(false);

  //reCAPTCHAトークン
  // const [token, setToken] = useState("");

  //useFormの設定
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      kana: "",
      company: "",
      email: "",
      type: "以下から選択してください",
      textarea: "",
    },
    resolver: yupResolver(schema),
  });

  const send = (data) => {
    axios
      .post("https://ssgform.com/s/kuVGTEUHUB95", data, {
        headers: {
          "content-type": "multipart/form-data", //axiosでフォーム送信する時に必要なheader情報
          "X-Requested-With": "XMLHttpRequest",
          // "reCAPTCHA-token": token,
        },
      })
      .then((response) => {
        // console.log(response);
        navigate("/thanks");
      })
      .catch((error) => {
        console.error("エラー:", error);
        alert("エラー: " + error);
      });
  };

  //Googlerecapthcaの設定
  const { executeRecaptcha } = useGoogleReCaptcha();
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      // console.log("recaptcha の実行はまだ利用できません。");
      return;
    }
    // const token = await executeRecaptcha("submitForm");
    // setToken(token);
  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  return (
    <form className="formrun" onSubmit={handleSubmit(send)}>
      <div className="form-inner">
        <div className="contact-form">
          <div className="contact-form__item">
            <label className="contact-form__item__label two-column" htmlFor="name">
              Name
              <span>*</span>
            </label>
            <span className="wpcf7-form-control-wrap">
              <input id="name" name="name" type="text" className="your-name type-text" placeholder="山田 太郎" {...register("name")} />
              <p className="error">{errors.name?.message}</p>
            </span>
          </div>

          <div className="contact-form__item">
            <label className="contact-form__item__label two-column" htmlFor="kana">
              Kana
              <span>*</span>
            </label>
            <span className="wpcf7-form-control-wrap">
              <input id="kana" name="kana" type="text" className="your-kana type-text" placeholder="ヤマダ タロウ" {...register("kana")} />
              <p className="error">{errors.kana?.message}</p>
            </span>
          </div>

          <div className="contact-form__item">
            <label className="contact-form__item__label two-column" htmlFor="company">
              Company-name
            </label>
            <span className="wpcf7-form-control-wrap">
              <input id="company" name="company" type="text " className="your-company type-text" placeholder="会社名" {...register("company")} />
              <p className="error">{errors.company?.message}</p>
            </span>
          </div>

          <div className="contact-form__item">
            <label className="contact-form__item__label two-column" htmlFor="email">
              メールアドレス
              <span>*</span>
            </label>
            <span className="wpcf7-form-control-wrap">
              <input id="email" name="email" type="email" className="type-email" placeholder="example@email.com" {...register("email")} />
              <p className="error">{errors.email?.message}</p>
            </span>
          </div>

          <div className="contact-form__item">
            <label className="contact-form__item__label two-column" htmlFor="type">
              Type
              <span>*</span>
            </label>
            <span className="wpcf7-form-control-wrap">
              <select id="type" className="type-select" name="type" {...register("type")}>
                <option>以下から選択してください</option>
                <option value="公開中の実績について（削除依頼等）">公開中の実績について（削除依頼等）</option>
                <option value="その他の制作実績について（個別にお見せできます）">その他の制作実績について（個別にお見せできます）</option>
                <option value="お仕事依頼のご相談">お仕事依頼のご相談</option>
                <option value="その他ご質問等">その他ご質問等</option>
              </select>

              <p className="error">{errors.type?.message}</p>
            </span>
          </div>

          <div className="contact-form__item align-top">
            <label className="contact-form__item__label two-column" htmlFor="message">
              Message
              <span>*</span>
            </label>
            <span className="wpcf7-form-control-wrap">
              <textarea id="textarea" cols={82} rows={16} name="textarea" className="type-textarea" {...register("textarea")}></textarea>
              <p className="error">{errors.textarea?.message}</p>
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
                  <p>当方は、Googleアナリティクスを利用して、ユーザーのアクセス情報を収集しております。GoogleアナリティクスはCookieを利用してトラフィックデータを収集しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。Googleアナリティクスの利用規約に関する詳細は、Google社のプライバシーポリシーをご確認ください。</p>
                  <h3>第6条（Google Adsenseの利用について）</h3>
                  <p>当サイトは、第三者配信の広告サービスであるGoogle Adsenseを利用しています。広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookie（クッキー）を使用することがあります。Cookieを無効にする方法やGoogle Adsenseに関する詳細はGoogleの広告とプライバシーに関するポリシーをご確認ください。</p>
                  <h3>第7条（Amazonアソシエイトの利用について）</h3>
                  <p>当サイトは、Amazonアソシエイト・プログラムの参加者です。これは、アフィリエイト広告によってサイトが紹介料を獲得できる手段を提供することを目的として設定されたアソシエイト・プログラムであり、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できます。</p>
                  <h3>第8条（利用目的の変更）</h3>
                  <p>当方は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更することがあります。変更後の目的については、ユーザーへの通知または本ウェブサイト上で公表するものとします。</p>
                  <h3>第9条（個人情報の第三者提供）</h3>
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
                  <h3>第10条（個人情報の開示）</h3>
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
                  <h3>第11条（個人情報の訂正および削除）</h3>
                  <ul>
                    <li>ユーザーは，当方の保有する自己の個人情報が誤った情報である場合には，当方が定める手続きにより，当方に対して個人情報の訂正，追加または削除（以下，「訂正等」といいます。）を請求することができます。</li>
                    <li>当方は，ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には，当該個人情報の訂正等を行うものとします。</li>
                    <li>当方は，前項の規定に基づき訂正等を行った場合，または訂正等を行わない旨の決定をしたときは、これをユーザーに通知します。</li>
                  </ul>
                  <h3>第12条（個人情報の利用停止等）</h3>
                  <p>本人から、利用目的外の使用や不正取得を理由に利用停止または消去を求められた場合、調査の上、適切に対応します。</p>
                  <h3>第13条（プライバシーポリシーの変更）</h3>
                  <p>本ポリシーは、法令等に定めがある場合を除き、予告なく変更できるものとします。変更後は本ウェブサイトに掲載した時点で効力を生じます。</p>
                  <h3>第14条（お問い合わせ窓口）</h3>
                  <p>
                    本ポリシーに関するお問い合わせは，下記の窓口までお願いいたします。
                    <br />
                    会社名：UCHIWA Creative Studio MAIL：info@uchiwa-deisgn.net
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
                  name="acceptPolicy"
                  className="type-checkbox"
                  checked={isChecked}
                  onChange={() => {
                    setIsChecked((prev) => {
                      return !prev;
                    });
                  }}
                />
                <span className="wpcf7-list-item-label">プライバシーポリシーに同意する</span>
              </label>
            </div>
          </div>

          <div className="contact-form__submit">
            <button onClick={handleReCaptchaVerify} className="submitbtn link-btn hoverTarget" type="submit" disabled={isChecked ? false : true}>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
