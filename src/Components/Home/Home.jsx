import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import {motion, useInView, useScroll, useTransform} from "motion/react"
import { FaAngleDoubleDown } from "react-icons/fa"  
import image1 from '../../Assets/IMG-20240905-WA0000.jpg';

export const Home = () => {

  let ref1 = useRef(null);
  let ref2 = useRef(null);
  const isinView = useInView(ref1,{margin:"0px 0px -50% 0px"});

  let {scrollYProgress} = useScroll()
  const opacity = useTransform(scrollYProgress,[0.5,0.7],[0,1])
  
  const displayextrastuff = () =>{
  }

  const hideextrastuff = () => {
  }

  useEffect(()=>{
    isinView ? displayextrastuff() :hideextrastuff() ;
  },[isinView]);

  return (   

    <div className = "topmostdiv">

    <div className='flex justify-center text-[8vh] h-screen mt-5'>
      <div>Hi, <span className='text-[8vh] text-green-400'>Pranav's portfolio</span></div>  
      <div className='arrow_down flex justify-center mt-20'><FaAngleDoubleDown /></div>
    </div>

    <div className='flex flex-row grow justify-center mb-[60vh] main_intro_div'>
      <div className='flex-start flex-justify-center justify-center pl-[10vw]'>
        <img className='image_class' src={image1} /></div>
      <motion.div ref={ref1}  className='flex grow justify-self-center pl-5 mt-[10vh] w-[50%] text-[3vh] gap-10 intro_div' 
      initial={{opacity:0}} style={{opacity:opacity}}>
        <p className=' h-auto text-violet-400 '>
        <span className='text-gray-200  font-bold'>UI developer, Front-end developer , design expert</span>, delivering frontend solutions while optimizing apps and websites for performance and faster loading times.
        </p>
      </motion.div>
      <div className='flex-start flex-justify-center justify-center pr-[10vw] mt-[15vh]'><img className='image_class' src={image1} /></div>
    </div>
    <motion.div className='bg-red-400 sticky bottom-0 h-2 progress_bar' style={{scaleX:scrollYProgress}}></motion.div>
    </div>
  )
}











