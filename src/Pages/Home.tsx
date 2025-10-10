import React from 'react'
import Hero2 from '../Componnents/Hero2'
import Navbar from '../Componnents/Navbar'
import AboutFlower from '../Componnents/AboutFlower'
import OurStory from '../Componnents/OurStory'
import ImgCard from '../Componnents/ImgCard'
import WhyChooseUs from '../Componnents/WhyChooseUs'
// import Hero from '../Componnents/Hero'

function Home() {
  return (
    <div className='bg-stone-50'>
      <Navbar/>
      {/* <Hero/> */}
      <Hero2/>
      <AboutFlower/>
      <OurStory/>
      <WhyChooseUs/>
      <ImgCard/>
      
    </div>
  )
}

export default Home