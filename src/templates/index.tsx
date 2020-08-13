import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = (props) => {
  const data = props.data.prismic.allHomepages.edges[0].node

  return (
    <Layout>
      <h1>{data.title}</h1>

      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>

      <Link to={`/page-2`}>Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
  query($lang: String!) {
    prismic {
      allHomepages(lang: $lang) {
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

export default IndexPage
