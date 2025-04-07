import * as React from "react";
import { Sidebar } from "../components/blog/sidebar";
import { Content } from "../components/global/Content";
import { MainVisual } from "../components/global/MainVisual";
import { Layout } from "../components/Layout";
import { PageHeader } from "../components/page/PageHeader";
import { graphql, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Seo } from "../components/Seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faClock } from "@fortawesome/free-solid-svg-icons";

export default function SearchResults({ data, pageContext, location }) {
  
  const searchQuery = new URLSearchParams(location.search).get('q') || '';
  
  const posts = data.allWpWebTips.nodes;
  
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) ||
    post.terms.nodes.some(term => term.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Layout hasLoadingObj={false}>
      <div className="page-wrapper web-tips search-result">
        <span className="backgroundImage">
          <StaticImage src="../images/blog-background.jpg" layout="fullWidth" placeholder="blurred" quality={90} alt="" />
        </span>
        <div className="scroll-container">
          <MainVisual>
            <PageHeader 
              titleImage="title-blog" 
              titleClass={"blog"} 
              subTitle={`「${searchQuery}」の検索結果\n${filteredPosts.length}件の記事が見つかりました`} 
              alt="検索結果" 
            />
          </MainVisual>
          <Content>
            <div className="flex-block align-start">
              <main className="flex-item nine-column">
                <div className="article__items">
                  {filteredPosts.map((node) => (
                    <article id={node.databaseId} key={node.databaseId}>
                      <Link className="card" to={`/web-tips/${node.databaseId}`} state={{ currentPath: location.pathname }}>
                        <div className="card__thumbnail">
                          <GatsbyImage
                            image={node.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                            alt={node.featuredImage.node.altText}
                          />
                          <div className="card__thumbnailoverlay">READ MORE</div>
                        </div>
                        <div className="card__body">
                          <div className="card__meta">
                            <div className="term">
                              <FontAwesomeIcon icon={faTag} className="tagIcon" />
                              {node.terms.nodes[0].name}
                            </div>
                            <time dateTime={node.date}>
                              <FontAwesomeIcon icon={faClock} className="clockIcon" />
                              {node.date}
                            </time>
                          </div>
                          <h2 className="card__title">{node.title}</h2>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
                {filteredPosts.length === 0 && (
                  <div className="no-results">
                    <p>検索結果が見つかりませんでした。別のキーワードで試してみてください。</p>
                  </div>
                )}
              </main>
              <Sidebar path={location.pathname} rankingData={[]} />
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}

export const Head = ({ location }) => {
  const searchQuery = new URLSearchParams(location.search).get('q') || '';
  return (
    <Seo
      pageClass={"search-results"}
      pageTitle={`「${searchQuery}」の検索結果`}
      pageDesc={`ブログ記事の検索結果：${searchQuery}`}
      pagePath={"/search/"}
    />
  );
};

export const query = graphql`
  query {
    allWpWebTips(sort: { date: DESC }) {
      nodes {
        databaseId
        date(formatString: "YYYY-MM-DD")
        title
        excerpt
        terms {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 90, placeholder: BLURRED, layout: CONSTRAINED, width: 254, height: 142)
              }
            }
          }
        }
      }
    }
  }
`; 