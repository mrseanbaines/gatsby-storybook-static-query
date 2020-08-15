import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title}</h1>

    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to={`/page-2`}>Go to page 2</Link>
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

export default IndexPage
