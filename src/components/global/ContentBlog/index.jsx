import * as React from "react";
import { ContactLink } from "../ContactLink";
import { PageFooter } from "../../page/PageFooter";

export const ContentBlog = (props) => {
  const { children } = props;

  return (
    <>
      <section className="content">
        <div className="content__inner">
          {children}
          <ContactLink />
        </div>
      </section>
      <PageFooter />
    </>
  );
};
