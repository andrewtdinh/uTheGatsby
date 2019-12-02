import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const Products = () => (
  <Layout>
    <div>
      {/* Product List */}
    </div>
  </Layout>
);

export const query = graphql`
  allContentfulProduct {
    edges { 
      node {
        id
        slug
        name
        image {
          fluid(maxWidth: 800) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default Products;