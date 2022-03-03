import React from 'react'
import Hero from '../components/home/Hero';
import Announcement from '../components/Announcement';
import About from '../components/home/About';
import Landing from '../components/home/Landing';
import Carousel from '../components/home/Carousel';

const HomePage = () => {
  return (
    <>
    <Hero />
    <Announcement />
    <About />
    <Carousel />
    <Landing />
    </>
  )
}

export default HomePage