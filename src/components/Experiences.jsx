import React, { useState, useEffect, useRef } from "react"

import arrow from "../images/icons/arrow.svg"

const Experiences = () => {
  const menuContentRef = useRef(null)
  const scrollRef = useRef(null)
  const verticalScrollRef = useRef(null)

  const [offsetValue, setOffsetValue] = useState(0)
  const [company, setCompany] = useState("Kognitiv Corporation")

  const itemClick = (id, e) => {
    switch (id) {
      case 1:
        menuContentRef.current.classList.remove("-translate-y-[500px]")
        menuContentRef.current.classList.remove("-translate-y-[1000px]")
        menuContentRef.current.classList.remove("-translate-y-[1500px]")
        menuContentRef.current.classList.add("-translate-y-[0px]")

        scrollRef.current.classList.remove("translate-y-[84px]")
        scrollRef.current.classList.remove("translate-y-[168px]")
        scrollRef.current.classList.remove("translate-y-[252px]")
        scrollRef.current.classList.add("translate-y-[0px]")

        setCompany("Kognitiv Corporation")

        verticalScrollRef.current.classList.remove("translate-x-[200px]")
        verticalScrollRef.current.classList.remove("translate-x-[400px]")
        verticalScrollRef.current.classList.remove("translate-x-[600px]")
        verticalScrollRef.current.classList.add("translate-x-[0px]")

        break
      case 2:
        menuContentRef.current.classList.remove("-translate-y-[0px]")
        menuContentRef.current.classList.remove("-translate-y-[1500px]")
        menuContentRef.current.classList.remove("-translate-y-[1000px]")
        menuContentRef.current.classList.add("-translate-y-[500px]")

        scrollRef.current.classList.remove("translate-y-[0px]")
        scrollRef.current.classList.remove("translate-y-[168px]")
        scrollRef.current.classList.remove("translate-y-[252px]")
        scrollRef.current.classList.add("translate-y-[84px]")

        setCompany("Zone24x7")

        verticalScrollRef.current.classList.remove("translate-x-[0px]")
        verticalScrollRef.current.classList.remove("translate-x-[400px]")
        verticalScrollRef.current.classList.remove("translate-x-[600px]")
        verticalScrollRef.current.classList.add("translate-x-[200px]")

        break
      case 3:
        menuContentRef.current.classList.remove("-translate-y-[0px]")
        menuContentRef.current.classList.remove("-translate-y-[500px]")
        menuContentRef.current.classList.remove("-translate-y-[1500px]")
        menuContentRef.current.classList.add("-translate-y-[1000px]")

        scrollRef.current.classList.remove("translate-y-[0px]")
        scrollRef.current.classList.remove("translate-y-[84px]")
        scrollRef.current.classList.remove("translate-y-[252px]")
        scrollRef.current.classList.add("translate-y-[168px]")

        setCompany("Digital Micro Services")

        verticalScrollRef.current.classList.remove("translate-x-[0px]")
        verticalScrollRef.current.classList.remove("translate-x-[200px]")
        verticalScrollRef.current.classList.remove("translate-x-[600px]")
        verticalScrollRef.current.classList.add("translate-x-[400px]")

        break
      case 4:
        menuContentRef.current.classList.remove("-translate-y-[0px]")
        menuContentRef.current.classList.remove("-translate-y-[500px]")
        menuContentRef.current.classList.remove("-translate-y-[1000px]")
        menuContentRef.current.classList.add("-translate-y-[1500px]")

        scrollRef.current.classList.remove("translate-y-[0px]")
        scrollRef.current.classList.remove("translate-y-[84px]")
        scrollRef.current.classList.remove("translate-y-[168px]")
        scrollRef.current.classList.add("translate-y-[252px]")

        setCompany("Savantis Solutions")

        verticalScrollRef.current.classList.remove("translate-x-[0px]")
        verticalScrollRef.current.classList.remove("translate-x-[200px]")
        verticalScrollRef.current.classList.remove("translate-x-[400px]")
        verticalScrollRef.current.classList.add("translate-x-[600px]")

        break
      case 5:
        menuContentRef.current.classList.remove("-translate-y-[0px]")
        menuContentRef.current.classList.remove("-translate-y-[500px]")
        menuContentRef.current.classList.remove("-translate-y-[1000px]")
        menuContentRef.current.classList.remove("-translate-y-[1500px]")
        break
    }
  }

  useEffect(() => {}, [offsetValue])

  return (
    <div id="experiences" className="w-full py-20 sm:py-0 sm:pt-20">
      <div className="container max-w-4xl flex flex-col items-center justify-center">
        <div className="flex flex-col gap-8 text-center">
          <div className="text-sm text-ternary-text font-medium tracking-widest uppercase">
            experience
          </div>
          <div className=" text-3xl sm:text-4xl font-bold pb-20  ">
            Where I've worked
          </div>
        </div>
        <div
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="100"
          data-sal-easing="ease"
          className="relative flex flex-col md:flex-row w-full h-[500px] overflow-hidden"
        >
          <div className="w-full md:h-[315px] md:w-1 bg-[#f3f7fd]">
            <div
              ref={scrollRef}
              className="relative hidden md:block w-full h-[64px] transition-transform	ease-in-out duration-300 bg-green-900"
            >
              <div className="absolute hidden md:block  w-[200px] h-full bg-[#f3f7fd]">
                <div className="w-1 bg-[blue] h-full"></div>
              </div>
            </div>
          </div>
          <div className="hide-scroll-bar bg-white py-2 md:py-0 md:bg-transparent absolute md:relative  flex  gap-0 md:gap-5  md:flex-col w-full md:w-[200px] z-10 overflow-auto">
            <div className="absolute md:hidden top-[40px] h-1 z-50 w-[800px] md:w-1 bg-[#f3f7fd]">
              <div
                ref={verticalScrollRef}
                className="relative w-[200px] h-full transition-transform	ease-in-out duration-300 bg-[blue]
                "
              >
                <div className="absolute bottom-1 h-[40px] w-full py-2 flex justify-center items-center bg-[#f3f7fd]">
                  {company}
                </div>
              </div>
            </div>

            <div
              onClick={e => itemClick(1, e)}
              className="w-[200px] shrink-0  text-center md:text-left py-1 px-2 md:py-5 cursor-pointer"
            >
              Kognitiv Corporation
            </div>
            <div
              onClick={e => itemClick(2, e)}
              className="w-[200px] shrink-0 text-center md:text-left  py-1  px-2 md:py-5 cursor-pointer"
            >
              Zone24x7
            </div>
            <div
              onClick={e => itemClick(3, e)}
              className="w-[200px] shrink-0 text-center md:text-left  py-1  px-2 md:py-5 cursor-pointer"
            >
              Digital Micro Services{" "}
            </div>
            <div
              onClick={e => itemClick(4, e)}
              className="w-[200px] shrink-0 text-center md:text-left  py-1  px-2 md:py-5 cursor-pointer"
            >
              Savantis Solutions
            </div>
            {/* <div onClick={() => itemClick(5)}></div> */}
          </div>
          <div
            ref={menuContentRef}
            className="flex-1 relative transition-transform	ease-in-out duration-300 "
          >
            <div className="absolute inset-0">
              <div className=" h-full  pt-20 pl-5 md:pt-5">
                <div className="">
                  <div className="text-xl font-semibold mb-3">
                    Front-End engineer{" "}
                    <span className="text-[#0000ff] font-medium">
                      @Kognitiv Corporation
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm">
                    October 2021 - Present
                  </div>
                  <ul className="mt-5 pl-5 list-disc text-xs sm:text-sm">
                    <li className="mb-3">
                      Responsible for developing the entire admin dashboard for
                      the report generation for multiple tenants. The dashboard
                      was designed to work seamlessly with Tableau, a
                      third-party service, to generate reports in real-time.
                    </li>
                    <li className="mb-3">
                      Developed a significant portion of the admin dashboard for
                      the affiliate management project. The dashboard enabled
                      clients to configure one or more branded instances of the
                      same website for a specific audience, loyalty tier, hotel,
                      or sub-brand within a single commerce engine.
                    </li>
                    <li className="mb-3">
                      Developed a coupon generator web application for a hotel
                      management system, which allowed clients to easily
                      generate, validate, and distribute coupons to their
                      clients.
                    </li>
                    <div className="font-medium">
                      <span className="text-ternary-text">Skills: </span> NgRx ·
                      Redux · Angular 12 · Angular 14 · React.js · MUI ·
                      TypeScript
                    </div>
                  </ul>
                </div>
              </div>
              <div className=" h-full  pt-20 pl-5 md:pt-5">
                <div className="">
                  <div className="text-xl font-semibold mb-3">
                    Full stack engineer{" "}
                    <span className="text-[#0000ff] font-medium">
                      @Zone24x7
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm">
                    March - September 2021
                  </div>
                  <ul className="mt-5 pl-5 list-disc text-xs sm:text-sm">
                    <li className="mb-3">
                      Developed custom Enterprise Resource Planning (ERP)
                      solutions using H5 SDK ( Infor M3 ) for an
                      Industry-leading apparel manufacturer in Sri Lanka.
                    </li>
                    <div className="font-medium">
                      <span className="text-ternary-text">Skills:</span> Angular
                      10 · NestJS 8 · Apollo GraphQL · Postgraphile · TypeORM ·
                      KendoUI for Angular · Jest
                    </div>
                  </ul>
                </div>
              </div>
              <div className=" h-full  pt-20 pl-5 md:pt-5">
                <div className="">
                  <div className="text-xl font-semibold mb-3">
                    Associate Software Engineer{" "}
                    <span className="text-[#0000ff] font-medium">
                      @Digital Micro Services
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm">
                    May 2020 - February 2021{" "}
                  </div>
                  <div className="text-xs sm:text-sm">
                    August 2019 - April 2020{" "}
                  </div>
                  <ul className="mt-5 pl-5 list-disc text-xs sm:text-sm">
                    <li className="mb-3">
                      Responsible for developing the main UI components and
                      relevant APIs of a log management web application that is
                      used for log analysis. Carried out UI and API testing.
                    </li>
                    <li className="mb-3">
                      Added new UI features and made relevant backend API
                      updates to a diagnostic process automation tool that is
                      used for performing initial triage before dispatching
                      customer tickets of an Australian telecommunication
                      company. Conducted extensive UI and API testing.
                    </li>
                    <div className="font-medium">
                      <span className="text-ternary-text">Skills:</span> CSS3 ·
                      Java EE · JAX-RS · Hibernate · Katalon Studio · T4J ·
                      Angular 10 · HTML5 · Angular Material · TypeScript
                    </div>
                  </ul>
                </div>
              </div>
              <div className=" md:h-full  pt-20 pl-5 py-5 md:py-5 overflow-auto">
                <div className="overflow-auto">
                  <div className="text-xl font-semibold mb-3">
                    Engineering Intern{" "}
                    <span className="text-[#0000ff] font-medium">
                      @Savantis Solutions LLC{" "}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm">February - July 2019</div>
                  <ul className="mt-5 pl-5 list-disc text-xs sm:text-sm">
                    <li className="mb-3">
                      Added new features and made UI improvements to the cinema
                      booking management application (USA). Identified bugs and
                      submitted fixes.
                    </li>
                    <li className="mb-3">
                      Quality assurance of an inventory management mobile
                      application of a saloon network (USA). Carried out code
                      reviews and User Acceptance Testing. Uncovered a major
                      production bug.
                    </li>
                    <div className="font-medium">
                      <span className="text-ternary-text">Skills:</span> Android
                      Studio · Android SDK · Ionic Framework · JavaScript · Java
                    </div>
                  </ul>
                </div>
              </div>
              {/* <div className="bg-indigo-400  h-full pt-10 md:pt-0">
                menu item 5
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiences
