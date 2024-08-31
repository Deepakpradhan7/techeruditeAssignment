import React from 'react'
import AboutUsImg from '../assets/AboutUsImg.jpg'
const AboutUs = () => {
  return (
    <div className='my-4 px-6 bg-[#E7F1F2] mt-20 flex items-center justify-center rounded-lg'>
    <div className='my-8 mt-12 grid grid-cols-3 grid-flow-col gap-4'>
    
      <div className='flex flex-col justify-center gap-4 col-span-1 pl-20'>
        <h1 className='text-primary font-bold text-[32px]'>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
        <button className='bg-orange font-bold rounded-md text-secondary px-5 py-2 self-start'>About Us</button>
      </div>
  
      
      <div className='col-span-2 '>
        <img src={AboutUsImg} alt="About Us" className='h-[350px] w-full object-cover px-[150px] ' />
      </div>
    </div>
  </div>
  
  )
}

export default AboutUs
