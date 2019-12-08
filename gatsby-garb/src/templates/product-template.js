import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const ProductTemplate = ({ data: { contentfulProduct } }) => (
  <Layout>
    <div
      style={{ 
        marginLeft: "0 auto",
        width: "100%",
        textAlign: "center"
      }}
    >
      {/* Product Info */}
      <div>
        <h2 style={{ display: "inline-block" }}>
          {contentfulProduct.name} -
        </h2>
        <span style={{ display: "inline-block", color: "#ccc", marginLeft: "4px" }}>
          Added on {contentfulProduct.createdAt}
        </span>
      </div>
      <h4>${contentfulProduct.price}</h4>
      <p>{contentfulProduct.description}</p>
      <Img
        style={{ margin: "0 auto", maxWidth: '600px' }}
        fluid={contentfulProduct.image.fluid} 
      />
    </div>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      name
      price
      description
      createdAt(formatString: "MMMM Do, YYYY h:mm:ss a")
      image {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default ProductTemplate;