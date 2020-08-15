import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title}</h1>

    <p>Welcome to page 2</p>

    <Link to={`/`}>Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`

export default SecondPage
