
import AboutFlower from '../Componnents/AboutFlower'
import ImgCard from '../Componnents/ImgCard'
import OurCollection from '../Componnents/OurCollection'
import Testemonial from '../Componnents/Testemonial'
import Instagram from '../Componnents/Instagram'
import Footer from '../Componnents/Footer'
import Hero from '../Componnents/Hero'
import Navbar from '../Componnents/Navbar'
import OurStory from '../Componnents/OurStory'
import WhyChooseUs from '../Componnents/WhyChooseUs'
import LatestNews from '../Componnents/LatestNews'

function Home() {
  return (
    <div className='bg-stone-50 overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      {/* <Hero2/> */}
      <AboutFlower/>
      <OurStory />
      <WhyChooseUs/>
      <ImgCard/>
      <OurCollection/>
      <Testemonial/>
      <LatestNews />
      <Instagram/>
      <Footer/>
    </div>
  )
}

export default Home