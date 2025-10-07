
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Flower from "./Pages/Flower"
import AboutUs from "./Pages/AboutUs"
import Gallery from "./Pages/Gallery"
import WorkShop from "./Pages/WorkShop"
import ContactUs from "./Pages/ContactUs"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Flowers" element={<Flower/>}/>
        <Route path="/About" element={<AboutUs/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/WorkShop" element={<WorkShop/>}/>
        <Route path="/Contuct" element={<ContactUs/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
