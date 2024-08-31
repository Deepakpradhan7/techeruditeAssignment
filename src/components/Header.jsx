import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'

const Header = () => {
  return (
    <div className='bg-[#E7F1F2] py-4 px-6'>
      <Navbar/>
      <Banner/>
    </div>
  )
}

export default Header
