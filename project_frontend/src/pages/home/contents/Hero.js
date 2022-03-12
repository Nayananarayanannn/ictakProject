import React, { useEffect } from "react";
import Aos from "aos";

const Hero = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <section
      className="relative bg-gradient-to-r from-[#73DAFD] to-[#06378C] overflow-hidden"
      style={{
        minHeight: "75vh",
      }}
    >
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover blur-[2px"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')",
        }}
      >
        <span className="w-full h-full absolute opacity-10 bg-black"></span>
      </div>
      <div className="relative px-6 py-12 md:px-12 text-center lg:text-left ">
        <div className="container mx-auto xl:px-32">
          <div className="grid lg:grid-cols-2 flex items-center">
            <div
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="2000"
              className="md:mt-12 lg:mt-0 mb-12 lg:mb-0"
            >
              <div className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 bg-[#FFFFFFA8] backdrop-blur-sm">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">
                  Welcome to <br />
                  <span className="text-[#036BCB]">ICT Academy of Kerala</span>
                  <p className="text-[#000729] text-1xl md:text-2xl xl:text-xl">
                    Bridging the Skills gap, Building the Nation's Future !
                  </p>
                </h1>
                <a
                  className="inline-block px-7 py-3 mb-2 md:mb-0 md:mr-2 bg-[#00000A] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="/courses"
                  role="button"
                >
                  Get started
                </a>
                <a
                  className="inline-block px-7 py-3 bg-transparent text-[#036BCB] font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="/about-us"
                  role="button"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div
              className="md:mb-12 lg:mb-6 bg-transparent "
            >
              <img
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                className="w-5/6 rounded-lg shadow-lg md:mx-auto lg:mx-0 "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
