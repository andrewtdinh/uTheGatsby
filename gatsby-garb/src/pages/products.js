import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const Products = ({ data: { allContentfulProduct }}) => (
  <Layout>
    <div>
      {/* Product List */}
      <h2>Garb Products</h2>
      {allContentfulProduct.edges.map(({ node: product }) => (
        <div key={product.id}>
          <Link to={`/products/${product.slug}`} style={{ textDecoration: "none"}}>
            <h3 style={{ marginTop: '2rem' }}>
            {product.name} • {` `}<span>${product.price}</span>
            </h3>
          </Link>
          <Img 
            style={{ maxWidth: 400}}
            fluid={product.image.fluid}
          />
        </div>
      ))}
    </div>
  </Layout>
);

export const query = graphql`
{
  allContentfulProduct {
    edges { 
      node {
        id
        slug
        name
        price
        image {
          fluid(maxWidth: 400) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}
`

export default Products;