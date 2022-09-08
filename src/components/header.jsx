import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import buddhika from '../images/buddhika.jpg'

const Header = ({ siteTitle }) => {

  return (
    <header className="bg-[blue] sticky top-0 z-20 ">
      <div className="container relative flex justify-between mx-auto px-5 lg:px-0 sm:px-0 py-5 text-base text-white">
        <div className="absolute bottom-0 left-0 right-0 w-[calc(100%-2rem)] sm:w-full mx-auto h-[1px] bg-white opacity-30"></div>
        <div className="flex gap-3 justify-center items-center">
          {/* <div className="w-10 h-10 ">
            <img className="w-full h-full rounded-full" src={buddhika} alt="b"   />
          </div> */}
          <div className="font-['Comfortaa'] text-xl font-bold "><span className="text-[#fcca3f] text-2xl font-extrabold">b</span>uddhika</div>
        </div>
        <div className="flex gap-8 justify-between items-center opacity-80 ">
          {/* <div>Skills</div> */}
          <div>Works</div>
          <div>Contact</div>
        </div>

      </div>
    </header>

  )

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
