import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: repos } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container text-justify">
            <div className="content">
              <h1 className="text-center">Repo</h1>
            </div>
            {repos
              .map(({ node: repo }) => (
                <div
                  className="content"
                  style={{ border: '1px solid #333', padding: '2em 4em' }}
                  key={repo.id}
                >
                  <p>
                    <Link className="has-text-primary" to={repo.fields.slug}>
                      {repo.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{repo.frontmatter.date}</small>
                  </p>
                  <p>
                    {repo.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={repo.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    })
  }),
}

export const pageQuery = graphql`
  query RepoQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "repo-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
