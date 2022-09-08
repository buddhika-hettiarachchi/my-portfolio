import React from 'react';

import chefscookeryclub from '../images/chefscookeryclub.svg'
import mopicClub from '../images/mopicClub.svg'
import bidspell from '../images/bidspell.svg'


const MyWork = () => {
    return (
        <div className='bg-gradient-to-b from-[#f3f7fd]'>
            <div className='container py-24'>
                <div className='flex flex-col gap-8 text-center'>
                    <div className='text-sm uppercase opacity-80'>Expertise</div>
                    <div className=' text-3xl sm:text-4xl font-bold pb-20 '>The power of React. Put to work</div>
                </div>
                <div className='flex justify-center items-center flex-col gap-10 lg:gap-16 lg:flex-row'>
                    <div className='w-full h-[600px] max-w-xl rounded flex-col '>
                        <div className='relative bg-gradient-to-b from-[#b8cff1] to-[#dfe9f9] rounded-t h-4/6'>
                            <div className='absolute z-10 inset-0 top-16 left-16 rounded-lg'>
                                <img className='object-cover object-left-top h-full w-full' src={mopicClub} alt="chefscookeryclub" />
                            </div>
                        </div>
                        <div className='h-2/6 flex flex-col gap-3'>
                            <div className='flex gap-8 mt-5 text-sm'>
                                <div>
                                    <span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                                    </svg>
                                    </span>
                                    Angular
                                </div>
                                <div>
                                    <span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                                    </svg>
                                    </span>
                                    REST API
                                </div>
                            </div>
                            <div className='text-xl font-bold'>
                                Moving Picture Club
                            </div>
                            <div>
                                Check out how I helped develop the front-end of a website that analyzes marketing and sales data in BigQuery
                            </div>
                            <div className='text-[blue]'>
                                <a href="https://moviedb-90211.web.app/" target="_blank">View case study
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[blue] inline-block pl-2
                                 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                    <div className='w-[9.8rem] h-[0.1rem] bg-[blue]'></div>
                                </a>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className='w-full h-[600px] max-w-xl rounded flex-col'>
                        <div className=' w-full h-full lg:mt-72'>
                            <div className='relative bg-gradient-to-b from-[#97dfff] to-[#c4edff] rounded-t h-4/6'>
                                <div className='absolute z-10 inset-0 top-16 left-16 rounded-lg'>
                                    <img className='object-cover object-left-top h-full w-full' src={chefscookeryclub} alt="chefscookeryclub" />
                                </div>
                            </div>
                            <div className='h-2/6 flex flex-col gap-3'>
                                <div className='flex gap-8 mt-5'>
                                    <div>
                                        Angular
                                    </div>
                                    <div>
                                        Rest
                                    </div>
                                </div>
                                <div className='text-xl font-bold'>
                                    Query.Recipes
                                </div>
                                <div>
                                    Check out how I helped develop the front-end of a website that analyzes marketing and sales data in BigQuery
                                </div>
                                <div>
                                    <a href="#">View case study</a>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center flex-col gap-10 lg:gap-16 lg:flex-row mt-16'>
                    <div className='w-full h-[600px] max-w-xl rounded flex-col'>
                        <div className='relative bg-gradient-to-b from-[#ffbd5f] to-[#ffd395] rounded-t h-4/6'>
                            <div className='absolute z-10 inset-0 top-16 left-16 rounded-lg'>
                                <img className='object-cover object-left-top h-full w-full' src={bidspell} alt="chefscookeryclub" />
                            </div>
                        </div>
                        <div className='h-2/6 flex flex-col gap-3'>
                            <div className='flex gap-8 mt-5'>
                                <div>
                                    Angular
                                </div>
                                <div>
                                    Rest
                                </div>
                            </div>
                            <div className='text-xl font-bold'>
                                Query.Recipes
                            </div>
                            <div>
                                Check out how I helped develop the front-end of a website that analyzes marketing and sales data in BigQuery
                            </div>
                            <div>
                                <a href="#">View case study</a>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className='hidden lg:block w-full h-[500px] max-w-xl'></div>
                </div>
            </div>
        </div>
    );
}

export default MyWork;
