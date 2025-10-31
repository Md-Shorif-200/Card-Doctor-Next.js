import Container from '@/Comonents/Container'
import React from 'react'

const bannerImage  = '/assets/images/banner/5.jpg'

export default function Banner() {
  return (
    <div className='w-full h-[85vh] bg-black/30  flex items-center' style={{backgroundImage : `url(${bannerImage})`,backgroundPosition : 'center',backgroundSize : 'cover',backgroundRepeat : 'no-repeat',backgroundBlendMode : 'multiply'}}>

         <Container>
              <div className="banner_cnt w-full md:w-1/2 ">
                 <h1 className=' text-4xl sm:text-5xl lg:text-[60px]  text-white font-semibold lg:leading-[75px]'>Affordable Price For Car Servicing</h1>
                 <p className='text-[18px] font-light text-white my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                  <div className="banner_btn flex gap-6">
                            <button className=' primary_btn '>
                                discover more
                            </button>
                              <button className='  border border-[#FF3811] text-[#FF3811] rounded-md btn capitalize bg-transparent hover:bg-[#FF3811] hover:text-white transition-all  '>
                                latest project
                            </button>

                  </div>
              </div>
         </Container>

    </div>
  )
}
