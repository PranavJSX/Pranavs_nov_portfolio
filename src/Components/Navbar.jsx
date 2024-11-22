import React, { useEffect } from "react";
import './Navbar.css';
import {createBrowserRouter,Route,Link,RouterProvider} from "react-router-dom"
import { Main_top } from "./Main_top";
import { Home } from "./Home";
import { Resume } from "./Resume";
import { About } from "./About";
import { Projects} from "./Projects";


const router = createBrowserRouter([{
    path:'/',
    element:(<Home/>)
  },
  {
    path:'/res',
    element:(<Resume/>)
  },
  {
    path:'/about',
    element:(<About/>)
  },
  {
    path:'/projects',
    element:(<Projects/>)
  }
])
export const Navbar = () =>{

  useEffect(() => {
    console.log(window.location.pathname);
    if(window.location.pathname === '/'){
      let a = document.querySelector(`[href='\/']`)
      a.classList.add('selected');
      console.log(a.classList);
    }
  },[])
  

    return(
        <div>
        <div className="mx-5 navbar justify-self-end flex flex-row space-x-4">
            <a href={'/'} className=" nav_item .pt-sans-regular">Home</a>
            <a href={'/res'} className=" nav_item .pt-sans-regular">Resume</a>
            <a href={'/about'} className=" nav_item .pt-sans-regular">About</a>
            <a href={'/projects'} className=" nav_item .pt-sans-regular">Projects</a>
        </div>
        <div className="main_div" ><RouterProvider router={router}/></div>
        </div>
    )
}   