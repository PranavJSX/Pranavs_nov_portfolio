import React,{useRef} from 'react'
import {motion, useMotionTemplate, useMotionValue, useMotionValueEvent, useScroll, useTransform} from 'motion/react';




export const Project_cards = ({arr}) => {

    const ref = useRef(null);
    const {scrollYProgress,scrollY} = useScroll();

    const opacity = useTransform(scrollYProgress,[0.5,0.8],[0,1]);

    const y = useTransform(scrollY,[1500,1900],[400,0])

    useMotionValueEvent(scrollY,'change',(latest)=>{console.log("page scroll : ", latest)});

  return (
    <motion.div ref={ref} initial={{opacity:0}} style={{opacity:opacity,y}} className=' text-rose-900 h-[40vh] p-2'>
        <div className='text-xl text-slate-200'>
        <h2>
        {arr.project_heading}
        </h2>
        </div>
        <div className='overflow-hidden max-h-[100%] text-center pt-5'>{arr.info}</div>

    </motion.div>
  )
}
