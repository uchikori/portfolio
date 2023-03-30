import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

export const Pagenation = (props) => {
  const { pageContext } = props;
  console.log(pageContext);
  return (
    <ul className="pagenation">
      {pageContext.isFirst ? (
        ""
      ) : (
        <li className="pagenation__item prev">
          <Link
            to={
              pageContext.currentPage === 2
                ? `/web-tips/`
                : `/web-tips/${pageContext.currentPage - 1}`
            }
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
        </li>
      )}
      {Array.from({ length: pageContext.blogPages }).map((_, index) => {
        return (
          <li className="pagenation__item" key={index}>
            <Link
              to={index === 0 ? `/web-tips/` : `/web-tips/${index + 1}`}
              className={pageContext.currentPage === index + 1 ? "current" : ""}
            >
              {index + 1}
            </Link>
          </li>
        );
      })}
      {pageContext.isLast ? (
        ""
      ) : (
        <li className="pagenation__item next">
          <Link to={`/web-tips/${pageContext.currentPage + 1}`}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </li>
      )}
    </ul>
  );
};
