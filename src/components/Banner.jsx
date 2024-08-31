import React from 'react'
import AssignmentBanner from '../assets/AssignmentBanner.png'
const Banner = () => {
  return (
    <div className='grid grid-flow-row grid-cols-2 my-4 py-2 px-4 '>
      <div className='flex items-center justify-center'>
        <div className='gap-4 flex flex-col'>
            <h1 className='font-extrabold text-primary uppercase text-[37px]'>How much could you save?</h1>
            <p className='text-primary'>Answer the questions below to get a fixed price quotation for us to take your accountancy hassles away from you.</p>
            <div className='bg-white rounded-md w-[400px] py-5 px-8 text-center'>
                <p className='text-primary font-bold my-1 mb-2'>Is your turnover expected to be more than £85k?</p>
                <div className='flex gap-8 justify-center items-center'>
                    <button className='px-6 py-1 bg-orange text-secondary rounded-full font-bold'>Yes</button>
                    <button className='px-6 py-1 bg-orange text-secondary rounded-full font-bold'>No</button>
                </div>

            </div>
            <p className='text-tertiary'>Takes less than 30 seconds</p>
        </div>
      </div>
      <div className='flex items-center justify-center '>
        <img className='h-[400px] w-full object-contain'  alt='bannerImg' src={AssignmentBanner}/>
      </div>
    </div>
  )
}

export default Banner
