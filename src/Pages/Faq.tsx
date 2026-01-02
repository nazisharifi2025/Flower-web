
import Instagram from '../Componnents/Instagram'
import Footer from '../Componnents/Footer'

import FaqCom from '../Componnents/FaqCom'
import Testemonial from '../Componnents/Testemonial'
import Herofaq from '../Componnents/Herofaq'
import Navbar from '../Componnents/Navbar'
import LatestNews from '../Componnents/LatestNews'

function Faq() {
  return (
    <div>
      <Navbar/>
      <Herofaq/>
      <FaqCom/>
      <Testemonial/>
      <LatestNews />
      <Instagram/>
      <Footer/>
    </div>
  )
}

export default Faq