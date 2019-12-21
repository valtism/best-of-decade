import PropTypes from "prop-types"
import React from "react"

export const Footer = ({ siteTitle }) => (
  <footer className=" text-center bg-gray-900 py-5 text-sm text-gray-600 center">
    <div className="hover:text-gray-200">By Dan Wood (@valtism)</div>
    <div>
      <a
        className="hover:text-gray-200"
        href="https://github.com/valtism/best-of-decade"
      >
        View this source on Github
      </a>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}
