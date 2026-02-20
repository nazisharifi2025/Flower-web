import { ChevronDown, MenuIcon } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../components/ui/sheet"

function MenuNav() {
  return (
    <div>
           <ul className='text-black/70 hidden lg:flex  justify-center font-medium items-center gap-10 text-lg'>
                <a className='hover:text-[#D83054]' href="/">Home</a>
                <a className='hover:text-[#D83054]' href="/About">About Us</a>
                <li className='reletev group'><a className='hover:text-[#D83054] flex items-center' href="#" >Pages <ChevronDown size={20}/></a>
                <ul className='absolute group-hover:flex transition-all duration-700 hidden mt-0 bg-pink-100 text-black py-5 w-48 z-50 flex-col'>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/Protfolio">Protfolio</a></li>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/Team">Taem</a></li>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/Priceng">Priceng</a></li>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/Faq">FAQ</a></li>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="NotFound">404 pages</a></li>
                </ul>
                </li>
                <li className='reletev group'><a className='hover:text-[#D83054] flex items-center' href="/News">News</a></li>
                <a className='hover:text-[#D83054]' href="/Contact">Contact</a>
        </ul>
        <ul className="lg:hidden">
            <Sheet>
                <SheetTrigger>
                    <MenuIcon className='text-white' size={32} />
                </SheetTrigger>
                <SheetContent className="p-6">
                    <SheetTitle className=" my-5">Menu</SheetTitle>
                     <ul className='text-black/70 flex flex-col  font-medium gap-10 text-lg'>
                <a className='hover:text-[#D83054]' href="/">Home</a>
                <a className='hover:text-[#D83054]' href="/About">About Us</a>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/Protfolio">Protfolio</a></li>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/Team">Taem</a></li>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/Priceng">Priceng</a></li>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/Faq">FAQ</a></li>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="NotFound">404 pages</a></li>
               
                <li className='reletev group'><a className='hover:text-[#D83054] flex items-center' href="/News">News</a></li>
                <a className='hover:text-[#D83054]' href="/Contact">Contact</a>
        </ul>
                </SheetContent>
            </Sheet>
        </ul>
    </div>
  )
}

export default MenuNav