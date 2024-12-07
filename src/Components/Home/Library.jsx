import React from 'react';
import {motion} from 'motion/react';

export const Library = () => {
  return (
    <motion.div className=' grid grid-cols-3 gap-x-10 gap-y-5 grid-cols-auto h-[90vh] mt-[20vh] mb-[20vh] p-5'>
      <div className='bg-purple-600 text-center content-center text-slate-800 text-3xl rounded-lg'>
        Framkerworks Worked Upon
        </div>
      <div className='bg-red-400 col-span-2 text-center content-center rounded-lg'>
        <span>React Redux</span>
        <span>React Redux</span>
        <span>React Redux</span>
        <span>React Redux</span>
        <span>React Redux</span>        
        </div>
      <div className='col-span-2 bg-red-400 text-center content-center rounded-lg'>3</div>
      <div className='bg-purple-600 rounded-lg text-center content-center'>4</div>
    </motion.div>
  )
}
