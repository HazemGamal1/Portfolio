import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import logo from '/logo.png'
const Nav = () => {
    const [showNav, setShowNav] = useState(false);
  return (
    <nav className='w-full py-8 px-6'>
        <div className='flex justify-between max-w-screen-2xl mx-auto items-center relative'>
          <div>
            <h1 className='text-3xl select-none bg-[#62B1ED] rounded-full'><img src={logo} alt="" width={60} /></h1>
          </div>
          <div className='hidden  gap-6 xl:flex item'>
            <a href="#aboutMe"><button className='border-[1px] border-white rounded-lg px-6 py-2  hover:text-[#62B1ED] duration-300'>About me</button></a>
            <a href="#contact"><button className='bg-white text-black  font-bold rounded-lg px-6 py-2 hover:bg-gradient-to-r from-[#a4ebfc] to-[#62B1ED]'>Contact</button></a>
          </div>
          <div className='xl:hidden'>
            {
                showNav ? 
                    <div onClick={() => setShowNav(false)}><IoMdClose className="text-3xl cursor-pointer hover:text-[#62B1ED]"/></div>
                :
                    <div onClick={() => setShowNav(true)}><GiHamburgerMenu className="text-3xl cursor-pointer"/></div>
            }
            {showNav ? 
                <div className="max-w-max bg-white p-6 absolute -bottom-30 right-0 rounded-lg mt-4">
                    <ul>
                        <li className="text-black border-b-2 pb-4 hover:text-[#62B1ED] duration-300"><a href="#aboutMe">About Me</a></li>
                        <li className="text-black pt-4 hover:text-[#62B1ED] duration-300"><a href="#contact">Contact Me</a></li>
                    </ul>
                </div>
                :
                null
            }
          </div>
        </div>
      </nav>
  )
}

export default Nav
