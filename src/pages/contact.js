import * as React from "react";
import { Layout } from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { MainVisual } from "../components/global/MainVisual";
import { PageHeader } from "../components/page/PageHeader";
import { Content } from "../components/global/Content";
import { Seo } from "../components/Seo";

import { graphql } from "gatsby";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { Form } from "../components/form";

export default function Contact() {
  //recapchaのシークレットキーを取得
  const SITE_KEY = process.env.REACT_APP_SITE_KEY;
  console.log(SITE_KEY);

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
                <GoogleReCaptchaProvider reCaptchaKey={SITE_KEY}>
                  <Form />
                </GoogleReCaptchaProvider>
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
