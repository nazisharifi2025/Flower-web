import React from 'react'
import Navbar from '../Componnents/Navbar'
import Instagram from '../Componnents/Instagram'
import Footer from '../Componnents/Footer'
import HeroNews from '../Componnents/HeroNews'
import API from '../Componnents/api'

function News() {
  return (
    <div>
      <Navbar/>
      <HeroNews/>
      <API />
      <Instagram/>
      <Footer/>
    </div>
  )
}

export default News