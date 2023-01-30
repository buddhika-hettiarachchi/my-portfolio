import React, { useEffect, createRef, useState, useRef } from "react"
import Typed from "typed.js"
import Lottie from "lottie-web"

const Hero = () => {
  const letterTypingContainer = createRef()
  const typed = useRef(null)

  useEffect(() => {
    const options = {
      strings: ["React", "Angular", "Next", "Gatsby"],
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 700,
      loop: true,
      showCursor: false,
    }

    // elRef refers to the <span> rendered below
    typed.current = new Typed(letterTypingContainer.current, options)
  }, [])

  return (
    <div
      id="hero"
      className="relative h-screen sm:h-[600px] 2xl:h-[700px] min-h-[500px] flex justify-center items-center font-black text-3xl md:pt-20 md:px-10"
    >
      <div
        style={{
          backgroundColor: "blue",
        }}
        className="absolute inset-0"
      ></div>
      <div className="container p-0 flex flex-col sm:flex-row text-white z-10">
        <div className="text-center sm:text-left px-5 lg:px-0 w-full lg:w-3/4 2xl:w-5/6">
          <div className="text-sm uppercase tracking-widest">
            Buddhika Hettiarachchi, Front-end Developer
          </div>
          <div
            className="text-3xl md:text-5xl py-8 leading-tight md:leading-tight tracking-normal
"
          >
            Specialized in creating sleek and premium user interfaces with the
            help of{" "}
            <span ref={letterTypingContainer} className="text-[yellow] "></span>
            .
          </div>
          <div className="flex justify-center sm:justify-start gap-5">
            <button className="text-sm bg-white text-[blue] px-5 py-3">
              Selected Work
            </button>
            <button className="text-sm border border-white px-5 py-3">
              <a
                href={"./profile.pdf"}
                title="Download the Hello World file"
                download
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
