import React, { useState, useEffect, useRef } from "react"

const Experiences = () => {
  const menuContentRef = useRef(null)
  const scrollRef = useRef(null)
  const verticalScrollRef = useRef(null)

  const [offsetValue, setOffsetValue] = useState(0)
  const [company, setCompany] = useState("Kognitiv Corporation")

  const itemClick = (id, e) => {
    switch (id) {
      case 1:
        menuContentRef.current.classList.remove("-translate-y-[316px]")
        menuContentRef.current.classList.remove("-translate-y-[632px]")
        menuContentRef.current.classList.remove("-translate-y-[948px]")
        menuContentRef.current.classList.remove("-translate-y-[1400px]")
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
        menuContentRef.current.classList.remove("-translate-y-[948px]")
        menuContentRef.current.classList.remove("-translate-y-[632px]")
        menuContentRef.current.classList.remove("-translate-y-[1400px]")
        menuContentRef.current.classList.add("-translate-y-[316px]")

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
        menuContentRef.current.classList.remove("-translate-y-[316px]")
        menuContentRef.current.classList.remove("-translate-y-[948px]")
        menuContentRef.current.classList.remove("-translate-y-[1400px]")
        menuContentRef.current.classList.add("-translate-y-[632px]")

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
        menuContentRef.current.classList.remove("-translate-y-[316px]")
        menuContentRef.current.classList.remove("-translate-y-[632px]")
        menuContentRef.current.classList.remove("-translate-y-[1400px]")
        menuContentRef.current.classList.add("-translate-y-[948px]")

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
        menuContentRef.current.classList.remove("-translate-y-[316px]")
        menuContentRef.current.classList.remove("-translate-y-[632px]")
        menuContentRef.current.classList.remove("-translate-y-[948px]")
        menuContentRef.current.classList.add("-translate-y-[1400px]")
        break
    }
  }

  useEffect(() => {}, [offsetValue])

  return (
    <div className="w-full px-5 pb-20">
      <div className="container max-w-2xl py-5  flex flex-col items-center justify-center">
        <div className="text-sm uppercase opacity-80">experience</div>
        <div className=" mt-5 text-3xl sm:text-4xl font-bold pb-20 ">
          Where I've worked
        </div>
        <div className="relative  flex flex-col md:flex-row w-full h-[316px] md:h-full  overflow-hidden">
          <div className="w-full md:w-1 bg-[#f3f7fd]">
            <div
              ref={scrollRef}
              className="relative hidden md:block w-full h-[64px] transition-transform	ease-in-out duration-300 bg-green-900"
            >
              <div className="absolute hidden md:block  w-[200px] h-full bg-[#f3f7fd]">
                <div className="w-1 bg-[blue] h-full"></div>
              </div>
            </div>
          </div>
          <div className="bg-white py-2 md:py-0 md:bg-transparent absolute md:relative  flex  gap-0 md:gap-5 justify-between md:flex-col w-full md:w-[200px] z-10 overflow-auto">
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
              className="w-[200px] shrink-0  text-center md:text-left py-1 px-2 md:py-5 "
            >
              Kognitiv Corporation
            </div>
            <div
              onClick={e => itemClick(2, e)}
              className="w-[200px] shrink-0 text-center md:text-left  py-1  px-2 md:py-5"
            >
              Zone24x7
            </div>
            <div
              onClick={e => itemClick(3, e)}
              className="w-[200px] shrink-0 text-center md:text-left  py-1  px-2 md:py-5"
            >
              Digital Micro Services{" "}
            </div>
            <div
              onClick={e => itemClick(4, e)}
              className="w-[200px] shrink-0 text-center md:text-left  py-1  px-2 md:py-5"
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
                  <div>
                    Engineer <span>@Kognitiv Coporation </span>
                  </div>
                  <div>May 2018 - Present</div>
                  <ul className="mt-5 pl-5 list-disc text-sm">
                    <li className="mb-3">
                      Write modern, performant, maintainable code for a diverse
                      array of client and internal projects
                    </li>
                    <li>
                      Write modern, performant, maintainable code for a diverse
                      array of client and internal projects
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" h-full  pt-20 pl-5 md:pt-5">
                <div className="">
                  <div>
                    Engineer <span>@Zone24x7</span>
                  </div>
                  <div>May 2018 - Present</div>
                  <ul className="mt-5 pl-5 list-disc text-sm">
                    <li className="mb-3">
                      Write modern, performant, maintainable code for a diverse
                      array of client and internal projects
                    </li>
                    <li>
                      Write modern, performant, maintainable code for a diverse
                      array of client and internal projects
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" h-full  pt-20 pl-5 md:pt-5">
                <div className="">
                  <div>
                    Engineer <span>@Zone24x7</span>
                  </div>
                  <div>May 2018 - Present</div>
                  <ul className="mt-5 pl-5 list-disc text-sm">
                    <li className="mb-3">
                      Write modern, performant, maintainable code for a diverse
                      array of client and internal projects
                    </li>
                    <li className="mb-3">
                      Write modern, performant, maintainable code for a diverse
                      array of client and internal projects
                    </li>
                    <li>
                      Write modern, performant, maintainable code for a diverse
                      array of client and internal projects
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" md:h-full  pt-20 pl-5 py-5 md:py-5 overflow-auto">
                <div className="overflow-auto">
                  <div>
                    Engineer <span>@Zone24x7</span>
                  </div>
                  <div>May 2018 - Present</div>
                  <ul className="mt-5 pl-5 list-disc text-sm">
                    <li className="mb-3">
                      Write modern, performant, maintainable code for a diverse
                      array of client and internal projects
                    </li>
                    <li className="mb-3">
                      Write modern, performant, maintainable code for a diverse
                      array of client and internal projects
                    </li>
                    <li className="mb-3">
                      Write modern, performant, maintainable code for a diverse
                      array of client and internal projects
                    </li>
                    <li>
                      Write modern, performant, maintainable code for a diverse
                      array of client and internal projects
                    </li>
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
