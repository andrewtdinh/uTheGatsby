import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default () => (
  <Layout>
    <h2>Programmatically created blog post</h2>
  </Layout>
)

export const query = graphql`
  query($slug: String!){
    markdownRemark(fields: {
      slug: { eq: $slug}
    }) {
      html,
      frontmatter {
        title
      }
    }
  }
`