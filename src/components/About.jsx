import React from "react"
import buddhika from "../images/buddhika.jpg"

const About = () => {
  return (
    <div className="bg-[#f3f7fd]">
      <div className="container max-w-5xl py-20 md:pb-32 lg:pb-20 px-5 md:px-16 m-auto">
        <div className=" text-center">
          <div className="text-sm uppercase opacity-80">About</div>
          <div className=" text-3xl sm:text-4xl font-bold pb-20 ">
            about me description
          </div>
          <div className=" flex flex-col-reverse md:flex-row">
            <div className="flex-1">
              <div className="w-1/2 m-auto md:w-5/6 md:ml-auto">
                <img src={buddhika} alt="buddhika" />
              </div>
              <div className="flex  py-20">
                <ul className="flex-1">
                  <li>Anuglur</li>
                  <li>Anuglur</li>
                  <li>Anuglur</li>
                  <li>Anuglur</li>
                  <li>Anuglur</li>
                </ul>
                <ul className="flex-1">
                  <li>Anuglur</li>
                  <li>Anuglur</li>
                  <li>Anuglur</li>
                  <li>Anuglur</li>
                  <li>Anuglur</li>
                </ul>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="block md:absolute md:w-[400px] lg:w-[500px] z-50 top-[100px] md:right-1 bg-white  p-8 md:p-10">
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
