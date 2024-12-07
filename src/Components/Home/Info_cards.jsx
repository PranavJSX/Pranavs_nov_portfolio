import React from 'react';
import './Info_cards.css';

export const Info_cards = () => {
  return (
    <>
    <div className='text-sm info_cards h-[30vh]  flex flex-row justify-content-start  gap-5 p-5'>
        <div className='border-rose-400 border-2 text-center w-30 rounded-lg content-center w-fixed text-[3vh] text-slate-400'>
        <span className=''>Experience : 3+ Years</span>
        </div>
        <div className='border-rose-400 text-center border-2 w-30 rounded-lg content-center w-fixed text-[3vh] text-slate-400'>
        <span className=''> Responsive Designs</span>
        </div>
        <div className='border-rose-400 text-center border-2 w-30 rounded-lg content-center w-fixed text-[3vh] text-slate-400'>
        <span className=''>Handled Large scale Applications</span>
        </div>
        <div className='border-rose-400 border-2 w-30 text-center rounded-lg content-center w-fixed text-[3vh] text-slate-400'>
        <span className=''>UI/UX Expert</span>
        </div>
    </div></>
  )
}
