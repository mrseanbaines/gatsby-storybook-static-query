import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = (props) => {
  const data = props.data.prismic.allPage_2s.edges[0].node

  return (
    <Layout>
      <h1>{data.title}</h1>

      <p>Welcome to page 2</p>

      <Link to={`/`}>Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql`
  query($lang: String!) {
    prismic {
      allPage_2s(lang: $lang) {
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

export default SecondPage
