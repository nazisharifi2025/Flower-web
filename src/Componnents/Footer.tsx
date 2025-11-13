import { ChevronDown, Github, Instagram, Linkedin, Phone } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <div className='lg:h-[40vh] h-fit w-full bg-cover bg-no-repeat  bg-center bg-[url(/images/flower-800x533.jpg)]'>
        <div className='flex flex-col  px-12 w-full h-full bg-black/80'>
         <div className='w-full h-[80%] lg:py-5 py-12 gap-6 px-12 bg-transparent flex lg:flex-row flex-col justify-between items-center border-b border-gray-400'>
        <img src="/images/logo.png" className='h-16' alt="" />
        <ul className='flex justify-center text-white font-medium items-center gap-10 text-lg'>
                <a className='hover:text-[#D83054]' href="">About</a>
                <a className='hover:text-[#D83054]' href="">Pricing</a>
                <li className='reletev group'><a className='hover:text-[#D83054] flex items-center' href="" >FAQ</a>
                </li>
                <li className='reletev group'><a className='hover:text-[#D83054] flex items-center' href="">Blog</a>
                </li>
                <a className='hover:text-[#D83054]' href="">Contact</a>
        </ul>
        <div className='flex justify-center items-center text-white gap-5'>
            <Instagram/>
            <Linkedin/>
            <Github/> 
            <Phone/>
        </div>
    </div>
    <h1 className='text-xl lg:my-auto my-6 lg:mx-2 mx-auto  text-white text-center'>© 2020 Flowtrist by Jegtheme. All Rights Reserved.</h1>
    </div>
    </div>
  )
}

export default Footer