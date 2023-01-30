import React from 'react';
import gatsby from "../images/icons/gatsby.png"
import react from "../images/icons/react.png"
import tailwind from "../images/icons/tailwind.png"
import netlify from "../images/icons/netlify.png"


const BottomFooter = () => {
    return (
        <div className='flex flex-col justify-center items-center pb-5  text-white bg-[#0000ff]'>
            <div className='text-center text-sm opacity-80'>Designed & Built by Buddhika Hettiarachchi</div>
            <div className='mt-2 text-sm opacity-80'>Made with 
            <span className='inline ml-6'><img className='w-5 h-5 inline' src={gatsby} alt="gatsby" /></span>
            <span className='inline ml-1'><img className='w-5 h-5 inline' src={react} alt="react" /></span>
            <span className='inline ml-1'><img className='w-5 h-5 inline' src={tailwind} alt="tailwind" /></span>
            <span className='inline ml-1'><img className='w-5 h-5 inline' src={netlify} alt="netlify" /></span>
            </div>
        </div>
    );
}

export default BottomFooter;
