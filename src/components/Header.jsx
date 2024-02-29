import React from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid'
export default function Header() {
  return (
    <div className='p-4 flex w-full h-[90px] items-center justify-between bg-[#444444] sticky top-0 shadow-2xl py-3'>
    <p className='font-dancing font-extrabold tracking-widest text-[72px] text-[#F8DA5B]'>PokiDeck</p>
    <div className='h-full flex bg-white rounded-md px-3' >
    <input className='h-full outline-none border-none rounded-l-md text-2xl px-2 text-slate-700'/>
    <div className='h-full w-[28px] flex items-center justify-center  text-slate-900 rounded-r-md cursor-pointer'>
    <MagnifyingGlassIcon className='w-full'/>
    </div>
    </div>
  </div>
  )
}
