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
                <div className='pb-2 ml-[-0.4vw] text-2xl text-rose-700 satisfy-regular'>Let's Connect :</div>
                <div className='social_icons scale-[1.6] content-center flex-row ml-[17vw] flex'>
                    <div className='pt-[0.7vh]'><a href='https://www.linkedin.com/in/pranav-ojha-14007a1a9/' target='_blank'><FaLinkedin/></a></div>
                    <div className='scale-[0.7] '>
                        <a href='https://www.linkedin.com/in/pranav-ojha-14007a1a9/' className='underline_links'  target='_blank'>LinkedIN</a>
                        </div>
                </div>
                <div className='social_icons scale-[1.6] content-center mt-5 ml-[17vw]'>
                    <div className=''><a href='https://github.com/PranavJSX' target='_blank'><FaSquareGithub /></a></div>
                    <div className='scale-[0.7] ml-[-8vw] mt-[-2.8vh]'>
                        <a className='underline_links' href='https://github.com/PranavJSX' target='_blank'>Github</a></div>
                </div>
                <div className='social_icons scale-[1.6] content-center mt-5 ml-[17vw]'>
                    <div><a href='mailto:ojhapranav1999@gmail.com' target='_blank'><IoMail /></a></div>
                    <div className='scale-[0.7] ml-[-8vw] mt-[-2.8vh]'>
                        <a className='underline_links' href='mailto:ojhapranav1999@gmail.com' target='_blank'>E-mail</a></div>
                </div>
            </div>
        <div className='ml-[140vh] flex mt-[-5vw]'><div className='text-slate-950 '>
            MADE WITH</div><div className='pl-1 pt-1 text-rose-400'> <FaHeart /></div></div>
        </div>
    </div>
  )
}
