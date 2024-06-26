import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

export const Pagenation = (props) => {
  const { pageContext } = props;

  return (
    <ul className="pagenation">
      {pageContext.isFirst ? (
        ""
      ) : pageContext.isTaxonomyPage ? (
        <li className="pagenation__item prev">
          <Link
            to={
              pageContext.currentPage === 2
                ? `/${pageContext.taxonomyName}/${pageContext.typeSlug}/`
                : `/${pageContext.taxonomyName}/${pageContext.typeSlug}/page-${
                    pageContext.currentPage - 1
                  }`
            }
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
        </li>
      ) : (
        <li className="pagenation__item prev">
          <Link
            to={
              pageContext.currentPage === 2
                ? `/${pageContext.type}/`
                : `/${pageContext.type}/page-${pageContext.currentPage - 1}`
            }
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
        </li>
      )}

      {Array.from({ length: pageContext.pages }).map((_, index) => {
        return pageContext.isTaxonomyPage ? (
          <li className="pagenation__item" key={index}>
            <Link
              to={
                index === 0
                  ? `/${pageContext.taxonomyName}/${pageContext.typeSlug}/`
                  : `/${pageContext.taxonomyName}/${
                      pageContext.typeSlug
                    }/page-${index + 1}`
              }
              className={pageContext.currentPage === index + 1 ? "current" : ""}
            >
              {index + 1}
            </Link>
          </li>
        ) : (
          <li className="pagenation__item" key={index}>
            <Link
              to={
                index === 0
                  ? `/${pageContext.type}/`
                  : `/${pageContext.type}/page-${index + 1}`
              }
              className={pageContext.currentPage === index + 1 ? "current" : ""}
            >
              {index + 1}
            </Link>
          </li>
        );
      })}

      {pageContext.isLast ? (
        ""
      ) : pageContext.isTaxonomyPage ? (
        <li className="pagenation__item next">
          <Link
            to={`/${pageContext.taxonomyName}/${pageContext.typeSlug}/page-${
              pageContext.currentPage + 1
            }`}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </li>
      ) : (
        <li className="pagenation__item next">
          <Link to={`/${pageContext.type}/page-${pageContext.currentPage + 1}`}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </li>
      )}
    </ul>
  );
};
