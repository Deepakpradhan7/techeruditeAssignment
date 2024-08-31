import React from 'react'

const Process = () => {
    const process=[
        {id:1, item: 'Step 1', desc:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr'},
        {id:2, item: 'Step 2', desc:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr'},
        {id:3, item: 'Step 3', desc:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr'},
    ]
  return (
    <div className='my-14 px-6'>
    <h1 className='text-primary font-bold text-[32px]'>Process</h1>
    <div className='my-8 mt-12 px-14'>
        <ul className='grid grid-cols-3 grid-flow-row gap-28 text-center'>
            {process.map((item) => {
                return (
                    <li key={item.id} className='flex w-[320px] flex-col justify-center items-center gap-4'>
                        <h1 className='text-primary font-bold text-lg'>{item.item}</h1>
                        <p className='text-tertiary'>{item.desc}</p>
                    </li>
                )
            })}
        </ul>
    </div>
</div>
  )
}

export default Process
