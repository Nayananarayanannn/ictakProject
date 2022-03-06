import React, { useEffect } from "react";
import Aos from "aos";

function Partnership(props) {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div>
      <div className="coursesList bg-gray-300">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="courseListHead block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 bg-[#FFFFFFA8] backdrop-blur-sm"
        >
          <h1>Our Training Service Provider</h1>
        </div>
        <img className="mx-auto" src="https://i1.wp.com/ictkerala.org/wp-content/uploads/2020/05/Img.jpg?w=1080&ssl=1" alt="partnership"/>
        
      </div>
      <section className=" relative py-20 bg-blue-300">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-blue-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="partnershipForms text-center text-4xl text-white font-bold ">
        <a href="https://ictkerala.org/wp-content/uploads/2020/06/ICTAK-TSP-002-1.pdf"><h2 className="hover:text-blue-100">Download partnership Proposal</h2></a>
        <br/>
        <a href ="https://docs.google.com/forms/d/1H-UmE62LByyHqlzq88Ozn9bUqaxc08G9ne70c-Tiun4/viewform?edit_requested=true"><h2 className="hover:text-blue-100">Click here to fill the form</h2></a>
      </div>
         
    </section>

      
    </div>
  );
}

export default Partnership;
