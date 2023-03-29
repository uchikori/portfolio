import * as React from "react";
import { useState } from "react";
import { Layout } from "../components/Layout";
import { MainVisual } from "../components/global/MainVisual";
import { PageHeader } from "../components/page/PageHeader";
import { Content } from "../components/global/Content";
import { useEffect } from "react";
import { Seo } from "../components/Seo";
import { graphql } from "gatsby";

export default function Price() {
  //進行管理の配列
  const [scheduleItems, setScheduleItems] = useState([
    {
      name: "進行管理費",
      desc: "ヒアリング・お打ち合わせ・進行中のメール・チャットでのやり取り等にかかわる人件費\n※遠方のお客様で対面でのお打ち合わせをご希望の場合はさらに追加で加算させて頂く場合がございます",
      price: 0.1,
      quantity: 0,
    },
  ]);
  const itemScheduleTotal = (event, index) => {
    const quantity = event.target.value;
    const newItems = [...scheduleItems];
    newItems[index].quantity = quantity;
    setScheduleItems(newItems);
  };
  //ディレクション管理の配列
  const [directionItems, setDirectionItems] = useState([
    {
      name: "ディレクション費",
      desc: "コンセプトの立案・競合サイトの分析・情報設計・ワイヤーフレームの策定などのWebサイト制作の方向性を決定していく際の人件費。",
      price: 0.2,
      quantity: 0,
    },
  ]);
  const itemDirectionTotal = (event, index) => {
    const quantity = event.target.value;
    const newItems = [...directionItems];
    newItems[index].quantity = quantity;
    setDirectionItems(newItems);
  };
  //デザイン項目の配列
  const [designItems, setDesignItems] = useState([
    {
      name: "TOPページデザイン",
      desc: "PC用TOPページのデザイン",
      price: 50000,
      quantity: 0,
      totalPrice: 0,
    },
    {
      name: "TOPページスマホデザイン",
      desc: "スマホ用TOPページのデザイン",
      price: 20000,
      quantity: 0,
      totalPrice: 0,
    },
    {
      name: "下層ページデザイン",
      desc: "PC用下層ページのデザイン",
      price: 20000,
      quantity: 0,
      totalPrice: 0,
    },
    {
      name: "下層ページスマホデザイン",
      desc: "スマホ用下層ページのデザイン",
      price: 10000,
      quantity: 0,
      totalPrice: 0,
    },
    {
      name: "LPデザイン	",
      desc: "PC用ランディングページのデザイン",
      price: 60000,
      quantity: 0,
      totalPrice: 0,
    },
    {
      name: "LPスマホデザイン",
      desc: "スマホ用ランディングページのデザイン",
      price: 20000,
      quantity: 0,
      totalPrice: 0,
    },
  ]);
  const itemDesignTotal = (event, index) => {
    const quantity = event.target.value;
    const newItems = [...designItems];
    newItems[index].quantity = quantity;
    newItems[index].totalPrice = newItems[index].price * quantity;
    setDesignItems(newItems);
  };
  //コーディング項目の配列
  const [codingItems, setCodingItems] = useState([
    {
      name: "TOPページコーディング",
      desc: "PC用TOPページのコーディング",
      price: 40000,
      quantity: 0,
      totalPrice: 0,
    },
    {
      name: "TOPページレスポンシブ",
      desc: "デバイス幅に合わせてのレイアウト調整",
      price: 10000,
      quantity: 0,
      totalPrice: 0,
    },
    {
      name: "下層ページコーディング",
      desc: "PC用下層ページのコーディング",
      price: 20000,
      quantity: 0,
      totalPrice: 0,
    },
    {
      name: "下層ページレスポンシブ",
      desc: "デバイス幅に合わせてのレイアウト調整",
      price: 5000,
      quantity: 0,
      totalPrice: 0,
    },
    {
      name: "LPコーディング",
      desc: "PC用ランディングページのコーディング",
      price: 60000,
      quantity: 0,
      totalPrice: 0,
    },
    {
      name: "LPレスポンシブコーディング",
      desc: "デバイス幅に合わせてのレイアウト調整",
      price: 20000,
      quantity: 0,
      totalPrice: 0,
    },
  ]);
  const itemCodingTotal = (event, index) => {
    const quantity = event.target.value;
    const newItems = [...codingItems];
    newItems[index].quantity = quantity;
    newItems[index].totalPrice = newItems[index].price * quantity;
    setCodingItems(newItems);
  };
  //WordPRess項目の配列
  const [wpItems, setWpItems] = useState([
    {
      name: "投稿ページ実装",
      desc: "ブログやお知らせ機能などの記事ページを設置",
      price: 20000,
      quantity: 0,
      totalPrice: 0,
    },
    {
      name: "汎用固定ページ実装",
      desc: "お客様自身でページ追加を行うための固定パーツの実装",
      price: 20000,
      quantity: 0,
      totalPrice: 0,
    },
    {
      name: "カスタム投稿ページ実装",
      desc: "投稿ページとは別デザインで記事ページを設置",
      price: 20000,
      quantity: 0,
      totalPrice: 0,
    },
    {
      name: "アーカイブページ実装",
      desc: "更新記事の一覧を表示するページを作成",
      price: 20000,
      quantity: 0,
      totalPrice: 0,
    },
    {
      name: "カスタムフィールド追加",
      desc: "記事のタイトルや本文以外に別の情報を追加",
      price: 5000,
      quantity: 0,
      totalPrice: 0,
    },
    {
      name: "カスタム投稿追加",
      desc: "標準更新機能の他に追加で更新機能を設置",
      price: 20000,
      quantity: 0,
      totalPrice: 0,
    },
    {
      name: "お問合わせフォーム",
      desc: "お問い合わせフォームの設置",
      price: 20000,
      quantity: 0,
      totalPrice: 0,
    },
    {
      name: "コメント機能追加",
      desc: "投稿ページへのコメント機能の設置",
      price: 20000,
      quantity: 0,
      totalPrice: 0,
    },
  ]);
  const itemWpTotal = (event, index) => {
    const quantity = event.target.value;
    const newItems = [...wpItems];
    newItems[index].quantity = quantity;
    newItems[index].totalPrice = newItems[index].price * quantity;
    setWpItems(newItems);
  };
  //オプション項目の配列
  const [optionItems, setOptionItems] = useState([
    {
      name: "アニメーション追加",
      desc: "Webサイトにリッチなアニメーションを追加\n(スクロールアニメーションやSVGアニメーション、WebGL等々)",
      price: 20000,
      quantity: 0,
      totalPrice: 0,
    },
    {
      name: "ドメイン・サーバー設定代行",
      desc: "「ドメインやサーバーの契約方法が分からない」という方向け。\nあくまで管理者はお客様とし契約手続きの代行をさせて頂きます。",
      price: 40000,
      quantity: 0,
      totalPrice: 0,
    },
  ]);
  const itemOptionTotal = (event, index) => {
    const quantity = event.target.value;
    const newItems = [...optionItems];
    newItems[index].quantity = quantity;
    newItems[index].totalPrice = newItems[index].price * quantity;
    setOptionItems(newItems);
  };

  const [productTotal, setProductTotal] = useState(0);
  const [scheduleTotal, setScheduleTotal] = useState(0);
  const [directionTotal, setDirectionTotal] = useState(0);
  const [allTotal, setAllTotal] = useState(0);

  useEffect(() => {
    const designTotal = designItems.reduce(
      (acc, item) => acc + item.totalPrice,
      0
    );
    const codingTotal = codingItems.reduce(
      (acc, item) => acc + item.totalPrice,
      0
    );
    const wpTotal = wpItems.reduce((acc, item) => acc + item.totalPrice, 0);
    const optionTotal = optionItems.reduce(
      (acc, item) => acc + item.totalPrice,
      0
    );
    //制作費の合計
    setProductTotal(designTotal + codingTotal + wpTotal + optionTotal);
    //進行管理費の合計
    setScheduleTotal(() => {
      return productTotal * scheduleItems[0].price * scheduleItems[0].quantity;
    });
    setDirectionTotal(() => {
      return (
        productTotal * directionItems[0].price * directionItems[0].quantity
      );
    });
    setAllTotal(() => {
      return productTotal + scheduleTotal + directionTotal;
    });
  }, [
    designItems,
    codingItems,
    wpItems,
    optionItems,
    productTotal,
    scheduleItems,
    directionItems,
    scheduleTotal,
    directionTotal,
  ]);

  return (
    <>
      <Layout hasLoadingObj={false}>
        <div className="page-wrapper price">
          <div className="scroll-container">
            <MainVisual>
              <PageHeader
                titleImage="title-price"
                titleClass={"price"}
                subTitle={`Webサイト制作にかかる料金表を掲載しております。\nご検討の際の目安にぜひご参考ください。`}
                alt="制作料金表"
              />
            </MainVisual>
            <Content contentClass="price">
              <div className="content__block">
                <h2>Webサイト制作 基本料金表</h2>
                <div className="white-box">
                  <div className="price">
                    <h3 className="price__title">企画・管理</h3>
                    <table className="price__table m-24">
                      <tbody>
                        {scheduleItems.map((item, index) => {
                          return (
                            <tr key={index}>
                              <th>{item.name}</th>
                              <td className="price__description">
                                {item.desc}
                              </td>
                              <td className="price__price">制作費の10%</td>
                              <td className="price__count">
                                <input
                                  type="number"
                                  min="0"
                                  max="1"
                                  defaultValue={item.quantity}
                                  onChange={(event) =>
                                    itemScheduleTotal(event, index)
                                  }
                                />
                                式
                              </td>
                            </tr>
                          );
                        })}
                        {directionItems.map((item, index) => {
                          return (
                            <tr key={index}>
                              <th>{item.name}</th>
                              <td className="price__description">
                                {item.desc}
                              </td>
                              <td className="price__price">制作費の20%</td>
                              <td className="price__count">
                                <input
                                  type="number"
                                  min="0"
                                  max="1"
                                  defaultValue={item.quantity}
                                  onChange={(event) =>
                                    itemDirectionTotal(event, index)
                                  }
                                />
                                式
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="price mt-100">
                    <h3 className="price__title">デザイン</h3>
                    <table className="price__table m-24">
                      <tbody>
                        {designItems.map((item, index) => {
                          return (
                            <tr key={index}>
                              <th>{item.name}</th>
                              <td className="price__description">
                                {item.desc}
                              </td>
                              <td className="price__price">￥{item.price}～</td>
                              <td className="price__count">
                                <input
                                  type="number"
                                  min="0"
                                  defaultValue={item.quantity}
                                  onChange={(event) =>
                                    itemDesignTotal(event, index)
                                  }
                                />
                                P
                              </td>
                            </tr>
                          );
                        })}
                        {/* <tr>
                          <th>TOPページデザイン</th>
                          <td className="price__description">
                            PC用TOPページのデザイン
                          </td>
                          <td className="price__price">￥{topDesign}～</td>
                          <td className="price__count">
                            <input
                              type="number"
                              min="0"
                              onChange={(event) => itemSubTotal(event, 50000)}
                            />
                            P
                          </td>
                        </tr>
                        <tr>
                          <th>TOPページスマホデザイン</th>
                          <td className="price__description">
                            スマホ用TOPページのデザイン
                          </td>
                          <td className="price__price">￥{topSpDesign}～</td>
                          <td className="price__count">
                            <input
                              type="number"
                              min="0"
                              onChange={(event) => itemSubTotal(event, 20000)}
                            />
                            P
                          </td>
                        </tr>
                        <tr>
                          <th>下層ページデザイン</th>
                          <td className="price__description">
                            PC用下層ページのデザイン
                          </td>
                          <td className="price__price">￥{pageDesign}～</td>
                          <td className="price__count">
                            <input type="number" min="0" />P
                          </td>
                        </tr>
                        <tr>
                          <th>下層ページスマホデザイン</th>
                          <td className="price__description">
                            スマホ用下層ページのデザイン
                          </td>
                          <td className="price__price">￥{pageSpDesign}～</td>
                          <td className="price__count">
                            <input type="number" min="0" />P
                          </td>
                        </tr>
                        <tr>
                          <th>LPデザイン</th>
                          <td className="price__description">
                            PC用ランディングページのデザイン
                          </td>
                          <td className="price__price">￥{lpDesign}～</td>
                          <td className="price__count">
                            <input type="number" min="0" />P
                          </td>
                        </tr>
                        <tr>
                          <th>LPスマホデザイン</th>
                          <td className="price__description">
                            スマホ用ランディングページのデザイン
                          </td>
                          <td className="price__price">￥{lpSpDesign}～</td>
                          <td className="price__count">
                            <input type="number" min="0" />P
                          </td>
                        </tr> */}
                      </tbody>
                    </table>
                    <ul className="caption">
                      <li className="caption__item">
                        上記は「ワイヤーフレーム」「原稿テキスト」のご準備がある状態での金額となります
                      </li>
                    </ul>
                  </div>
                  <div className="price mt-100">
                    <h3 className="price__title">コーディング</h3>
                    <table className="price__table m-24">
                      <tbody>
                        {codingItems.map((item, index) => {
                          return (
                            <tr>
                              <th>{item.name}</th>
                              <td className="price__description">
                                {item.desc}
                              </td>
                              <td className="price__price">￥{item.price}～</td>
                              <td className="price__count">
                                <input
                                  type="number"
                                  min="0"
                                  defaultValue={item.quantity}
                                  onChange={(event) =>
                                    itemCodingTotal(event, index)
                                  }
                                />
                                P
                              </td>
                            </tr>
                          );
                        })}
                        {/* <tr>
                          <th>TOPページコーディング</th>
                          <td className="price__description">
                            PC用TOPページのコーディング
                          </td>
                          <td className="price__price">￥{topCoding}～</td>
                          <td className="price__count">
                            <input type="number" min="0" />P
                          </td>
                        </tr>
                        <tr>
                          <th>TOPページレスポンシブ</th>
                          <td className="price__description">
                            デバイス幅に合わせてのレイアウト調整
                          </td>
                          <td className="price__price">￥{topSpCoding}～</td>
                          <td className="price__count">
                            <input type="number" min="0" />P
                          </td>
                        </tr>
                        <tr>
                          <th>下層ページコーディング</th>
                          <td className="price__description">
                            PC用下層ページのコーディング
                          </td>
                          <td className="price__price">￥{pageCoding}～</td>
                          <td className="price__count">
                            <input type="number" min="0" />P
                          </td>
                        </tr>
                        <tr>
                          <th>下層ページレスポンシブ</th>
                          <td className="price__description">
                            デバイス幅に合わせてのレイアウト調整
                          </td>
                          <td className="price__price">￥{pageSpCoding}～</td>
                          <td className="price__count">
                            <input type="number" min="0" />P
                          </td>
                        </tr>
                        <tr>
                          <th>LPコーディング</th>
                          <td className="price__description">
                            PC用ランディングページのコーディング
                          </td>
                          <td className="price__price">￥{lpCoding}～</td>
                          <td className="price__count">
                            <input type="number" min="0" />P
                          </td>
                        </tr>
                        <tr>
                          <th>LPレスポンシブコーディング</th>
                          <td className="price__description">
                            デバイス幅に合わせてのレイアウト調整
                          </td>
                          <td className="price__price">￥{lpSpCoding}～</td>
                          <td className="price__count">
                            <input type="number" min="0" />P
                          </td>
                        </tr> */}
                      </tbody>
                    </table>
                    <ul className="caption">
                      <li className="caption__item">
                        「レスポンシブ」コーディングに対応するためには、デザインにて「スマホデザイン」の準備が必須になります。
                      </li>
                      <li className="caption__item">
                        制作会社様がコーディングのみをご依頼される場合、レスポンシブ対応を行うためには「スマホデザイン」のご用意が必須となります
                      </li>
                      <li className="caption__item">
                        「スマホデザイン」のご用意が難しい場合は当方でデザインをご用意するため「スマホデザイン」費用が別途発生いたします。
                      </li>
                    </ul>
                  </div>
                  <div className="price mt-100">
                    <h3 className="price__title">WordPress</h3>
                    <table className="price__table m-24">
                      <tbody>
                        {wpItems.map((item, index) => {
                          return (
                            <tr key={index}>
                              <th>{item.name}</th>
                              <td className="price__description">
                                {item.desc}
                              </td>
                              <td className="price__price">￥{item.price}～</td>
                              <td className="price__count">
                                <input
                                  type="number"
                                  min="0"
                                  defaultValue={item.quantity}
                                  onChange={(event) =>
                                    itemWpTotal(event, index)
                                  }
                                />
                                P
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <ul className="caption"></ul>
                  </div>
                  <div className="price mt-100">
                    <h3 className="price__title">オプション</h3>
                    <table className="price__table m-24">
                      <tbody>
                        {optionItems.map((item, index) => {
                          return (
                            <tr>
                              <th>{item.name}</th>
                              <td className="price__description">
                                {item.desc}
                              </td>
                              <td className="price__price">￥{item.price}～</td>
                              <td className="price__count">
                                <input
                                  type="number"
                                  min="0"
                                  defaultValue={item.quantity}
                                  onChange={(event) =>
                                    itemOptionTotal(event, index)
                                  }
                                />
                                個
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <ul className="caption"></ul>
                  </div>
                </div>
              </div>
              <div className="total-price content__block">
                <div className="sub-total">
                  <span className="sub-total__label">制作費用</span>
                  <span className="sub-total__price">￥{productTotal}</span>
                </div>
                <div className="sub-total">
                  <span className="sub-total__label">進行管理費用</span>
                  <span className="sub-total__price">￥{scheduleTotal}</span>
                </div>
                <div className="sub-total">
                  <span className="sub-total__label">ディレクション費用</span>
                  <span className="sub-total__price">￥{directionTotal}</span>
                </div>
                <div className="all-total">
                  <span className="all-total__label">合計金額（目安）</span>
                  <span className="all-total__price">￥{allTotal}</span>
                </div>
                <small className="total-price__caption">
                  ※正式なお見積りではないため実際の金額は異なる可能性があります
                </small>
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
        pageTitle={"制作料金表"}
        pageDesc={
          "Webサイト制作にかかる料金表を掲載しております。\nご検討の際の目安にぜひご参考ください。"
        }
        pagePath={`/price/`}
        pageImg={data.price.childImageSharp.original.src}
      />
    </>
  );
};

export const query = graphql`
  query {
    price: file(relativePath: { eq: "price-background.jpg" }) {
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
