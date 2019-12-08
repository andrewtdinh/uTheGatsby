import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import gatsbyLogo from '../images/gatsby-icon.png';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {/* Title and Logo area */}
      <span style={{display: "flex", alignItems: 'center'}}>
        <img src={gatsbyLogo} alt="Gatsby Garb Logo" style={{
          width: "50px",
          margin: "0 10px",
          border: "3px solid orange",
          borderRadius: "50%"
        }}/>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </span>
      {/** Shopping Cart Summary */}
      <div className="snipcart-summary snipcart-checkout">
        <div><strong>My Cart</strong></div>
        <div>
          <span className="snipcart-total-items"></span>{" "}Items in Cart
        </div>
        <div>Total price{' '}
          <span className="snipcart-total-price" />
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
