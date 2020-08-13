import React, { FC } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { withPreview } from '@prismicio/gatsby-source-prismic-graphql'

const Header = ({ prismic }) => {
  const data = prismic.allHeaders.edges[0].node

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to={`/`}
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {data.title}
          </Link>
        </h1>
      </div>
    </header>
  )
}

const Container: FC = () => (
  <StaticQuery query={`${query}`} render={withPreview((data: any) => <Header {...data} />, query)!} />
)

const query = graphql`
  {
    prismic {
      allHeaders(lang: "en-gb") {
        edges {
          node {
            title
          }
        }
      }
    }
  }
`

export default Container
