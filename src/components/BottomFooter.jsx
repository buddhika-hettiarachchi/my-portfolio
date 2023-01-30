import React, { useRef } from "react"
import Lottie from "lottie-react"
import scrollTo from "gatsby-plugin-smoothscroll"

import upArrowAnim from "../images/animations/up-arrow.json"
import gatsby from "../images/icons/gatsby.png"
import react from "../images/icons/react.png"
import tailwind from "../images/icons/tailwind.png"
import netlify from "../images/icons/netlify.png"

const BottomFooter = () => {
  const upArrowRef = useRef()

  const onUpArrowClick = () => {
    scrollTo("#hero")
  }

  return (
    <div className="relative flex flex-col justify-center items-center pb-5  text-white bg-[#0000ff]">
      <div className="text-center text-sm opacity-80">
        Designed & Built by Buddhika Hettiarachchi
      </div>
      <div className="mt-2 text-sm opacity-80">
        Made with
        <span className="inline ml-6">
          <img className="w-5 h-5 inline" src={gatsby} alt="gatsby" />
        </span>
        <span className="inline ml-1">
          <img className="w-5 h-5 inline" src={react} alt="react" />
        </span>
        <span className="inline ml-1">
          <img className="w-5 h-5 inline" src={tailwind} alt="tailwind" />
        </span>
        <span className="inline ml-1">
          <img className="w-5 h-5 inline" src={netlify} alt="netlify" />
        </span>
      </div>
      <button className="hidden sm:block w-16 h-16 absolute  right-5 cursor-pointer" onClick={onUpArrowClick}>
        <Lottie
          rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          loop={true}
          lottieRef={upArrowRef}
          animationData={upArrowAnim}
          style={{ width: "100%", height: "100%" }}
        ></Lottie>
      </button>
    </div>
  )
}

export default BottomFooter
