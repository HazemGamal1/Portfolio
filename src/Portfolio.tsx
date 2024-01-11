import { useState, useRef } from 'react'
import { FaXTwitter, FaFacebookF, FaGithub , FaReact  } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import bg from '/Background Pattern.png'
import img from '/Avatar=22.png'
import Info from './compnents/Info';
import Nav from './compnents/Nav';
import AboutMe from './compnents/AboutMe';
import Technologies from './compnents/Technologies';
import Langs from './compnents/Langs';
function Portfolio() {
  
  return (
    <div className='relative'>
      <Nav />
      <div className='grid place-content-center pt-24'>
        <Info />
        <AboutMe />
        <Technologies />
        <Langs />
      </div>
      {/* Abstract background image ...just decoration */}
      <div>
        <img src={bg} alt="" className='absolute top-0 right-0 -z-10'/>
      </div>
    </div>
  )
}

export default Portfolio
