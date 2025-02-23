import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import { Adsence } from "../../adsence";
import { PopularPosts } from "../../PopularPosts";

export const Sidebar = (props) => {
  const { path, rankingData } = props;
  const data = useStaticQuery(graphql`
    query {
      allWpType(filter: { contentNodes: { nodes: { elemMatch: { isContentNode: { eq: true } } } } }) {
        nodes {
          name
          slug
        }
      }
    }
  `);

  return (
    <aside className="sidebar flex-item three-column bg-glass">
      <section className="sidebar__widget">
        <h2 className="sidebar__title">CATEGORY</h2>
        <ul className="sidebar__term-list">
          {data.allWpType.nodes.map((node) => {
            return (
              <li key={node.slug}>
                <Link to={`/class/${node.slug}/`} className="sidebar__term-item term">
                  {node.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="sidebar__widget">
        <h2 className="sidebar__title">RANKING</h2>
        <PopularPosts rankingData={rankingData} />
      </section>

      <section className="sidebar__widget">{<Adsence format={"rectangle"} path={path} />}</section>
    </aside>
  );
};
