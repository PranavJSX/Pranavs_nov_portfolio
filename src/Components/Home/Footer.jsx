import React from 'react'
import './Footer.css';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";


export const Footer = () => {
  return (
    <div>
        <div className='mt-[50vh] mb-[6.5vh] h-[30vh] footer_main'>
            <div className='ml-[50vh] pt-5 flex-cols'>
                <div className='pb-2 ml-[-0.4vw] text-rose-500'>Let's Connect :</div>
                <div className='social_icons scale-[2] content-center'><a href='https://www.linkedin.com/in/pranav-ojha-14007a1a9/' target='_blank'><FaLinkedin /></a></div>
                <div className='social_icons scale-[2] content-center mt-5'><a href='https://github.com/PranavJSX' target='_blank'><FaSquareGithub /></a></div>
                <div className='social_icons scale-[2] content-center mt-5'><a href='mailto:ojhapranav1999@gmail.com' target='_blank'><IoMail /></a></div>
            </div>
        <div className='ml-[140vh] flex'><div className='text-slate-950'>MADE WITH</div><div className='pl-1 pt-1 text-rose-400'> <FaHeart /></div></div>
        </div>
    </div>
  )
}
