import React from 'react'

export default function Container({children}) {
  return (
    <div className='w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10'>
         {children}
    </div>
  )
}
