import React, { useEffect } from 'react'
import './Home.css';

export const Home = () => {

  const show_intro=()=>{
    console.log('Hi I am triggered') 
  }

  return (
    <div className='h-[110vh] text-black bg-slate-700'>
      <div className='px-20 pt-20 bg-inherit'>
        <div className="h-[80vh] bg-inherit rounded-lg">
          <div className='content-center px-[22vw]'><p className='intro_para_hidden post pt-sans-regular text-[2.5vh]' onMouseMove={(e)=>{show_intro(e)}}>Self driven<span className='text-green-400'> UI developer, Front-end developer , design expert</span>, delivering frontend solutions while optimizing apps and websites for performance and faster loading times.</p></div>
        </div>
      </div>
    </div>
  )
}
