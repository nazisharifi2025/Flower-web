import { Quote } from 'lucide-react'
import React from 'react'

function Testemonial() {
  return (
    <div className='h-[70vh] w-full flex justify-end items-center my-5 px-8 bg-cover bg-no-repeat bg-center bg-[url(/images/hero6.jpg)] '>
        <div className='w-[600px] h-full bg-white p-6'>
            <div className='flex flex-col justify-center items-cente h-full w-full gap-4 border border-gray-200 relative'>
                <Quote size={62} className='text-[#D83054] absolute left-[45%] -top-6 p-3 bg-white'/>
                <p className='text-gray-500 text-center w-[90%] mx-auto'>Fusce elementum pretium odio euhendrerit. Donec eumale suada libero. Vestibulum ante ipsum primis in faucibus orci luctus etultrices posuere cubilia curae. Etiam vel blandit est. Nulla quam nisi eleifend a consequata commodo at justo. Vestibulum ante ipsum primis in faucibus orci luctus etultrices</p>
                <img src="/images/a.jpg" className='h-24 w-24 rounded-full mx-auto' alt="" />
                <h1 className='text-3xl mx-auto'>Reta Jahn</h1>
                <h3 className='mx-auto'>Maneger</h3>
            </div>
        </div>
    </div>
  )
}

export default Testemonial