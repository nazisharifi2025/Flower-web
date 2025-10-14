import React from 'react'
import Navbar from '../Componnents/Navbar'
import Abouthero from '../Componnents/Abouthero'
import Aboutflotrist from '../Componnents/Aboutflotrist'
import Aboutstory from '../Componnents/Aboutstory'
import Quote from '../Componnents/Quote'
import Specialprice from '../Componnents/Specialprice'

function AboutUs() {
  return (
    <div>
      <Navbar />
      <Abouthero />
      <Aboutflotrist />
      <Aboutstory />
      <Quote />
      <Specialprice />
    </div>
  )
}

export default AboutUs