import React, { useEffect, useState } from 'react';
import {motion, useMotionTemplate, useMotionValue, useMotionValueEvent, useScroll, useTransform} from 'motion/react';
import './Library.css';
import { Project_cards } from './Project_cards';

export const Library = () => {
  const arr = [{
    project_heading : 'IMAP (Image storage App)',
    info:'A complete MERN stack app which allows user to login/signup as per requirement and securely allows them to store their personal images with location with complete map support.',
    source_code :'https://github.com/PranavJSX/Mern_app'
},{
    project_heading : 'Socket IO Room chat app',
    info:`I have created an room chat app where a user or a group of users can chat with each other seamlessly understanding all the functions of socketio with detailed login and chat app design elements`,
    source_code :'https://github.com/PranavJSX/1st_chat_app/tree/master'
},{
    project_heading : 'AI Image generation website',
    info:`An genarative AI website where you can generate images on the basis of the prompts entered , also if you wish you can share that image which will be available to download for all the users`,
    source_code :'https://github.com/PranavJSX/dall_E_Mern'
}]

  const [display_in_info_div,setInfoDiv] = useState([0]);


  const {scrollYProgress,scrollY} = useScroll();

  const x = useTransform(scrollY,[1200,1900],[200,0]);
  // const x = 200;

  const changeopacity = useTransform(scrollYProgress,[0.5,0.8],[0,1])

 

  return (
    <motion.div className=' grid grid-cols-3 gap-x-10 gap-y-5 grid-cols-auto h-[90vh] mt-[10vh] mb-[20vh] p-[10vw]'>
      <motion.div initial={{opacity:0}} style={{opacity:changeopacity}} className='bg-purple-600 text-center content-center text-slate-800 text-3xl rounded-lg p-10 card_1_grad' >
        Libraries Worked Upon
        </motion.div>
      <motion.div initial={{opacity:0}} style={{opacity:changeopacity,x}} className=' col-span-2 content-center rounded-lg flex gap-5 text-xl card_2_grad'>
        <div className='flex  w-[100%] flex-wrap text-center text-zinc-800 rounded-lg min-h-[30vh]'>
          <a className='links grow-1 flex-auto bg-rose-200 max-w-[20%] rounded-l-lg' href='https://reactrouter.com/' target='_blank' ><span className=' Link_text '>
          React Router</span>
          <div className='mt-12'><img src='https://reactrouter.com/splash/hero-3d-logo.webp'/></div>
          </a>
          <a className='links grow-1 flex-auto bg-rose-300 max-w-[20%]' href='https://redux.js.org/' target='_blank' ><span className='Link_text  ' >
          React Redux</span>
          <div className='mt-7'><img src='https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo-title-dark.png'/></div></a>  
          <a className='bg-rose-400 links grow-1 flex-auto max-w-[20%]' href='https://motion.dev/' target='_blank' ><span className=' Link_text' >
          Framer Motion</span>
          <div className='mt-7 scale-[0.6]'><img src='https://cdn.prod.website-files.com/63c6a35ee97bea3e121bf3f4/65ba74cfb2137dde06f7004e_6475bf9f62e9be5d41eb4eea_framer-motion.webp'/></div></a>
          <a className='links grow-1 bg-rose-500 flex-auto max-w-[20%]' href='https://tailwindcss.com/' target='_blank' ><span className=' Link_text' >
          Tailwind CSS</span>
          <div className='mt-6 scale-[0.4]'><img src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'/></div></a>
          <a className='links grow-1 flex-auto bg-rose-600 max-w-[20%] rounded-r-lg' href='https://react.dev/reference/react/hooks' target='_blank'><span className='Link_text' >
          React Hooks</span>
          <div className='mt-6 scale-[0.8]'><img src='https://images.veryfront.com/imgproxy/q:75/w:1920/aHR0cHM6Ly9jZG4uY29kZXJzb2NpZXR5LmNvbS91cGxvYWRzL3JlYWN0LWhvb2tzLmpwZWc=.webp'/></div></a>
        </div>

      </motion.div>
      <div className='col-span-3  rounded-lg card_2_grad flex h-[40vh]'>
        <div className='flex flex-row gap-20 text-center w-[75%]'>{arr.map(Element=>{
          return <motion.div className=' flex-col w-[25%] bg-rose-400 rounded-lg pt-3 '><Project_cards arr={Element}/>
          <a href={`${Element.source_code}`} target='_blank'><button className='rounded-xl border-2 w-[100%] text-slate-200 hover:bg-rose-500 hover:text-slate-800'>
            Check it Out</button></a>
          </motion.div>
        })}</div>
        <div className=' w-[25%] grow-1 flex-auto bg-purple-600 rounded-lg content-center text-center text-4xl pb-10 col-span-2 h-[45vh]'>
          Large scale <span className='text-green-400'>Projects</span> Delivered</div>

      </div>
      {/* <div className='bg-purple-600 rounded-lg text-center content-center card_1_grad'>Projects Delivered</div> */}
    </motion.div>
  )
}
