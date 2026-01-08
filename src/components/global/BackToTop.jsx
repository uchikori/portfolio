import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = (window.pageYOffset || document.documentElement.scrollTop) > 100;
      setVisible(scrolled);
    };

    // run once to set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const baseStyle = {
    position: "fixed",
    right: "1.5rem",
    bottom: "1.5rem",
    width: "44px",
    height: "44px",
    borderRadius: "999px",
    background: "rgba(0,0,0,0.65)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
    cursor: "pointer",
    transition: "opacity 200ms ease, transform 200ms ease, visibility 200ms",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(12px)",
    visibility: visible ? "visible" : "hidden",
    zIndex: 9999,
  };

  return (
    <button aria-label="トップへ戻る" title="トップへ戻る" onClick={onClick} style={baseStyle} className="back-to-top-button">
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  );
};

export default BackToTop;
