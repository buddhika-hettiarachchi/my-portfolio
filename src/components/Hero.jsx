import React, { useEffect, createRef, useState, useRef } from 'react';
import Typed from 'typed.js';
import Lottie from 'lottie-web';
import heroAnimation from '../images/animations/hero-pattern-6.json'

const Hero = () => {

    const [frontTechValue, setFrontTechValue] = useState('..')

    const heroAnimationContainer = createRef();
    const letterTypingContainer = createRef();
    const typed = useRef(null);


    var newsArray = ["React", "Angular", "Next", "Gatsby"];   // your code puts strings into this array
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
        const options = {
            strings: [
                'React',
                'Angular',
                'Next',
                'Gatsby'
            ],
            typeSpeed: 150,
            backSpeed: 50,
            backDelay: 700,
            loop: true,
            showCursor: false

        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(letterTypingContainer.current, options);

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
        return () => anim.destroy();



    }, []);

    return (
        <div className="relative h-[calc(100vh-20rem)] min-h-[500px] flex justify-center items-center font-black text-3xl">
            <div style={{
                backgroundColor: 'blue'
            }} className="absolute inset-0">
            </div>
            <div className="container p-0 flex flex-col sm:flex-row text-white z-10">
                <div className='text-center sm:text-left px-5 lg:px-0 w-full xl:w-4/6'>
                    <div className='text-sm'>Buddhika Hettiarachchi, Front-end Developer</div>
                    <div className='text-4xl md:text-5xl lg:text-6xl py-8 leading-normal'>Specialized in creating sleek and premium user interfaces with the help of <span ref={letterTypingContainer} className='text-[yellow] '></span>.</div>
                    <div className='flex justify-center sm:justify-start gap-5'>
                        <button className='text-sm bg-white text-[blue] px-5 py-3'>Selected Work</button>
                        <button className='text-sm border border-white px-5 py-3'>
                            <a href={'./profile.pdf'} title="Download the Hello World file" download>
                            Download CV
                            </a>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hero;
