import React, { useEffect } from "react";
import Aos from "aos";

const Carousel = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <section className="relative py-20 bg-blue-300">
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
      <div data-aos="flip-down" data-aos-duration="800" className=" w-full md:w-9/12 mx-auto">
        <div
          id="carouselExampleCaptions"
          className="carousel slide relative"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
              <img
                src="http://ictacademyofficial.herokuapp.com/assets/material/img/ictaku.png"
                className="object-fill lg:h-[800px] w-full"
                alt="..."
              />
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="https://scontent.fcok14-1.fna.fbcdn.net/v/t1.6435-9/56587564_2705108422848955_4526248574765236224_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=dsNctgsuHXAAX-I6rOD&_nc_ht=scontent.fcok14-1.fna&oh=00_AT8h-mZ1uqfS38C3vajJz_jVKihtG0pkAcpPvw73ULRhfg&oe=6248D40B
                "
                className="object-fill lg:h-[800px] w-full"
                alt="..."
              />
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="https://scontent.fcok14-1.fna.fbcdn.net/v/t1.6435-9/67704105_2941606415865820_3038612073983508480_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=GcH-mI1UGFwAX9JWq3V&_nc_ht=scontent.fcok14-1.fna&oh=00_AT-VNR-2oaHtLGCojVWh4ljA5xIBna9clD-HY1zrLWYI0A&oe=62476498"
                className="object-fill lg:h-[800px] w-full"
                alt="..."
              />
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
