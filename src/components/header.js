import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="bg-[blue]">
    <div className="container relative flex justify-between mx-auto px-8 py-8 text-base text-white">
      <div className="absolute bottom-0 left-0 right-0 w-[calc(100%-4rem)] mx-auto h-[1px] bg-white opacity-30"></div>
      <div className="">logo and name</div>
      <div className="flex gap-8 justify-between opacity-80 ">
        {/* <div>Skills</div> */}
        <div>Works</div>
        <div>Contact</div>
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
