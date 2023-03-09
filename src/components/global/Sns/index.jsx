import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

export const Sns = () => {
  return (
    <div className="sns-block">
      <a
        href="https://www.facebook.com/WEBdesigner.uchiwa"
        className="sns-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StaticImage
          src="../../../images/icon-facebook.svg"
          alt="facebook"
          layout="fixed"
          height={24}
        />
      </a>
      <a
        href="https://www.instagram.com/uchiwa_cs"
        className="sns-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StaticImage
          src="../../../images/icon-instagram.svg"
          alt="Instagram"
          layout="fixed"
          height={24}
        />
      </a>
      <a href="/" className="sns-icon">
        <StaticImage
          src="../../../images/icon-blog.svg"
          alt="blog"
          layout="fixed"
          height={24}
        />
      </a>
    </div>
  );
};
