---
templateKey: blog-post
title: Filtering multiple types of content in Graphql
date: 2019-02-05T02:33:56.143Z
description: >
  I am wanting to mix a single page's content to contain both "blog-post" type
  content, and "repo-post" type content, but I don't know how to add that to the
  query to filter for it.
tags:
  - repo
  - graphql
  - react
  - query
  - filter
---


Additionally; I know what frontmatter is (re: markdown), but I don't know what templateKey, and "eq" are in this context. I don't know enough about what I am looking at to know what it's called to start searching for an explanation.



``export const pageQuery = graphql```\
`  query IndexQuery {`\
`    allMarkdownRemark(`\
`      sort: { order: DESC, fields: [frontmatter___date] },`\
`      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}`\
`    ) {`\
`      edges {`\
`        node {`\
`          excerpt(pruneLength: 400)`\
`          id`\
`          fields {`\
`            slug`\
`          }`\
`          frontmatter {`\
`            title`\
`            templateKey`\
`            date(formatString: "MMMM DD, YYYY")`\
`          }`\
`        }`\
`      }`\
`    }`\
`  }`\
`` ` ``

``

Turns out the key here lies in the filter brackets. "frontmatter" is the meta data from the markdown files, "templateKey" is the specific meta field I want to select.



EQ in this context means equal, very similar to a comparison operator for a WHERE clause in MySQL. Once I learned that, I could look for others and learned the one I am looking for is "in", as seen below:

`filter: { frontmatter: { templateKey: { in: ["blog-post", "repo-post"] } }}`
