import React from 'react'
import About from './contents/About';
import Announcement from './contents/Announcement';
import Carousel from './contents/Carousel';
import Hero from './contents/Hero';
import Courses from './contents/Courses';
import Aos from "aos";
import Landing from './contents/Landing';

const HomePage = () => {
  console.log(localStorage.getItem('admin'))
  return (
    <>
    <Hero />
    <Announcement />
    <About />
    <Carousel />
    <Courses/>
    <Landing/>
    </>
  )
}

export default HomePage