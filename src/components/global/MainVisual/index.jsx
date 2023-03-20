import * as React from "react";
import { ScrollLead } from "../ScrollLead";

export const MainVisual = (props) => {
  const { children } = props;
  return (
    <section className="main-visual">
      <div className="main-visual__inner">{children}</div>
      <ScrollLead />
    </section>
  );
};
