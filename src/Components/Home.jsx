import React, { useEffect, useRef } from 'react'
import './Home.css';
import {motion,useMotionValue,useMotionValueEvent, useScroll, useTransform} from 'motion/react';

export const Home = () => {

  const ref1 = useRef(null);
  let {scrollYprogress} = useScroll({
    target:ref1,  
    offset:["0 1","1.33 1"]
  })


  const show_intro=()=>{
    console.log('Hi I am triggered') 
  }

  return (
    <div className='h-[110vh] text-black' id='home_div'>
      <div className='px-20 pt-20'>
      <motion.div ref={ref1}  className='h-screen  text-[10vh] pl-[25%] pt-[15%] text-purple-400 decotation-amber-400'>Hi! My name is 
        <span className='text-red-500'> Pranav</span></motion.div>
        <div className="h-[80vh] bg-inherit rounded-lg">
          <div className='content-center px-[22vw]'><p className='intro_para_show post pt-sans-regular text-[2.5vh]' onMouseMove={(e)=>{show_intro(e)}}>Self driven<span className='text-purple-400 text-[3vh]'> UI developer, Front-end developer , design expert</span>, delivering frontend solutions while optimizing apps and websites for performance and faster loading times.</p></div>
        </div>
      </div>
    </div>
  )
}
