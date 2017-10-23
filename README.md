# dougmcdonald.co.uk - gatsby blog

The `final` implementation of [dougmcdonald.co.uk](dougmcdonald.co.uk) a personal blog.

Mobile first design

## Run it

- clone the repo
- npm i (pray you have all the annoying node-gyp setup on windows)
- gatsby develop
  - access (localhost:8000)[localhost:8000]


## Deployment

The site is deployed via a wercker pipeline to microsoft azure - this was the best way I could get the site to build and deploy. I was unable to find a way to deploy through Github > Azure directly

## Features

### Completed
- GatsbyJS static content generation
- Markdown processing for articles via `gatsby-transformer-remark`
- Disqus comments via `react-disqus-thread`
- Webfonts via npm and `https://github.com/KyleAMathews/typefaces`
- Prism highlighting for code in markdown via `gatsby-remark-prismjs`
- Responsive image generation and linking from markdown via `gatsby-remark-images`
- SSL setup on Azure via `Let's Encrypt`
- Google analytics

### TODO

- Contact form
- About page
- Article filter
- More articles

