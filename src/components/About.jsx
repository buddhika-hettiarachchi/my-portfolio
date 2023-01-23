import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import bulletPoint from "../images/icons/bullet-point.png"

const About = () => {
  return (
    <div id="about" className="bg-[#f3f7fd]">
      <div className="container max-w-5xl py-20 md:pb-32 lg:pb-20 px-5 md:px-16 m-auto">
        <div className=" text-center">
          <div className="text-sm uppercase opacity-80">About</div>
          <div className=" text-3xl sm:text-4xl font-bold pb-12 lg:pb-20 ">
            about me description
          </div>
          <div className=" flex flex-col-reverse lg:flex-row ">
            <div className="flex-1">
              <div className="w-1/2 m-auto lg:w-5/6 lg:ml-auto">
                <StaticImage quality='100' style={{height: "100%"}} objectFit='cover'  src="../images/buddhika.webp" alt="buddhika" placeholder="blurred"/>
              </div>
              <div className="lg:mr-16 lg:pl-5 my-5">Here are a few technologies I’ve been working with recently:</div>
              <div className="flex w-11/12 sm:w-3/4 md:w-1/2 lg:w-3/4 m-auto sm:px-8 lg:px-0 lg:justify-center">
                <ul className="flex-1">
                  <li className="flex justify-start items-center gap-3">
                    <img className="w-5 h-5" src={bulletPoint} alt="angular" />
                    <div>JavaScript</div>
                  </li>
                  <li className="flex justify-start items-center gap-3">
                    <img className="w-5 h-5" src={bulletPoint} alt="angular" />
                    <div>TypeScript</div>
                  </li>
                  <li className="flex justify-start items-center gap-3">
                    <img className="w-5 h-5" src={bulletPoint} alt="angular" />
                    <div>Anuglur</div>
                  </li>
                  <li className="flex justify-start items-center gap-3">
                    <img className="w-5 h-5" src={bulletPoint} alt="angular" />
                    <div>React</div>
                  </li>
                </ul>
                <ul className="flex-1" >
                  <li className="flex justify-start items-center gap-3">
                    <img className="w-5 h-5" src={bulletPoint} alt="angular" />
                    <div>Gatsby</div>
                  </li>
                  <li className="flex justify-start items-center gap-3">
                    <img className="w-5 h-5" src={bulletPoint} alt="angular" />
                    <div>Next</div>
                  </li>
                  <li className="flex justify-start items-center gap-3">
                    <img className="w-5 h-5" src={bulletPoint} alt="angular" />
                    <div>Nest</div>
                  </li>
                  <li className="flex justify-start items-center gap-3">
                    <img className="w-5 h-5" src={bulletPoint} alt="angular" />
                    <div>Node</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1 relative lg:right-16 pt-8 bottom-8 lg:pt-16">
              <div className=" lg:bg-white p-0 lg:p-12">
                <div className="text-3xl">
                  Hello! My name is Brittany <br></br>and I enjoy creating
                  things that live on the internet.
                </div>
                My interest in web development started back in 2012 when I
                decided to try editing custom Tumblr themes — turns out hacking
                together a custom reblog button taught me a lot about HTML &
                CSS! Fast-forward to today, and I’ve had the privilege of
                working at an advertising agency, a start-up, a huge
                corporation, and a student-led design studio. My main focus
                these days is building accessible, inclusive products and
                digital experiences at Upstatement for a variety of clients.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
