import React, { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"

import Lottie from "lottie-react";

import hamburgerAnim from '../images/animations/hamburger.json'

const Header = ({ siteTitle }) => {

  const hamburgerRef = useRef()
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState('opacity-0 translate-x-80')

  const onHamburgerClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    console.log("hamburgerRef==> ", hamburgerRef)
    if (isOpen) {
      hamburgerRef.current.playSegments([0, 19], true);
      setIsVisible('opacity-100	translate-x-0')
    } else {
      hamburgerRef.current.playSegments([20, 41], true);
      setIsVisible('-translate-x-[1000px]')
    }
  }, [isOpen])

  return (
    <>
      <header className="bg-[blue] sticky top-0 z-50  ">
        <div className="container relative flex justify-between mx-auto px-5 lg:px-0 sm:px-0 py-5 text-base text-white">
          <div className="absolute bottom-0 left-0 right-0 w-[calc(100%-2rem)] sm:w-full mx-auto h-[1px] bg-white opacity-30"></div>
          <div className="flex gap-3 justify-center items-center">
            {/* <div className="w-10 h-10 ">
            <img className="w-full h-full rounded-full" src={buddhika} alt="b"   />
          </div> */}
            <div className="font-['Comfortaa'] text-xl font-bold "><span className="text-[#fcca3f] text-2xl font-extrabold">b</span>uddhika</div>
          </div>
          <div className=" gap-8 justify-between items-center opacity-80 hidden sm:flex ">
            {/* <div>Skills</div> */}
            <div>Work</div>
            <div>Experience</div>
            <div>About</div>
            <div>Contact</div>
          </div>
          <div className="sm:hidden absolute top-2 right-4 z-50  h-12 w-12 overflow-hidden" onClick={onHamburgerClick}>
            <Lottie
              rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
              loop={false}
              lottieRef={hamburgerRef}
              animationData={hamburgerAnim}
              style={{ transform: 'scale(0.8)', width: '100%', height: '100%' }}
            ></Lottie>
          </div>
        </div>
      </header>
      <header className={isVisible + " bg-[blue] fixed top-0 right-0 bottom-0 z-20 sm:invisible w-[calc(60vw)]  transition-transform	 ease-in-out duration-500"}>
        <div className="w-full h-full flex flex-col gap-5 justify-center items-center text-lg text-white">
          <div>Work</div>
          <div>Experience</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      </header>
    </>

  )

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
