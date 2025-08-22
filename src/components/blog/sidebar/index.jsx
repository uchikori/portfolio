import * as React from "react";
import { graphql, Link, useStaticQuery, navigate } from "gatsby";
import { useState } from "react";
import { Adsence } from "../../adsence";
import { PopularPosts } from "../../PopularPosts";

export const Sidebar = (props) => {
  const { path, rankingData } = props;
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const data = useStaticQuery(graphql`
    query {
      allWpType(filter: { contentNodes: { nodes: { elemMatch: { isContentNode: { eq: true } } } } }, sort: { isTermNode: ASC }) {
        nodes {
          name
          slug
          id
        }
      }
      allWpPost {
        nodes {
          title
          slug
          excerpt
          date(formatString: "YYYY.MM.DD")
        }
      }
    }
  `);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.length > 0) {
      const filtered = data.allWpPost.nodes.filter((post) => post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query));
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <aside className="sidebar flex-item three-column bg-glass">
      <section className="sidebar__widget">
        <h2 className="sidebar__title">SEARCH</h2>
        <div className="sidebar__search">
          <form onSubmit={handleSubmit}>
            <input type="text" value={searchQuery} onChange={handleSearch} placeholder="記事を検索..." className="sidebar__search-input" />
            <button type="submit" className="sidebar__search-button">
              検索
            </button>
          </form>
          {/* {searchResults.length > 0 && (
            <ul className="sidebar__search-results">
              {searchResults.map(post => (
                <li key={post.slug}>
                  <Link to={`/blog/${post.slug}`} className="sidebar__search-result">
                    <h3>{post.title}</h3>
                    <span>{post.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )} */}
        </div>
      </section>
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

      <section className="sidebar__widget">
        <Adsence format="auto" path={path} />
      </section>
    </aside>
  );
};
