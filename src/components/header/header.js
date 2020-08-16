import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const Header = ({ data }) => (
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
          {data.site.siteMetadata.title}
        </Link>
      </h1>
    </div>
  </header>
)

const Container = () => <StaticQuery query={`${query}`} render={(data) => <Header {...data} />} />

const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`

export default Container
