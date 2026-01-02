import { ChevronRight } from 'lucide-react'
function HeroPriceng() {
  return (
    <div className='lg:h-[60vh] h-[30vh] p-12 w-full bg-no-repeat bg-cover bg-center bg-[url(/images/img.jpg)] flex flex-col gap-5 justify-end items-end'>
        <h1 className='lg:text-7xl md:text-5xl text-3xl bg-linear-60 from-pink-300 via-gray-300 to-pink-900 text-transparent bg-clip-text '>Priceng</h1>
        <div className='flex lg:text-2xl text-xl justify-center items-center space-x-1'>
            <span>Home</span>
            <ChevronRight size={24} className='text-[#D83054]'/>
            <span>Priceng</span>
        </div>
    </div>
  )
}

export default HeroPriceng