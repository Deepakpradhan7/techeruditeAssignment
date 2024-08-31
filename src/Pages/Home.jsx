import React from 'react'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Banner from '../components/Banner'
import AboutUs from '../components/AboutUs'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import Blogs from '../components/Blogs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='bg-white md:px-12 max-w-screen-2xl mx-auto md:py-8'>
      <Header/>
      <Services/>
      <AboutUs/>
      <Process/>
      <Testimonials/>
      <Blogs/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
