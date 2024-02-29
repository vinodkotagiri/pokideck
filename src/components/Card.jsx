import React from 'react'

export default function Card({name,url}) {
  return (
   <div className='p-4 max-w-sm w-[360px] h-[90px] flex items-center justify-center rounded-md  shadow-xl bg-blue-200 hover:shadow-amber-600 cursor-pointer hover:scale-105 duration-300 ease-in-out'>
    <div className='text-2xl capitalize'>{name}</div>
   </div>
  )
}
