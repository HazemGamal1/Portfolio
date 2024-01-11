import React from 'react'

const AboutMe = () => {
  return (
    <div className='text-center mt-24 px-2' id='aboutMe'>
          <h1 className='text-4xl xl:text-6xl font-bold mt-12 uppercase'>About Me</h1>
          <h3 className='text-xl xl:text-3xl font-semibold mt-4'><span className='bg-gradient-to-r from-[#BDE7F1] to-[#62B1ED]  bg-clip-text text-transparent'>El SHOROUK ACADEMY</span> Student</h3>
          <p className='aboutMeTxt'>As a passionate software engineer, I thrive on the intricate dance between logic and creativity. Currently immersed in the dynamic world of Web Development, my expertise centers around <span className='bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent font-bold'>React JS</span> ,<span className='bg-gradient-to-r from-[#80e2fb] to-[#38BDF8]  bg-clip-text text-transparent font-bold'>Tailwind CSS </span>  & <span className='bg-gradient-to-r from-violet-500 to-violet-600 bg-clip-text text-transparent font-bold'>.NET CORE API</span> , where I seamlessly blend technology with innovation.</p>
          <p className='aboutMeTxt'>With a fervor for crafting elegant solutions, I navigate the ever-evolving landscape of software development. My journey involves translating concepts into code, creating seamless user experiences, and constantly pushing the boundaries of what's possible</p>
    </div>
  )
}

export default AboutMe
