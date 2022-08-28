import React, { useEffect, createRef, useState } from 'react';

import Lottie from 'lottie-web';
import heroAnimation from '../images/animations/hero-pattern-6.json'


const Hero = () => {

    const [frontTechValue, setFrontTechValue] = useState('..')

    let heroAnimationContainer = createRef();

    var newsArray = ["React","Angular","Next","Gatsby"];   // your code puts strings into this array
    var curNewsIndex = -1;

    function advanceNewsItem() {
        ++curNewsIndex;
        if (curNewsIndex >= newsArray.length) {
            curNewsIndex = 0;
        }
        setFrontTechValue(newsArray[curNewsIndex]);   // set new news item into the ticker
    }


    useEffect(() => {
        //  console.log('value =----> ',frontEndTechContainer.current.outerText)

        const anim = Lottie.loadAnimation({
            container: heroAnimationContainer.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: heroAnimation,
            rendererSettings: {
                preserveAspectRatio: 'none'
            }

        });
        console.log('hi there ----------')
        setInterval(advanceNewsItem, 2000)
        return () => anim.destroy();



    }, []);

    return (
        <div className="relative h-[calc(100vh-20rem)] min-h-[500px] flex justify-center items-center font-black text-3xl">
            <div style={{
                backgroundColor: 'blue'
            }} className="absolute inset-0">
            </div>
            <div className="container flex flex-col text-white z-10">
                <div className='flex-1 px-10 w-full xl:w-4/6 '>
                    <div className='text-sm'>Buddhika Hettiarachchi, Front-end Developer</div>
                    <div className='text-4xl md:text-5xl lg:text-6xl py-8 leading-normal'>Specialized in creating sleek and premium user interfaces with the help of <span className='text-[yellow]'>{frontTechValue}</span>.</div>
                    <div className='flex gap-5'>
                        <button className='text-sm bg-white text-[blue] px-5 py-3'>Selected Work</button>
                        <button className='text-sm border border-white px-5 py-3'>Download CV</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hero;
