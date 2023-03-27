import React from "react"
import EmailContactForm from "./EmailContactForm"
import SocialMedia from "./SocialMedia"

export default function () {
  return (
    // <div className="relative bg-[blue] h-[500px] w-full flex justify-center items-center">
    //   <div className="container max-w-4xl px-12 absolute -top-48">
    //     <div className="bg-red-400 p-8 sm:p-12">
    //       <EmailContactForm></EmailContactForm>
    //     </div>
    //   </div>
    //   <div>
    //     <div>Logo</div>
    //     <div>Living, Learning and leveling up</div>
    //     <br />
    //     <div>one day at a time</div>
    //     <div>facebook, linkedin, instgram, github</div>
    //   </div>
    // </div>

    <section id="footer" class="min-h-screen bg-[blue]">
      <div class="container py-20 mx-auto">
        <div>
          {/* <div class="text-white lg:w-1/2 lg:mx-6">
            <h1 class="text-3xl font-semibold capitalize lg:text-5xl">
              Get a quote
            </h1>
            <p class="max-w-xl mt-6">
              Ask me anything and I would love to hear from you.
            </p>
            <div>
              <SocialMedia></SocialMedia>
            </div>
          </div> */}
          <div className="flex flex-col gap-8 text-center">
            <div className="text-sm text-[#fcca3f] font-medium tracking-widest uppercase">
              Contact
            </div>
            <div className=" text-3xl text-white sm:text-4xl font-bold pb-20  ">
            Let's Build Something Amazing!
            </div>
          </div>
          <div data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="100"
            data-sal-easing="ease">
            <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl lg:max-w-3xl">
              <h1 class="text-2xl font-medium">Contact Me</h1>
              <EmailContactForm></EmailContactForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
