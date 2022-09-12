import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

const EmailContactForm = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault() // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_dknc8jp",
        "template_u58oc7e",
        form.current,
        "NDtF6ALgwo0O85Ufv"
      )
      .then(
        result => {
          alert('form submitted==> ', result)
          // show the user a success message
        },
        error => {
          // show the user an error
        }
      )
  }

  return (
    //  <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
    //    <label>Name</label>
    //    <input type="text" name="from_name" />
    //    <label>Email</label>
    //    <input type="email" name="reply_to" />
    //    <label>Message</label>
    //    <textarea className='resize-none rounded-md' name="message" rows={5} />
    //    <input type="submit" value="Send" />
    //  </form>
    <form class="mt-6" ref={form} onSubmit={sendEmail}>
      <div class="flex-1">
        <label class="block mb-2 text-sm">Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
          name="from_name"
          class="block w-full px-5 py-3 mt-2   border border-gray-200 rounded-md  bg-[#f3f7fd]  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>

      <div class="flex-1 mt-6">
        <label class="block mb-2 text-sm">Email address</label>
        <input
          type="email"
          placeholder="johndoe@example.com"
          name="reply_to"
          class="block w-full px-5 py-3 mt-2 border border-gray-200 rounded-md bg-[#f3f7fd]   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>

      <div class="w-full mt-6">
        <label class="block mb-2 text-sm ">Message</label>
        <textarea
          class="block w-full h-32 px-5 py-3 mt-2 placeholder-gray-400  border border-gray-200 rounded-md md:h-48 bg-[#f3f7fd] focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          placeholder="Message"
          name="message"
        ></textarea>
      </div>

      <button type="submit" value="Send" class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform bg-[#fcca3f] rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
        get in touch
      </button>
    </form>
  )
}

export default EmailContactForm
