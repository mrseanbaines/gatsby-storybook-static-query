import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Footer: FC<any> = ({ prismic }) => {
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

  return <Footer {...data} />
}

const query = graphql`
  query {
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
