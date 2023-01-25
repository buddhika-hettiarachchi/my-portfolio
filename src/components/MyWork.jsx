import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

import hashTag from "../images/icons/hashtag.svg"
import link from "../images/icons/link.svg"
import github from "../images/icons/github.svg"

const MyWork = () => {
    return (
        <div id="my-work" className='bg-secondary text-primary-text'>
            <div className='container py-24'>
                <div className='flex flex-col gap-8 text-center'>
                    <div className='text-sm text-ternary-text font-medium tracking-widest uppercase'>Projects</div>
                    <div className=' text-3xl sm:text-4xl font-bold pb-20 '>Some Things I’ve Built</div>
                </div>
                <div className='flex justify-center items-center flex-col gap-10 lg:gap-16 lg:flex-row'>
                    <div className='w-full h-[600px] max-w-lg rounded flex-col '>
                        <div className='relative bg-gradient-to-b from-[#b8cff1] to-[#dfe9f9] rounded-t h-4/6'>
                            <div className='absolute z-10 inset-0 top-16 left-16 rounded-t-lg overflow-hidden'>
                                <StaticImage quality='100' style={{ height: "100%" }} objectFit='cover' objectPosition='top left' src="../images/mopicClub.webp" alt="mopicClub" placeholder="blurred" />
                            </div>
                        </div>
                        <div className='h-2/6 flex flex-col gap-3'>
                            <div className='flex gap-3 sm:gap-8 mt-5 mb-3'>
                                <div className='text-xs lg:text-sm opacity-60'>
                                    <img className='inline  w-3 h-3 mr-1' src={hashTag} alt="#" />
                                    Angular
                                </div>
                                <div className='text-xs lg:text-sm opacity-60'>
                                    <img className='inline opacity-80 w-3 h-3 mr-1' src={hashTag} alt="#" />
                                    The Movie DB API
                                </div>
                                <div className='text-xs lg:text-sm opacity-60'>
                                    <img className='inline opacity-80 w-3 h-3 mr-1' src={hashTag} alt="#" />
                                    Firebase
                                </div>
                            </div>
                            <div className='text-xl font-bold'>
                                Moving Picture Club
                            </div>
                            <div className='text-secondary-text'>
                                Check out how I helped develop the front-end of a website that analyzes marketing and sales data in BigQuery
                            </div>
                            <div className='flex gap-4'>
                                <a href="https://moviedb-90211.web.app/" target="_blank">
                                    <img className='w-5 h-5' src={link} alt="web-link" />
                                </a>
                                <a href="https://moviedb-90211.web.app/" target="_blank">
                                    <img className='w-5 h-5' src={github} alt="web-link" />
                                </a>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className='w-full h-[600px] max-w-lg rounded flex-col'>
                        <div className=' w-full h-full lg:mt-72'>
                            <div className='relative bg-gradient-to-b from-[#97dfff] to-[#c4edff] rounded-t h-4/6'>
                                <div className='absolute z-10 inset-0 top-16 left-16 rounded-t-lg overflow-hidden '>
                                    <StaticImage quality='100' style={{ height: "100%" }} objectFit='cover' objectPosition='top left' src="../images/chefscookeryclub.webp" alt="chefscookeryclub" placeholder="blurred" />
                                </div>
                            </div>
                            <div className='h-2/6 flex flex-col gap-3'>
                                <div className='flex gap-3 sm:gap-8 mt-5 mb-3'>
                                    <div className='text-xs lg:text-sm opacity-60'>
                                        <img className='inline  w-3 h-3 mr-1' src={hashTag} alt="#" />
                                        React
                                    </div>
                                    <div className='text-xs lg:text-sm opacity-60'>
                                        <img className='inline opacity-80 w-3 h-3 mr-1' src={hashTag} alt="#" />
                                        Gatsby
                                    </div>
                                    <div className='text-xs lg:text-sm opacity-60'>
                                        <img className='inline opacity-80 w-3 h-3 mr-1' src={hashTag} alt="#" />
                                        Flotiq( CMS )
                                    </div>
                                    <div className='text-xs lg:text-sm opacity-60'>
                                        <img className='inline opacity-80 w-3 h-3 mr-1' src={hashTag} alt="#" />
                                        Firebase
                                    </div>
                                </div>
                                <div className='text-xl font-bold'>
                                    Chefs' Cookery Club
                                </div>
                                <div>
                                    Check out how I helped develop the front-end of a website that analyzes marketing and sales data in BigQuery
                                </div>
                                <div className='flex gap-4 relative z-50'>
                                    <a href="https://gatsby-chefs-recipes.web.app/" target="_blank">
                                        <img className='w-5 h-5' src={link} alt="web-link" />
                                    </a>
                                    <a href="#" target="_blank">
                                        <img className='w-5 h-5' src={github} alt="web-link" />
                                    </a>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center flex-col gap-10 lg:gap-16 lg:flex-row mt-16'>
                    <div className='w-full h-[600px] max-w-lg rounded flex-col'>
                        <div className='relative bg-gradient-to-b from-[#ffbd5f] to-[#ffd395] rounded-t h-4/6'>
                            <div className='absolute z-10 inset-0 top-16 left-16 rounded-t-lg overflow-hidden'>
                                <StaticImage quality='100' style={{ height: "100%" }} objectFit='cover' objectPosition='top left' src="../images/bidspell.webp" alt="bidspell" placeholder="blurred" />
                            </div>
                        </div>
                        <div className='h-2/6 flex flex-col gap-3'>
                            <div className='flex gap-3 sm:gap-8 mt-5 mb-3'>
                                <div className='text-xs lg:text-sm opacity-60'>
                                    <img className='inline  w-3 h-3 mr-1' src={hashTag} alt="#" />
                                    React
                                </div>
                                <div className='text-xs lg:text-sm opacity-60'>
                                    <img className='inline opacity-80 w-3 h-3 mr-1' src={hashTag} alt="#" />
                                    Gatsby
                                </div>
                                <div className='text-xs lg:text-sm opacity-60'>
                                    <img className='inline opacity-80 w-3 h-3 mr-1' src={hashTag} alt="#" />
                                    HubSpot
                                </div>
                                <div className='text-xs lg:text-sm opacity-60'>
                                    <img className='inline opacity-80 w-3 h-3 mr-1' src={hashTag} alt="#" />
                                    chrisp( Live Chat )
                                </div>
                            </div>
                            <div className='text-xl font-bold'>
                                Bidspell
                            </div>
                            <div>
                                Check out how I helped develop the front-end of a website that analyzes marketing and sales data in BigQuery
                            </div>
                            <div className='flex gap-4'>
                                <a href="https://bidspell.com/" target="_blank">
                                    <img className='w-5 h-5' src={link} alt="web-link" />
                                </a>
                                <a href="https://moviedb-90211.web.app/" target="_blank">
                                    <img className='w-5 h-5' src={github} alt="web-link" />
                                </a>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className='hidden lg:block w-full h-[500px] max-w-lg'></div>
                </div>
            </div>
        </div>
    );
}

export default MyWork;
