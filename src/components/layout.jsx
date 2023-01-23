import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import SocialMedia from "./SocialMedia"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="relative">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="hidden xl:block fixed z-50 top-64 right-3">
        <SocialMedia orientation={'flex-col'}></SocialMedia>
      </div>
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
