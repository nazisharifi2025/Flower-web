import HeroPriceng from '../Componnents/HeroPriceng'
import Instagram from '../Componnents/Instagram'
import Footer from '../Componnents/Footer'
import FaqP from '../Componnents/FaqP'
import Navbar from '../Componnents/Navbar'
import SpecialPricing from '../Componnents/SpecialPricing'
import WhyChooseUs from '../Componnents/WhyChooseUs'

function Priceng() {
  return (
    <div>
      <Navbar/>
      <HeroPriceng/>
      <SpecialPricing/>
      <WhyChooseUs/>
      <FaqP/>
      <Instagram/>
      <Footer/>
    </div>
  )
}

export default Priceng