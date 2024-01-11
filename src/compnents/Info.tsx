import React, { useState } from 'react'
import img from '/Avatar=22.png'
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin,  FaGithub  } from "react-icons/fa";
const Info = () => {
    const [showContactData, setShowContactData] = useState(false);
  return (
    <div>
        <div>
            <img src={img} alt="" width={250} className='mx-auto'/>
        </div>
            <div className='text-center px-2' id='contact'>
            <h1 className='text-4xl xl:text-6xl font-bold mt-12'>Hazem Gamal</h1>
            <h3 className='text-3xl font-semibold mt-4'><span className='bg-gradient-to-r from-[#BDE7F1] to-[#62B1ED]  bg-clip-text text-transparent'>Web Developer</span></h3>
            <p className='text-2xl max-w-[60rem] mt-10'>Passionate Software Engineer with a focus on Web development, dedicated to crafting elegant and user-friendly web applications.</p>
            {
                showContactData ? 
                    <div className='flex flex-col gap-6 mt-12'>
                        <div className='max-w-max mx-auto flex gap-4 items-center '>
                            <div>
                                <BiLogoGmail className="text-3xl text-red-600" /> 
                            </div>
                            <p className='text-lg xl:text-xl'>hazemgamaltaha3@gmail.com</p>
                        </div>
                        <a href="https://www.linkedin.com/in/hazem-gamal-0a1171254/">
                            <div className='max-w-max mx-auto flex gap-4 items-center hover:text-blue-500 duration-700 cursor-pointer'>
                                <div>
                                    <FaLinkedin className="text-3xl text-blue-500" /> 
                                </div>
                                <p className='text-lg xl:text-xl'>hazem-gamal-0a1171254</p>
                            </div>
                        </a>
                        <a href="https://github.com/HazemGamal1">
                            <div className='max-w-max mx-auto flex gap-4 items-center hover:text-slate-500 duration-700 cursor-pointer'>
                                <div>
                                    <FaGithub className="text-3xl text-white" /> 
                                </div>
                                <p className='text-lg xl:text-xl'>HazemGamal1</p>
                            </div>
                        </a>

                    </div>
                :
                    <button className='border-[1px] rounded-full border-[#585858] px-16 py-6 text-2xl mt-12 hover:bg-white hover:text-black duration-300' onClick={() => setShowContactData(!showContactData)}>Contact Me</button>
            }
        </div>
    </div>
  )
}

export default Info
