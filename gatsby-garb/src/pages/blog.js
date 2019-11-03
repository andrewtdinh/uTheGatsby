import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Layout from '../components/layout'

const getMarkdownPosts = graphql`
  {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title,
            date
          }
          excerpt
        }
      }
    }
  }
`

export default () => {
  <Layout>
    <div>
      <h1 style={{ display: 'inlineBlock', borderBottom: '1px solid'}}
      >Gatsby Garb Blog</h1>
      <StaticQuery 
        query={}
      />
    </div>
  </Layout>
}