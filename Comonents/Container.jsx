import React from 'react'

export default function Container({children}) {
  return (
    <div className='w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10'>
         {children}
    </div>
  )
}
