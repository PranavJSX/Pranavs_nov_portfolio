import React from 'react'
import Spline from '@splinetool/react-spline';

export const Spline_svg = () => {
    const switchToHome = (e) =>{
        console.log(e.target);
    }

  return (
    <main onClick={e=>{switchToHome(e)}}>
      <Spline className='h-[0.2vh]' 
        scene="https://prod.spline.design/J0xuvECZ0mC76F70/scene.splinecode" 
      />
    </main>   
)
}
