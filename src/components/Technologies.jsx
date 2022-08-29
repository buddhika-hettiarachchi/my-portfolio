import React from 'react';

import angular from '../images/angular.svg'
import react from '../images/react.svg'
import node from '../images/node.svg'

import antui from '../images/antUI.svg'
import angularMaterail from '../images/angularMaterial.png'
import bootstrap from '../images/bootstrap.svg'

import firebase from '../images/firebase.svg'
import aws from '../images/aws.svg'
import docker from '../images/docker.png'



const Technologies = () => {
    return (
        <div className='lg:container mx-auto py-20 text-center px-5 md:px-0 text-[#111828] z-10'>
            <div className='text-sm uppercase opacity-80 pb-8'>Expertise</div>
            <div className=' text-3xl sm:text-4xl font-bold pb-20 '>The power of React. Put to work</div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5 md:gap-2 lg:gap-12'>
                <div className='w-full flex flex-col justify-center max-w-sm  md:max-w-sm md:flex-1 h-[400px] bg-gradient-to-b from-[#f3f7fd] rounded '>
                    <div className='flex relative justify-center items-center overflow-hidden'>
                        <div className=' flex justify-center items-center  absolute -left-4 md:-left-6 w-24 h-24 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white shadow-xl shadow-[#eaf0fb]'>
                            <img className='w-20 h-20 md:w-16 md:h-16 lg:h-20 lg:w-20 ' src={react} alt="react" />
                        </div>
                        <div className='flex justify-center items-center  m-10 w-32 h-32 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full bg-white shadow-xl shadow-[#eaf0fb] overflow-hidden'>
                            <img className='w-20 h-20 md:w-16 md:h-16 lg:h-20 lg:w-20 ' src={angular} alt="angular" />
                        </div>
                        <div className='flex justify-center items-center  absolute -right-4 md:-right-6 w-24 h-24 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white shadow-xl shadow-[#eaf0fb]'>
                            <img className='w-20 h-20 md:w-16 md:h-16 lg:h-20 lg:w-20 ' src={node} alt="node" />
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-xl pb-5'>Top-notch technologies</div>
                        <div className='opacity-80 px-2'>I use top-notch technologies to create <br></br>an exceptional online presence for<br></br>your business.</div>
                    </div>
                </div>
                <div className='w-full flex flex-col justify-center max-w-sm  md:max-w-sm md:flex-1 h-[400px] bg-gradient-to-b from-[#f3f7fd] rounded '>
                    <div className='flex relative justify-center items-center overflow-hidden'>
                        <div className=' flex justify-center items-center  absolute -left-4 md:-left-6 w-24 h-24 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white shadow-xl shadow-[#eaf0fb]'>
                            <img className='w-16 h-16 md:w-16 md:h-16 lg:h-16 lg:w-16 ' src={angularMaterail} alt="angularMaterail" />
                        </div>
                        <div className='flex justify-center items-center  m-10 w-32 h-32 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full bg-white shadow-xl shadow-[#eaf0fb] overflow-hidden'>
                            <img className='w-20 h-20 md:w-16 md:h-16 lg:h-20 lg:w-20 ' src={antui} alt="antui" />
                        </div>
                        <div className='flex justify-center items-center  absolute -right-4 md:-right-6 w-24 h-24 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white shadow-xl shadow-[#eaf0fb]'>
                            <img className='w-20 h-20 md:w-16 md:h-16 lg:h-20 lg:w-20 ' src={bootstrap} alt="bootstrap" />
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-xl pb-5'>Latest UI library</div>
                        <div className='opacity-80 px-2'>With the help of the latest UI libraries.<br></br>I make sure that your website looks<br></br>modern and fresh</div>
                    </div>
                </div>
                <div className='w-full flex flex-col justify-center max-w-sm  md:max-w-sm md:flex-1 h-[400px] bg-gradient-to-b from-[#f3f7fd] rounded '>
                    <div className='flex relative justify-center items-center overflow-hidden'>
                        <div className=' flex justify-center items-center  absolute -left-4 md:-left-6 w-24 h-24 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white shadow-xl shadow-[#eaf0fb]'>
                            <img className='w-20 h-20 md:w-16 md:h-16 lg:h-20 lg:w-20 ' src={firebase} alt="firebase" />
                        </div>
                        <div className='flex justify-center items-center  m-10 w-32 h-32 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full bg-white shadow-xl shadow-[#eaf0fb] overflow-hidden'>
                            <img className='w-20 h-20 md:w-16 md:h-16 lg:h-20 lg:w-20 ' src={aws} alt="aws" />
                        </div>
                        <div className='flex justify-center items-center  absolute -right-4 md:-right-6 w-24 h-24 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white shadow-xl shadow-[#eaf0fb]'>
                            <img className='w-20 h-20 md:w-16 md:h-16 lg:h-20 lg:w-20 ' src={docker} alt="docker" />
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-xl pb-5'>Architecture & Server</div>
                        <div className='opacity-80 px-2'>Deep knowledge of software<br></br>architecture and server technologies<br></br>that make you app perfectly develop.</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Technologies;
