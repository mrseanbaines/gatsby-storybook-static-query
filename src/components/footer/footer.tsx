import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import { withPreview } from '@prismicio/gatsby-source-prismic-graphql'

const Footer = ({ prismic }) => {
  const data = prismic.allFooters.edges[0].node

  return (
    <footer
      style={{
        background: `rebeccapurple`,
        marginTop: `1.45rem`,
        color: `white`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1>{data.title}</h1>© {new Date().getFullYear()}, Built with
        {` `}
        <a style={{ color: `white` }} href='https://www.gatsbyjs.org'>
          Gatsby
        </a>
      </div>
    </footer>
  )
}

const Container = () => {
  const data = useStaticQuery(query)

  return withPreview((data) => <Footer {...data} />, query)(data)
}

const query = graphql`
  {
    prismic {
      allFooters(lang: "en-gb") {
        edges {
          node {
            _meta {
              lang
            }
            title
          }
        }
      }
    }
  }
`

export default Container
