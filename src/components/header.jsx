import React, { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';
import hamburgerAnim from '../images/animations/hamburger.json'

const Header = ({ siteTitle }) => {

  const hamburgerRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState('opacity-0 translate-x-80')

  const onHamburgerClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    console.log("is open boolean valu e==> ", isOpen)
    if (isOpen) {
      console.log('open true =======')
      hamburgerRef.current.getLottie().playSegments([0, 19], true);
      setIsVisible('opacity-100	translate-x-0')
    } else {
      console.log('open false ==========')
      hamburgerRef.current.getLottie().playSegments([20, 41], true);
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
          <div className="sm:hidden absolute top-3 right-3 z-50  h-10 w-10 overflow-hidden" onClick={onHamburgerClick}>
            <lottie-player
              ref={hamburgerRef} // 2. set the reference for the player
              id="firstLottie"
              mode="normal"
              src="https://lottie.host/c1d48174-e05a-4fb4-91a3-dfc9be8ebb11/1Suv7QpUbY.json"
              style={{ transform: 'scale(2.5)', width: '100%' }}
            ></lottie-player>
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
