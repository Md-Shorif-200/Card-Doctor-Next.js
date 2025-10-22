import React from 'react'

export default function SectionTitle({title,subTitle,paragraph}) {
  return (
        
    <div className='w-full  flex justify-center items-center  '>
       <div className='w-full md:w-1/2 text-center'>
           <h1 className='capitalize text-[20px] primary_color font-normal '> {title} </h1>
         <h2 className='capitalize text-[45px] font-semibold  text-black my-2 '> {subTitle} </h2>
         <p className='capitalize text-[14px] text-black/60 '> {paragraph} </p>
       </div>
    </div>
  )
}
