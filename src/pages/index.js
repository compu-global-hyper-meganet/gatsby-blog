import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Filter from '../templates/filter';
import Tags from '../templates/tags';

import './read.scss';

const Index = ({ data }) => {

  let { edges: posts } = data.allMarkdownRemark;

  const options = [
    `personal-development`,
    `gaming`,
    `react`
  ];

  return (
      <div className="blog-container">
        <h1>LATEST POSTS</h1>
        {/* <Filter options={options} onChange={e => { console.log(e.target.value) }} /> */}
        <Helmet title={`Read My Mind @ dougmcdonald.co.uk`} />
        {posts
          .filter(post =>
            post.node.frontmatter.title.length > 0 &&
            post.node.frontmatter.draft == false)
          .map(({ node: post }) => {
            return (
            <div className="blog-post-preview" key={post.id}>
              <h2>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h2>
              <div className="blog-post-meta">
                <p className="date">{post.frontmatter.date}</p>
                <Tags tags={post.frontmatter.tags} />
              </div>
              <p className="excerpt">{post.excerpt}</p>
            </div>
            );
          })
        }
      </div>
    );
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
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
            draft
          }
        }
      }
    }
  }
`;
