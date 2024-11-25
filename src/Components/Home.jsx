import React, { useEffect } from 'react'
import './Home.css';
import { Spline_svg } from './Spline_svg';

export const Home = () => {

  const show_intro=()=>{
    console.log('Hi I am triggered') 
  }

  return (
    <div className='h-[110vh] text-black bg-slate-700'>
      <div className='px-20 pt-20 bg-inherit'>
      <div className='h-screen  text-[10vh] pl-[25%] pt-[15%] text-purple-400 decotation-amber-400'>Hi! My name is 
        <span className='text-red-500'> Pranav</span></div>
        <div className="h-[80vh] bg-inherit rounded-lg">
          <div className='content-center px-[22vw]'><p className='intro_para_show post pt-sans-regular text-[2.5vh]' onMouseMove={(e)=>{show_intro(e)}}>Self driven<span className='text-purple-400 text-[3vh]'> UI developer, Front-end developer , design expert</span>, delivering frontend solutions while optimizing apps and websites for performance and faster loading times.</p></div>
        </div>
      </div>
    </div>
  )
}
