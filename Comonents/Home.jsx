import React from 'react'
import Banner from './Banner'
import AboutUs from './AboutUs'
import OurServices from './OurServices'
import OurInformation from './OurInformation'
import OurProducts from './Products/OurProducts'
import OurTeam from './OurTeam'

export default function Home() {
  return (
    <div>
         <Banner></Banner>
          <AboutUs></AboutUs>
           <OurServices></OurServices>
            <OurInformation></OurInformation>
            <OurProducts></OurProducts>
             <OurTeam></OurTeam>
    </div>
  )
}
