import { ChevronRight } from 'lucide-react'
import React from 'react'

function FaqCom() {
  return (
    <div className='h-fit w-full p-12 my-12 flex items-center justify-center space-x-3'>
        <div className='h-[80vh] w-[90%] p-12 mx-auto flex flex-col relative shadow-lg shadow-gray-300'>
            <div className='h-full w-1/2 flex flex-col gap-3 '>
            <h2 className='text-[#D83054] text-xl'>FAQ</h2>
            <h1 className='text-3xl font-Headeing'>Customer Questions</h1>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='flex flex-col gap-4 w-full p-5'>
                <div className='w-full shadow-md shadow-gray-300  duration-300 cursor-pointer flex flex-col'>
                    <div className='flex gap-5 w-full items-center px-1 py-4 '>
                        <ChevronRight size={40}/>
                        <p className=' font-Headeing'>How do I make payment by my credit card?</p>
                    </div>
                    <p className=' hidden text-gray-300 text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
                {/* faq 1 endded */}
                 <div className='w-full shadow-md shadow-gray-300  duration-300 cursor-pointer flex flex-col'>
                    <div className='flex gap-5 w-full items-center px-1 py-4 '>
                        <ChevronRight size={40}/>
                        <p className=' font-Headeing'>How do I make payment by my credit card?</p>
                    </div>
                    <p className=' hidden text-gray-300 text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
                {/* faq 2 endded */}
                 <div className='w-full shadow-md shadow-gray-300  duration-300 cursor-pointer flex flex-col'>
                    <div className='flex gap-5 w-full items-center px-1 py-4 '>
                        <ChevronRight size={40}/>
                        <p className=' font-Headeing'>How do I make payment by my credit card?</p>
                    </div>
                    <p className=' hidden text-gray-300 text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
            </div>
            </div>
            <div className='h-[100vh] shadow-lg absolute -top-12 right-12 shadow-gray-400 w-[400px] border-8 border-white outline-4 outline-white overflow-hidden'>
            <img src="public/images/faq.jpg" className='h-full w-full hover:scale-125 transition-all duration-700 ease-in-out' alt="" />
        </div>
        </div>
        {/* div endded */}
        
    </div>
  )
}

export default FaqCom