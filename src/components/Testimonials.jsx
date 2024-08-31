import React from 'react'
import person from '../assets/person.jpeg'

const Testimonials = () => {
    const process=[
        {id:1, image: person , desc:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr'},
        {id:2, image: person, desc:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr'},
    ]
  return (
    <div className='my-14 px-6 bg-[#E7F1F2] py-10 rounded-lg'>
    <h1 className='text-primary font-bold text-[32px] pb-5'>Testimonials</h1>
    <div className='my-8 mt-12 px-14'>
        <ul className='grid grid-cols-2 grid-flow-row gap-28 text-center'>
            {process.map((item) => {
                return (
                    <div className='bg-white  flex justify-center items-center py-6 rounded-md'>
                    <li key={item.id} className='flex w-[320px] flex-col justify-center items-center gap-4'>
                        <div className='flex gap-4 items-center'>
                        <img src={item.image} alt='testimonial' className='rounded-full w-12 h-12'/>
                        <span className='font-bold text-primary'>Josh brollins</span>
                        </div>
                        <p className='text-tertiary'>{item.desc}</p>
                    </li>
                    </div>
                )
            })}
        </ul>
    </div>
</div>
  )
}

export default Testimonials;
