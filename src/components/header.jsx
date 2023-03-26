import React, { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"
import scrollTo from "gatsby-plugin-smoothscroll"
import Lottie from "lottie-react"

import hamburgerAnim from "../images/animations/hamburger.json"
import SocialMedia from "./SocialMedia"

const Header = ({ siteTitle }) => {
  const hamburgerRef = useRef()
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState("opacity-0 translate-x-80")
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    if (currentScrollPos > prevScrollPos) {
      setVisible(false)
    } else {
      setVisible(true)
    }
    setPrevScrollPos(currentScrollPos)
  }

  const onHamburgerClick = () => {
    setIsOpen(!isOpen)
  }

  const closeHamburgerMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
    document.querySelector("main").style.filter = "blur(0px)"
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  })

  useEffect(() => {
    document.querySelector("main").addEventListener("click", () => {
      setIsOpen(false)
    })

    if (isOpen) {
      hamburgerRef.current.playSegments([0, 19], true)
      setIsVisible("opacity-100	translate-x-0")
      document.body.style.overflow = "hidden"
      document.querySelector("main").style.filter = "blur(2px)"
    } else {
      hamburgerRef.current.playSegments([20, 41], true)
      setIsVisible("translate-x-[1000px]")
      document.body.style.overflow = "auto"
      document.querySelector("main").style.filter = "blur(0px)"
    }
  }, [isOpen])

  return (
    <>
      <header className={`bg-[blue]  z-50 fixed top-0 left-0 right-0 md:px-10 text-white ${visible ? 'opacity-1' : 'opacity-0'} transition-opacity ease-in-out duration-500`}>
        <div className="container relative flex justify-between mx-auto px-5 lg:px-0 sm:px-0 py-5 text-base ">
          <div className="absolute bottom-0 left-0 right-0 w-[calc(100%-2rem)] sm:w-full mx-auto h-[1px] bg-white opacity-30"></div>
          <div className="flex gap-3 justify-center items-center">
            {/* <div className="w-10 h-10 ">
            <img className="w-full h-full rounded-full" src={buddhika} alt="b"   />
          </div> */}
            <div
              id="logo"
              className="font-['Comfortaa'] text-xl font-bold cursor-pointer"
              onClick={() => {
                closeHamburgerMenu()
                scrollTo("#hero")
              }}
            >
              <span className="text-[#fcca3f] text-2xl font-extrabold">b</span>
              uddhika
            </div>
          </div>
          <div className=" gap-8 justify-between items-center opacity-90 font-medium hidden sm:flex ">
            {/* <div>Skills</div> */}
            <div data-sal="slide-down"
              data-sal-duration="400"
              data-sal-easing="ease" className="cursor-pointer" onClick={() => scrollTo("#my-work", "center")}>Work</div>
            <div data-sal="slide-down"
              data-sal-duration="800"
              data-sal-easing="ease" className="cursor-pointer" onClick={() => scrollTo("#experiences", "center")}>Experience</div>
            <div data-sal="slide-down"
              data-sal-duration="1200"
              data-sal-easing="ease" className="cursor-pointer" onClick={() => scrollTo("#about", "center")}>About</div>
            <div data-sal="slide-down"
              data-sal-duration="1600"
              data-sal-easing="ease" className="cursor-pointer" onClick={() => scrollTo("#footer", "center")}>
              Contact
            </div>
          </div>
          <div
            className="sm:hidden absolute top-2 right-4 z-50  h-12 w-12 overflow-hidden"
            onClick={onHamburgerClick}
          >
            <Lottie
              rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
              loop={false}
              lottieRef={hamburgerRef}
              animationData={hamburgerAnim}
              style={{ transform: "scale(0.8)", width: "100%", height: "100%" }}
            ></Lottie>
          </div>
        </div>
      </header>
      <header
        className={
          isVisible +
          " bg-[blue] fixed top-0 right-0 bottom-0 z-20 sm:invisible w-[calc(60vw)]  transition-transform	 ease-in-out duration-500"
        }
      >
        <div className="w-full h-full flex flex-col gap-5 justify-center items-center text-lg text-white">
          <div className="cursor-pointer"
            onClick={() => {
              closeHamburgerMenu()
              scrollTo("#my-work", "start")
            }}>Work</div>
          <div className="cursor-pointer"
            onClick={() => {
              closeHamburgerMenu()
              scrollTo("#experiences", "center")
            }}>Experience</div>
          <div className="cursor-pointer"
            onClick={() => {
              closeHamburgerMenu()
              scrollTo("#about", "start")
            }}>About</div>
          <div
            className="cursor-pointer"
            onClick={() => {
              closeHamburgerMenu()
              scrollTo("#footer", "center")
            }}
          >
            Contact
          </div>
          <SocialMedia></SocialMedia>
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
