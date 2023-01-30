import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import bulletPoint from "../images/icons/bullet-point.png"

const About = () => {
  return (
    <div id="about" className="bg-[#f3f7fd]">
      <div className="container max-w-5xl py-20 md:pb-32 lg:pb-20 px-5 md:px-16 m-auto">
        <div className=" text-center">
          <div className="flex flex-col gap-8 text-center">
            <div className="text-sm text-ternary-text font-medium tracking-widest uppercase">
              About
            </div>
            <div className="text-3xl sm:text-4xl font-bold pb-20">
              Hello! I am Buddhika.
            </div>
          </div>
          <div className=" flex flex-col-reverse lg:flex-row ">
            <div className="flex-1">
              <div className="w-1/2 m-auto lg:w-5/6 lg:ml-auto">
                <StaticImage
                  quality="100"
                  style={{ height: "100%" }}
                  objectFit="cover"
                  src="../images/buddhika.webp"
                  alt="buddhika"
                  placeholder="blurred"
                />
              </div>
              <div className="lg:mr-16 lg:pl-5 my-5">
                Here are a few technologies I’ve been working with recently:
              </div>
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
                <ul className="flex-1">
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
            <div className="flex-1 relative lg:right-16 bottom-8 lg:pt-16">
              <div className=" lg:bg-white p-0 lg:p-12">
                <div className="text-2xl pb-8">
                  Specialized in creating sleek and premium user interfaces with
                  Cutting-Edge Front End Technologies.
                </div>
                <div className="">
                  I am a web developer with a passion for programming, sparked
                  in 2015 when I began learning a programming language. This led
                  me to the world of web development where I have gained
                  experience working with companies ranging from startups to big
                  tech. The excitement of seeing my creations come to life on
                  screen continues to drive my love for the field.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
