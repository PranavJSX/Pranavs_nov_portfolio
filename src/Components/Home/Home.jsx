import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import {motion, useInView, useMotionValue, useMotionValueEvent, useScroll, useTransform} from "motion/react"
import { FaAngleDoubleDown } from "react-icons/fa"  
import image1 from '../../Assets/IMG-20240905-WA0000.jpg';
import image2 from '../../Assets/IMG-20240905-WA0001.jpg';
import { TechStack } from './TechStack';
import { Info_cards } from './Info_cards';
import { Library } from './Library';

export const Home = () => {

  let ref1 = useRef(null);
  let ref2 = useRef(null);
  const isinView = useInView(ref2,{margin:"0px 0px 0px 0px"});

  let {scrollYProgress,scrollY} = useScroll()
  const opacity = useTransform(scrollYProgress,[0.3,0.5],[0,1])
  const variable_scale = useTransform(scrollY,[300,950],[0.2,1]);
  
  useEffect(()=>{
    isinView ? displayextrastuff() :hideextrastuff() ;
  },[isinView]);

  const shiftToIntro = () =>{
    ref2.current.scrollIntoView({behavior:'smooth',block:'end'});
  }

  const displayextrastuff = () =>{
    document.querySelector('.tech_stack_div').style.opacity = 1;
  }

  
  const hideextrastuff = () =>{
    document.querySelector('.tech_stack_div').style.opacity = 0;
  }

  return (   

    <div className = "topmostdiv">
    <div className='flex justify-center text-[8vh] h-screen mt-5'>
      <div>Hi, <span className='text-[8vh] text-green-400 w-auto'>Pranav's portfolio</span></div>  
      <div className='arrow_down flex justify-center mt-20' onClick={shiftToIntro}><FaAngleDoubleDown /></div> 
    </div>
    <div className='flex mt-[-70vh] mb-[30vh]'><Info_cards/></div>
    
    <div className='bg-slate-400 h-1 mb-[150px]' ></div>
    <motion.div className='flex flex-row grow justify-center mb-[50vh] main_intro_div'
     initial={{scale:0.5}} style={{scale:variable_scale}}>
      {/* {console.log(document.querySelector('.main_intro_div').style.scale)} */}
      <motion.div initial={{opacity:1}} className='flex-start flex-justify-center justify-center pl-[10vw]'>
        <img className='h-[0vh] w-[1vh] image_class' src={image1} /></motion.div>
      <motion.div ref={ref1}  className='flex grow justify-self-center pl-5 mt-[10vh] w-[50%] text-[3vh] gap-10 intro_div' 
      initial={{opacity:0}} style={{opacity:opacity}}>
        <p className=' h-auto text-rose-400'>
        <span className='text-gray-200'>UI developer, Front-end developer, design expert</span>, delivering frontend solutions while optimizing apps and websites for performance and faster loading times.
        </p>
      </motion.div>
      <div className='flex-start flex-justify-center justify-center pr-[10vw] mt-[25vh]'><img  className='image_class h-[0vh] w-[1vh]' src={image2} /></div>
    </motion.div>
    
    <div className='flex justify-center tech_stack_div mr-[10vw] mt-[-40vh]' style={{opacity:0}}><TechStack/></div>

    <div ref={ref2} className=' mt-[-300px] pt-[55vh] h-1'></div>
    <div className='h-1 mt-[10vh] w-screen bg-slate-400' ></div>
    <div className='mb-[-30vh] mt-[30vh] ml-[21vh] text-slate-500'>*Click on the card to know more</div>
    <Library/>
    
    <motion.div className='bg-red-400 sticky bottom-0 h-2 progress_bar' style={{scaleX:scrollYProgress}}></motion.div>


    </div>
  )
}











