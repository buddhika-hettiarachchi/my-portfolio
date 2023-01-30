import React, { useRef, useState, useEffect, createRef } from "react"
import { Formik, Form, Field } from "formik"
import emailjs from "@emailjs/browser"
import lottie from "lottie-web"

import loading from "../images/animations/loading.json"
import success from "../images/animations/success.json"
import error from "../images/animations/error.json"

const EmailContactForm = () => {
  const form = useRef()
  const [isLoading, setIsLoading] = useState()

  let animationContainer = createRef()
  let anim = null

  useEffect(() => {
    anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData:
        isLoading == "SUCCESS"
          ? success
          : isLoading == "ERROR"
          ? error
          : loading,
    })
    setTimeout(() => {
      if (isLoading == "SUCCESS" || isLoading == "ERROR") {
        setIsLoading(null)
      }
    }, 2000)
    return () => anim.destroy() // optional clean up for unmounting
  }, [isLoading])

  const sendEmail = (values, actions) => {
    setIsLoading("LOADING")
    emailjs
      .sendForm(
        "service_dknc8jp",
        "template_u58oc7e",
        form.current,
        "NDtF6ALgwo0O85Ufv"
      )
      .then(
        result => {
          actions.resetForm()
          setIsLoading("SUCCESS")
        },
        error => {
          setIsLoading("ERROR")
        }
      )
  }

  return (
    <Formik
      initialValues={{
        from_name: "",
        reply_to: "",
        message: "",
      }}
      validate={values => {
        const errors = {}
        if (!values.reply_to) {
          errors.reply_to = "Required"
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.reply_to)
        ) {
          errors.reply_to = "Invalid email address"
        }

        if (!values.from_name) {
          errors.from_name = "Required"
        }
        if (!values.message) {
          errors.message = "Required"
        }
        return errors
      }}
      onSubmit={(values, actions) => {
        sendEmail(values, actions)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <div className="relative">
          {
            {
              LOADING: (
                <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-[1px]">
                  <div className="w-72 h-72" ref={animationContainer}></div>
                </div>
              ),
              SUCCESS: (
                <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-[1px]">
                  <div className="w-72 h-72" ref={animationContainer}></div>
                </div>
              ),
              ERROR: (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center backdrop-blur-[1px]">
                  <div className="w-96 h-96" ref={animationContainer}></div>
                  {/* <div className="text-base font-medium mt-[-50px] ">Something went wrong.Try again.</div> */}
                </div>
              ),
            }[isLoading]
          }
          <form class="mt-6 " onSubmit={handleSubmit} ref={form}>
            <div className="flex flex-col md:flex-row md:gap-5">
              <div class="flex-1">
                <label class="block mb-2 text-sm">Full Name</label>
                <input
                  placeholder="John Doe"
                  name="from_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.from_name}
                  class="block w-full px-5 py-3 mt-2   border border-gray-200 rounded-md  bg-[#f3f7fd]  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                <div className="text-sm text-red-500 pt-0.5">
                  {errors.from_name && touched.from_name && errors.from_name}
                </div>
              </div>

              <div class="flex-1">
                <label class="block mb-2 text-sm">Email address</label>
                <input
                  placeholder="johndoe@example.com"
                  name="reply_to"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.reply_to}
                  class="block w-full px-5 py-3 mt-2 border border-gray-200 rounded-md bg-[#f3f7fd]   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                <div className="text-sm text-red-500 pt-0.5">
                  {errors.reply_to && touched.reply_to && errors.reply_to}
                </div>
              </div>
            </div>

            <div class="w-full mt-6">
              <label class="block mb-2 text-sm ">Message</label>
              <textarea
                class="block w-full h-32 px-5 py-3 mt-2 placeholder-gray-400  border border-gray-200 rounded-md md:h-48 bg-[#f3f7fd] focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                placeholder="Message"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                as="textarea"
              ></textarea>
              <div className="text-sm text-red-500 pt-0.5">
                {errors.message && touched.message && errors.message}
              </div>
            </div>

            <button
              type="submit"
              class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform bg-[#fcca3f] rounded-md hover:bg-[#faa412] focus:outline-none focus:ring-2 focus:ring-[#fcca3f] focus:ring-opacity-50"
            >
              get in touch
            </button>
          </form>
        </div>
      )}
    </Formik>
  )
}

export default EmailContactForm
