import { CheckIcon } from 'lucide-react'


export default function Specialprice() {
    const SpecialP = [
        {
            h1: "Wedding",
            img: "public/images/Screenshot 2025-10-13 113432.png",
            li1: "1 Bouquet",
            li2: "Toss Bouquet",
            li3: "Flower Girl Satin Basket",
            li4: "Flower Girl Petals",
            li5: "Flower Girl wand",
            li6: "Bridesmaid Bouquet ",
        },
        {
            h1: "Ceremony",
            img: "public/images/Screenshot 2025-10-13 113444.png",
            li1: "3 Bouquet",
            li2: "Toss Bouquet",
            li3: "Flower Girl Satin Basket",
            li4: "Flower Girl Petals",
            li5: "Flower Girl wand",
            li6: "1 Bouquet",
        },
    ]
  return (
    <div className='h-fit w-full py-12 flex flex-col justify-center items-center gap-6'>
       
        <div className='grid grid-cols-3 '>
            <div className='font-Heading'>
                 <h2 className='text-xl text-[#D83054] font-Headeing'>Special Pricing</h2>
        <h1 className='text-4xl font-Headeing'>Affordable Prices</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quaerat dicta quia numquam quis quod ipsam veritatis. Asperiores repudiandae, odit dolorum magni commodi esse nihil sequi ipsam reiciendis suscipit nisi.</p>
        <button className='text-white bg-[#D83054] px-5 py-3 hover:bg-pink-600'>SHOW ALL</button>
            </div>
            {SpecialP.map((price , index)=>(
            <div key={index} className='flex flex-col justify-center gap-4 items-start h-[80vh] w-[350px] shadow-md shadow-gray-400'>
                <h2 className='text-3xl font-Headeing px-3 '>{price.h1}</h2>
                <img src={price.img} alt="" />
                <ul className='flex flex-col gap-6 p-4 '>
                    <li className='flex space-x-3 text-white'><button className='rounded-full px-1 bg-[#D83054]'><CheckIcon  size={16}/></button><span className='text-black'>{price.li1}</span></li>
                    <li className='flex space-x-3 text-white'><button className='rounded-full px-1 bg-[#D83054]'><CheckIcon  size={16}/></button><span className='text-black'>{price.li2}</span></li>
                    <li className='flex space-x-3 text-white'><button className='rounded-full px-1 bg-[#D83054]'><CheckIcon  size={16}/></button><span className='text-black'>{price.li3}</span></li>
                    <li className='flex space-x-3 text-white'><button className='rounded-full px-1 bg-[#D83054]'><CheckIcon  size={16}/></button><span className='text-black'>{price.li4}</span></li>
                    <li className='flex space-x-3 text-white'><button className='rounded-full px-1 bg-[#D83054]'><CheckIcon  size={16}/></button><span className='text-black'>{price.li5}</span></li>
                    <li className='flex space-x-3 text-white'><button className='rounded-full px-1 bg-[#D83054]'><CheckIcon  size={16}/></button><span className='text-black'>{price.li6}</span></li>
                </ul>
                 <button className='text-white bg-[#D83054] px-5 py-3 hover:bg-pink-600'>SHOW ALL</button>
            </div>
            ))}
        </div>
    </div>
  )
}
