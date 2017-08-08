import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

export default function Read ({ data }) {

  const { edges: posts } = data.allMarkdownRemark;

  return (
      <div className="blog-container">
        <Helmet title={`Read My Mind @ dougmcdonald.co.uk`} />
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
            <div className="blog-post-preview" key={post.id}>
              <h2>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h2>
              <div className="blog-post-meta">
                <h2>{post.frontmatter.date}</h2>
                {post.frontmatter.tags.map(tag =>
                  <span key={tag} className={`tag ${tag}`}>{tag}</span>
                )}
              </div>
              <p>{post.excerpt}</p>
            </div>
            );
          })
        }
        </div>
    );
}

export const pageQuery = graphql`
  query ReadQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
          }
        }
      }
    }
  }
`;