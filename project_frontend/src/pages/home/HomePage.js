import React from 'react'
import About from './contents/About';
import Announcement from './contents/Announcement';
import Carousel from './contents/Carousel';
import Hero from './contents/Hero';
import Courses from './contents/Courses';
import Aos from "aos";
import Landing from './contents/Landing';

const HomePage = () => {
  localStorage.setItem('admin',false)
  console.log(localStorage.getItem('admin'))
  return (
    <div className='overflow-hidden'>
    <Hero />
    <Announcement />
    <About />
    <Carousel />
    <Courses/>
    <Landing/>
    </div>
  )
}

export default HomePage
