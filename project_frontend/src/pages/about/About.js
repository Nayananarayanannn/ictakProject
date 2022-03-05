import React from 'react';
import Middle1 from './contents/Middle1';
import TopSection from './contents/TopSection';
import BottomSection from './contents/BottomSection';



function About() {
    return (
      <div className='overflow-hidden'>
        <TopSection/>
        <Middle1 />
        <BottomSection />
       </div>
    );
}


export default About;
