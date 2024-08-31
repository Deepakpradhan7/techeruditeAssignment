import React from 'react'
import Assignment1logo from '../assets/Assignment1logo.png'
const Navbar = () => {
    const navItems=[
        {id:1,item: "Services", path: "services"},
        {id:2,item: "About Us", path: "aboutUs"},
        {id:3,item: "Blogs", path: "blogs"},
        {id:4,item: "Case Study", path: "caseStudy"},
    ]
  return (
    <nav>
      <div className='flex justify-between items-center'>
        <div className='' >
            <a href='/'>
            <img className='w-28 inline-block items-center' src={Assignment1logo} alt='logo'/>
            </a>
        </div>

        <div >
        <ul className='flex gap-6 justify-center items-center'>
                {navItems.map((item)=>{
                    return(
                        <li key={item.id}>{item.item}</li>
                    )
                })}
                <button className='bg-orange px-4 py-3 rounded-full text-secondary uppercase font-bold text-sm'> 
                <li>Contact Us</li>
                </button>
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
