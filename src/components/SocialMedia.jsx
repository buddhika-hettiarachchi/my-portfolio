import React from "react"
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"
import gmail from "../images/gmail.png"

export default function SocialMedia() {
  return (
    <div className="hidden xl:block fixed z-50 top-64 right-3 bg-[#0000ff] px-3 py-3 rounded">
      <ul className="flex flex-col gap-3">
        <li className="w-6 h-6 cursor-pointer">
          <a href="https://www.linkedin.com/in/hpbuddhika" target="_blank">
            <img src={linkedin} alt="Linkedin" />
          </a>
        </li>
        <li className="w-6 h-6 cursor-pointer">
          <a href="https://github.com/Buddhika-Hettiarachchi" target="_blank">
            <img src={github} alt="github" />
          </a>
        </li>
        <li className="w-6 h-6 cursor-pointer">
          <a href="mailto:hpradeepbuddhika@gmail.com" target="_blank">
            <img src={gmail} alt="gmail" />
          </a>
        </li>
      </ul>
    </div>
  )
}

