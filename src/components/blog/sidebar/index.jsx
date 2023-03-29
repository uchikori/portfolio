import * as React from "react";
import { Adsence } from "../../adsence";
export const Sidebar = () => {
  return (
    <aside className="sidebar flex-item three-column bg-white">
      <section className="sidebar__widget">
        <h2 className="sidebar__title">CATEGORY</h2>
        <ul className="sidebar__term-list"></ul>
      </section>
      <section className="sidebar__widget">
        <Adsence format={"auto"} />
      </section>
    </aside>
  );
};
