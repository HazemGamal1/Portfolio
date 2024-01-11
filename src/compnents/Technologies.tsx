import { FaReact  } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";

const Technologies = () => {
  return (
    <div className='text-center mt-24'>
        <h1 className='text-4xl xl:text-6xl font-bold mt-12 uppercase'>Technologies</h1>
        <div className='flex justify-around mt-24'>
        <FaReact className="text-5xl xl:text-8xl"/>
        <SiTailwindcss className="text-5xl xl:text-8xl"/>
        <h1 className='text-3xl xl:text-8xl select-none'>.NET CORE</h1>
        </div>
    </div>
  )
}

export default Technologies
