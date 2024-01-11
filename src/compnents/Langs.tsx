import React from 'react'

const Langs = () => {
  return (
    <div className='text-center mt-24 pb-24'>
        <h1 className='text-4xl xl:text-6xl font-bold mt-12 uppercase'>Programming Languages</h1>
        <div className='flex justify-around mt-24'>
        <h1 className='langTxt hover:text-violet-500 duration-500'>C#</h1>
        <h1 className='langTxt hover:text-yellow-300 duration-500'>Javascript</h1>
        <h1 className='langTxt hover:text-blue-500 duration-500'>Typescript</h1>
        </div>
    </div>
  )
}

export default Langs
