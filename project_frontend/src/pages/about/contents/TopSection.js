import React,{useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import video from '../../../assets/video/Lines - 5224.mp4';

function TopSection() {
    useEffect(() => {
        Aos.init({});  
      }, []);
    return (
        
<div className="bg-indigo-900 relative overflow-hidden h-screen">
    <video className="absolute h-full w-full object-cover" autoPlay loop muted >
            <source src={video} type="video/mp4" />
          </video>
    <div className="container border-4 border-white rounded-lg mx-auto w-4/5 relative z-10 flex items-center py-12 my-5 md:my-14">
        <div className="w-full flex flex-col items-center justify-between relative z-10">
        <p data-aos="fade-up"
     data-aos-duration="1000" className="flex flex-col max-w-lg font-extrabold text-lg mt-6 text-white bg-gradient-to-r from-blue-800 to-blue-300 py-3 px-4 rounded">
            About Us
            </p>
            <p data-aos="fade-up"
     data-aos-duration="1200" className="flex flex-col items-center font-extrabold text-4xl text-center md:text-6xl text-white">
            Want to find out a bit more about ICT Academy?Read on... 
            </p>
            <p data-aos="fade-up"
     data-aos-duration="1400" className="flex flex-col max-w-lg text-center items-center font-extrabold text-lg mt-6 text-white">
            ICT Academy of Kerala is a Social Enterprise created in a Public
            Private Partnership model (PPP) for imparting ICT skills to the
            youths of Kerala and improve their employability opportunities in
            the Industry. The Company is supported by Govt. of India , partnered
            by Govt. of Kerala and the IT industry.
            </p>
        </div>
    </div>
</div>

    );
}

export default TopSection;