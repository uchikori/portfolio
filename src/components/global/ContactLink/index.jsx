import { Link } from "gatsby";
import * as React from "react";

export const ContactLink = () => {
  return (
    <div className="content__contact">
      <Link to={`/contact`} className="link-btn contact">
        CONTACT
      </Link>
    </div>
  );
};
