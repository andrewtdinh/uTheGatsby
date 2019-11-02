import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../components/layout';

const getImageData = graphql`
  {
    allFile {
      edges {
        node {
          relativePath,
          size,
          extension,
          birthTime
        }
      }
    }
  }
`

export default () => {
  const data = useStaticQuery(getImageData);
  return (
    <Layout>
      <h1>Hello from page 3</h1>
      <table>
        <thead>
          <tr>
            <th>Relative Path</th>
            <th>Size of Image</th>
            <th>Extension</th>
            <th>Birthtime</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map((edge, index) => (
            <tr key={index}>
              <td>{edge.node.relativePath}</td>
              <td>{edge.node.size}</td>
              <td>{edge.node.extension}</td>
              <td>{edge.node.birthTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/page-2">Go to page 2</Link>
    </Layout>
  )
}