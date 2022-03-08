import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";



function TopSection() {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (

        <div className="coursesList bg-gray-300">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="courseListHead block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 bg-[#FFFFFFA8] backdrop-blur-sm"
        >
          <h1>About Us</h1>
        </div>
        </div>

    );
}

export default TopSection;
