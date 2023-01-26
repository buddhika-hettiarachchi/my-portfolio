import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import hashTag from "../images/icons/hashtag.svg"
import link from "../images/icons/link.svg"
import github from "../images/icons/github.svg"

const MyWork = () => {
  return (
    <div id="my-work" className="bg-secondary text-primary-text pb-16">
      <div className="container py-24">
        <div className="flex flex-col gap-8 text-center">
          <div className="text-sm text-ternary-text font-medium tracking-widest uppercase">
            Projects
          </div>
          <div className=" text-3xl sm:text-4xl font-bold pb-20 ">
            Some Things I’ve Built
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-8 md:gap-24 lg:gap-16 lg:flex-row pb-10">
          <div className="w-full h-[900px] md:h-[600px] max-w-lg rounded flex-col ">
            <div className="relative bg-gradient-to-b from-[#b8cff1] to-[#dfe9f9] rounded-t h-4/6">
              <div className="absolute z-10 inset-0 top-16 left-16 rounded-t-lg overflow-hidden">
                <StaticImage
                  quality="100"
                  style={{ height: "100%" }}
                  objectFit="cover"
                  objectPosition="top left"
                  src="../images/mopicClub.webp"
                  alt="mopicClub"
                  placeholder="blurred"
                />
              </div>
            </div>
            <div className="h-2/6 flex flex-col gap-3">
              <div className="flex gap-3 sm:gap-8 mt-5 mb-3">
                <div className="text-xs lg:text-sm opacity-60">
                  <img className="inline  w-3 h-3 mr-1" src={hashTag} alt="#" />
                  Angular
                </div>
                <div className="text-xs lg:text-sm opacity-60">
                  <img
                    className="inline opacity-80 w-3 h-3 mr-1"
                    src={hashTag}
                    alt="#"
                  />
                  The Movie DB API
                </div>
                <div className="text-xs lg:text-sm opacity-60">
                  <img
                    className="inline opacity-80 w-3 h-3 mr-1"
                    src={hashTag}
                    alt="#"
                  />
                  Firebase
                </div>
              </div>
              <div className="text-xl font-bold">Moving Picture Club</div>
              <div className="text-secondary-text text-sm text-justify">
                This web application allows users to explore and discover
                popular and trending movies through the use of The Movie DB API.
                Users can search for specific films, watch trailers, and read
                reviews to make informed decisions on what to watch. The
                application provides a comprehensive and user-friendly way to
                navigate the vast collection of movies available today.
                {/* a web application that utilizes The Movie DB API to assist users
                in exploring and discovering trending movies. Users can use it
                to find specific movies, watch trailers, and read reviews to
                inform their choices. The application is simple to use and
                offers a thorough way to browse the enormous movie library. It
                provides the best options while saving time. */}
              </div>
              <div className="flex gap-4">
                <a href="https://moviedb-90211.web.app/" target="_blank">
                  <img className="w-5 h-5" src={link} alt="web-link" />
                </a>
                <a href="https://github.com/Buddhika-Hettiarachchi/movieDB" target="_blank">
                  <img className="w-5 h-5" src={github} alt="web-link" />
                </a>
              </div>
            </div>
            <div></div>
          </div>
          <div className="w-full h-[800px] md:h-[600px] max-w-lg rounded flex-col">
            <div className=" w-full h-full lg:mt-80">
              <div className="relative bg-gradient-to-b from-[#97dfff] to-[#c4edff] rounded-t h-4/6">
                <div className="absolute z-10 inset-0 top-16 left-16 rounded-t-lg overflow-hidden ">
                  <StaticImage
                    quality="100"
                    style={{ height: "100%" }}
                    objectFit="cover"
                    objectPosition="top left"
                    src="../images/chefscookeryclub.webp"
                    alt="chefscookeryclub"
                    placeholder="blurred"
                  />
                </div>
              </div>
              <div className="h-2/6 flex flex-col gap-3">
                <div className="flex gap-3 sm:gap-8 mt-5 mb-3">
                  <div className="text-xs lg:text-sm opacity-60">
                    <img
                      className="inline  w-3 h-3 mr-1"
                      src={hashTag}
                      alt="#"
                    />
                    React
                  </div>
                  <div className="text-xs lg:text-sm opacity-60">
                    <img
                      className="inline opacity-80 w-3 h-3 mr-1"
                      src={hashTag}
                      alt="#"
                    />
                    Gatsby
                  </div>
                  <div className="text-xs lg:text-sm opacity-60">
                    <img
                      className="inline opacity-80 w-3 h-3 mr-1"
                      src={hashTag}
                      alt="#"
                    />
                    Flotiq( CMS )
                  </div>
                  <div className="text-xs lg:text-sm opacity-60">
                    <img
                      className="inline opacity-80 w-3 h-3 mr-1"
                      src={hashTag}
                      alt="#"
                    />
                    Firebase
                  </div>
                </div>
                <div className="text-xl font-bold">Chefs' Cookery Club</div>
                <div className="text-secondary-text text-sm text-justify">
                  {/* Chef's Cookery Club is a web site that helps users explore
                  various cuisines from around the world. It offers step-by-step
                  preparation guide, preparation time and serving size for each
                  dish. It's a valuable resource for both beginner cooks and
                  experienced chefs to discover new recipes and improve their
                  culinary skills. It brings the world of delicacies to your
                  kitchen. */}
                  Chef's Cookery Club is a website that helps users explore
                  various cuisines from around the world. It offers a
                  step-by-step preparation guide, preparation time, and serving
                  size for each dish. Additionally, it provides an ability for
                  the website owner to upload new recipes using a user-friendly
                  headless CMS dashboard (Flotiq), which makes it easy for the
                  owner to manage and update the content on the website.
                </div>
                <div className="flex gap-4 relative z-50">
                  <a
                    href="https://gatsby-chefs-recipes.web.app/"
                    target="_blank"
                  >
                    <img className="w-5 h-5" src={link} alt="web-link" />
                  </a>
                  <a href="https://github.com/Buddhika-Hettiarachchi/chefs-recipes" target="_blank">
                    <img className="w-5 h-5" src={github} alt="web-link" />
                  </a>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-40 sm:gap-28 lg:gap-16 lg:flex-row mt-16 ">
          <div className="w-full h-[700px] md:h-[600px] max-w-lg rounded flex-col">
            <div className="relative bg-gradient-to-b from-[#ffbd5f] to-[#ffd395] rounded-t h-4/6">
              <div className="absolute z-10 inset-0 top-16 left-16 rounded-t-lg overflow-hidden">
                <StaticImage
                  quality="100"
                  style={{ height: "100%" }}
                  objectFit="cover"
                  objectPosition="top left"
                  src="../images/bidspell.webp"
                  alt="bidspell"
                  placeholder="blurred"
                />
              </div>
            </div>
            <div className="h-2/6 flex flex-col gap-3">
              <div className="flex gap-3 sm:gap-8 mt-5 mb-3">
                <div className="text-xs lg:text-sm opacity-60">
                  <img className="inline  w-3 h-3 mr-1" src={hashTag} alt="#" />
                  React
                </div>
                <div className="text-xs lg:text-sm opacity-60">
                  <img
                    className="inline opacity-80 w-3 h-3 mr-1"
                    src={hashTag}
                    alt="#"
                  />
                  Gatsby
                </div>
                <div className="text-xs lg:text-sm opacity-60">
                  <img
                    className="inline opacity-80 w-3 h-3 mr-1"
                    src={hashTag}
                    alt="#"
                  />
                  HubSpot
                </div>
                <div className="text-xs lg:text-sm opacity-60">
                  <img
                    className="inline opacity-80 w-3 h-3 mr-1"
                    src={hashTag}
                    alt="#"
                  />
                  chrisp( Live Chat )
                </div>
              </div>
              <div className="text-xl font-bold">Bidspell</div>
              <div className="text-secondary-text text-sm text-justify">
                With Bidspell, you'll have access to a comprehensive ad
                management and ad operations solution. The website provides a
                detailed overview of the services offered by the company,
                including ad management, ad operations, and more. Users can
                easily submit a form on the website to request more information
                or to start working with the company. Additionally, the website
                offers live chat support so users can quickly and easily get
                answers to any questions they may have.
              </div>
              <div className="flex gap-4">
                <a href="https://bidspell.com/" target="_blank">
                  <img className="w-5 h-5" src={link} alt="web-link" />
                </a>
                <a href="https://gitlab.com/bidspell/corporate-website" target="_blank">
                  <img className="w-5 h-5" src={github} alt="web-link" />
                </a>
              </div>
            </div>
            <div></div>
          </div>
          <div className="hidden lg:block w-full h-[500px] max-w-lg"></div>
        </div>
      </div>
    </div>
  )
}

export default MyWork
