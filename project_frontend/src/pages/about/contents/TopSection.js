import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";



function TopSection() {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (

        <div className=" relative overflow-hidden h-screen">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" className="absolute h-full w-full object-cover" alt='img' />


            <div data-aos="fade-down"
        data-aos-duration="1000" className="container border-2 border-white bg-[#FFFFFFA8] rounded-lg mx-auto w-3/6 relative z-10 flex items-center py-1  md:my-14">
                <div className="w-full flex flex-col items-center justify-between relative z-10">
                    <p  className="flex flex-col max-w-lg font-extrabold text-lg mt-6 text-black py-3 px-4 rounded">
                        About Us
                    </p>
                    <p data-aos="zoom-in"
                        data-aos-duration="1000" className="flex flex-col items-center font-extrabold text-1xl text-center md:text-6xl text-[#036BCB]">
                        Want to find out a bit more about ICT Academy?
                    </p>
                    <p className="flex flex-col max-w-lg text-center items-center font-extrabold text-md mt-6 text-black">Read On...</p>
                    <p  className="flex flex-col max-w-lg text-center items-center font-extrabold text-lg mt-6 text-black">
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
