import React from 'react';
import Helmet from 'react-helmet';

import './sass/blog-post.scss';

export default function Template ({ data }) {

  const { markdownRemark: post } = data;
  return (
    <article>
      <div className="blog-post-container">
        <Helmet title={`dougmcdonald.co.uk - ${post.frontmatter.title}`} />
        <div className="blog-post">
          <header>
            <h2>{post.frontmatter.title}</h2>
            <div className="blog-post-meta">
              {post.frontmatter.tags.map(tag =>
                <span key={tag} className={`tag ${tag}`}>{tag}</span>
              )}
            </div>
          </header>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </article>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`
;