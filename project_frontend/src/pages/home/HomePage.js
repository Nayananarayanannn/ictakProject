import React from 'react'
import About from './contents/About';
import Announcement from './contents/Announcement';
import Carousel from './contents/Carousel';
import Hero from './contents/Hero';
import Landing from './contents/Landing';

const HomePage = () => {
  return (
    <>
    <Hero />
    <Announcement />
    <About />
    <Carousel />
    <Landing/>
    </>
  )
}

export default HomePage