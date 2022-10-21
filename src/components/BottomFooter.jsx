import React from 'react';
import gatsby from "../images/icons/gatsby.png"
import react from "../images/icons/react.png"
import tailwind from "../images/icons/tailwind.png"
import netlify from "../images/icons/netlify.png"


const BottomFooter = () => {
    return (
        <div className='flex flex-col justify-center items-center py-16 text-white bg-[blue]'>
            <div className='text-center'>Designed & Built by Buddhika Hettiarachchi</div>
            <div className='mt-5'>Made with 
            <span className='inline ml-6'><img className='w-6 h-6 inline' src={gatsby} alt="gatsby" /></span>
            <span className='inline ml-1'><img className='w-6 h-6 inline' src={react} alt="react" /></span>
            <span className='inline ml-1'><img className='w-6 h-6 inline' src={tailwind} alt="tailwind" /></span>
            <span className='inline ml-1'><img className='w-6 h-6 inline' src={netlify} alt="netlify" /></span>
            </div>
        </div>
    );
}

export default BottomFooter;
