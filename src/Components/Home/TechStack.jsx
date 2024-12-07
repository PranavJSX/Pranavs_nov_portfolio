import React from "react";
import { DiJavascript } from "react-icons/di";
import { TbFileTypeHtml } from "react-icons/tb";
import { SiCsswizardry } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import './TechStack.css';


export const TechStack = () =>{
    return(
        <div className=" flex flex-column">
        <div className="pr-[13vw]  text-green-400 text-4xl w-auto">Built with -</div>
        <div className="flex scale-[3] gap-5 pt-3" >
                <div className="icon"><DiJavascript/></div>
                <div className="icon"><TbFileTypeHtml/></div>
                <div className="icon"><RiTailwindCssFill/></div>
                <div className="icon"><IoLogoReact/></div>
                <div className="icon"><FaGitAlt/></div>
        </div>
        </div>
    )
}