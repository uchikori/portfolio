import * as React from "react";
import { Slide } from "../components/TopPage/Slide";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";
import { graphql } from "gatsby";
// import { Seo } from "../components/Seo";

export default function Home() {
  return (
    <>
      <Layout hasLoadingObj>
        <Slide />
      </Layout>
    </>
  );
}

export const Head = (props) => {
  const { data } = props;

  // 構造化データ
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: "UCHIWA Creative Studio",
    image: data.ogp.childImageSharp.original.src,
    email: "info@uchiwa-design.net",
    address: {
      "@type": "PostalAddress",
      addressLocality: "札幌市",
      addressRegion: "北海道",
      addressCountry: "JP",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: {
        "@type": "DayOfWeek",
        name: "月曜日、火曜日、水曜日、木曜日、金曜日",
      },
    },
    priceRange: "￥4,000～￥3,000,000",
  };
  return (
    <>
      <Seo
        pageClass={"front-page"}
        pageImg={data.ogp.childImageSharp.original.src}
      />
      {<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </>
  );
};

export const query = graphql`
  query {
    ogp: file(relativePath: { eq: "ogp.jpg" }) {
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
