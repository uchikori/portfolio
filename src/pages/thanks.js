import * as React from "react";
import { Layout } from "../components/Layout";
import { MainVisual } from "../components/global/MainVisual";
import { PageHeader } from "../components/page/PageHeader";
import { Seo } from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";
import { Sns } from "../components/global/Sns";

export default function Thanks() {
  return (
    <Layout hasLoadingObj={false}>
      <div className="page-wrapper thanks">
        <span className="backgroundImage">
          <StaticImage
            src="../images/contact-background.jpg"
            layout="fullWidth"
            placeholder="blurred"
            quality={90}
            alt=""
          />
        </span>
        <MainVisual>
          <PageHeader
            titleImage="title-thanks"
            titleClass={"thanks"}
            subTitle={`この度はお問い合わせ頂きありがとうございます。\nお問い合わせ内容により、返信にお時間を頂く場合もありますがご了承ください`}
            alt="お問い合わせありがとうございました"
          />
        </MainVisual>
        <Sns />
      </div>
    </Layout>
  );
}
