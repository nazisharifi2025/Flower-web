import { Menu, Search } from 'lucide-react'
import { useState } from 'react'
import MenuNav from './menu';

function Navbar() {
  const [isOpin , setIsOpin] = useState(false);
  return (
    <div className='w-full h-20 py-3 bg-pink-100 z-50 relative  md:px-12 px-3 lg:fixed flex justify-between items-center'>
        <img src="/images/logo.png" className='h-full' alt="" />
      <MenuNav />
        <div className='lg:flex hidden justify-center items-center gap-5'>
            <Search className='text-black/70'/>
            <button onClick={()=> setIsOpin(!isOpin)}><Menu className='text-black/70' /></button>
        </div>
    </div>
  )
}
export default Navbar