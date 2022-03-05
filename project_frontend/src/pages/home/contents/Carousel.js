import React from "react";

const Carousel = () => {
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
      <div
        id="carouselExampleControls"
        className="carousel slide relative lg:w-2/3 mx-auto my-auto"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full h-[70vh]">
            <img
              src="http://ictacademyofficial.herokuapp.com/assets/material/img/ictaku.png"
              className="block w-full"
              alt="Wild Landscape"
            />
          </div>
          <div className="carousel-item relative float-left w-full h-[70vh]">
            <img
              src="https://scontent.fcok14-1.fna.fbcdn.net/v/t1.6435-9/56587564_2705108422848955_4526248574765236224_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=dsNctgsuHXAAX-I6rOD&_nc_ht=scontent.fcok14-1.fna&oh=00_AT8h-mZ1uqfS38C3vajJz_jVKihtG0pkAcpPvw73ULRhfg&oe=6248D40B"
              className="block w-full"
              alt="Camera"
            />
          </div>
          <div className="carousel-item relative float-left w-full h-[70vh]">
            <img
              src="https://scontent.fcok14-1.fna.fbcdn.net/v/t1.6435-9/67704105_2941606415865820_3038612073983508480_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=GcH-mI1UGFwAX9JWq3V&_nc_ht=scontent.fcok14-1.fna&oh=00_AT-VNR-2oaHtLGCojVWh4ljA5xIBna9clD-HY1zrLWYI0A&oe=62476498"
              className="block w-full"
              alt="grp image"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleControls"
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
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
