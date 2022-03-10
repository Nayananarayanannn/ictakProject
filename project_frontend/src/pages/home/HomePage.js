import React from 'react'
import About from './contents/About';
import Announcement from './contents/Announcement';
import Carousel from './contents/Carousel';
import CoursesList from './contents/CourseList';
import Hero from './contents/Hero';
import Landing from './contents/Landing';

const HomePage = () => {
  console.log(localStorage.getItem('admin'))
  return (
    <>
    <Hero />
    <Announcement />
    <About />
    <Carousel />
    <CoursesList/>
    <Landing/>
    </>
  )
}

export default HomePage