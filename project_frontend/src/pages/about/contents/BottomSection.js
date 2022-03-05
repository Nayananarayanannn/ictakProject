import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BottomSection() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      {/* vision starts here */}
      <div className="mx-auto container py-12 px-6 xl:px-0 flex justify-center items-center flex-col mt-14">
        <div className="flex justify-between bg-gray-50 items-stretch flex-row">
          <div className="flex items-center bg-cyan-600 justify-center">
            <p className="transform flex flex-shrink-0 -rotate-90 text-6xl font-semibold tracking-wide leading-normal text-white">
              vision
            </p>
          </div>
          <div
            data-aos="flip-left"
            data-aos-duration="1200"
            className="flex justify-center border-black border-2 items-start flex-col xl:w-2/5 md:w-5/12 xl:px-7 px-6 md:px-0 md:py-0 py-5"
          >
            <div className="xl:mt-4 mt-2">
              <p className="text-base xl:text-md leading-7 italic text-gray-600 pr-4">
                To emerge as the single-point establishment for all the ICT
                related capability building in the State
              </p>
            </div>
          </div>
          <div className="hidden md:block h-44 md:h-60 xl:h-92">
            <img
              className="hidden h-full xl:block"
              src="https://st4.depositphotos.com/11337508/27781/v/450/depositphotos_277816546-stock-illustration-business-vision-business-team-searching.jpg"
            />
            <img
              className="xl:hidden h-full"
              src="https://st4.depositphotos.com/11337508/27781/v/450/depositphotos_277816546-stock-illustration-business-vision-business-team-searching.jpg"
            />
          </div>
        </div>
        <div className="md:hidden mt-6 w-full">
          <img
            src="https://st4.depositphotos.com/11337508/27781/v/450/depositphotos_277816546-stock-illustration-business-vision-business-team-searching.jpg"
            className="w-full"
          />
        </div>
      </div>

      {/* patron starts here */}
      <div className="py-12 flex flex-col justify-center items-center space-y-10">
        <div className="flex flex-col justify-center items-center space-y-2">
          <h1 className="text-sm md:text-base font-semibold leading-none text-gray-600">
            PATRONS
          </h1>
          <div className="w-9 h-0.5 bg-gray-300" />
        </div>
        <div className="flex justify-center items-center space-x-4 md:space-x-6 lg:space-x-16">
          <div className="w-25 h-[8vh] ">
            <img
              src="https://i1.wp.com/ictkerala.org/wp-content/uploads/2020/05/ibs.png?resize=150%2C150&ssl=1"
              alt="logo 1"
            />
          </div>
          <div className="w-25 h-[8vh] ">
            <img
              src="https://i2.wp.com/ictkerala.org/wp-content/uploads/2019/01/sowparnika.jpg?resize=150%2C150&ssl=1"
              alt="logo 2"
            />
          </div>
          <div className="w-25 h-[8vh] ">
            <img
              src="https://i1.wp.com/ictkerala.org/wp-content/uploads/2018/12/Govt.of_india-1.jpg?resize=150%2C150&ssl=1"
              alt="logo 3"
            />
          </div>
          <div className="w-25 h-[8vh] ">
            <img
              src="https://i1.wp.com/ictkerala.org/wp-content/uploads/2018/12/Govt.of_Kerala-1.jpg?resize=150%2C150&ssl=1"
              alt="logo 4"
            />
          </div>
          <div className="w-25 h-[8vh]  ">
            <img
              src="https://i1.wp.com/ictkerala.org/wp-content/uploads/2018/12/TCS.jpg?resize=150%2C150&ssl=1"
              alt="logo 5"
            />
          </div>
          <div className="w-25 h-[8vh]  ">
            <img
              src="https://i1.wp.com/ictkerala.org/wp-content/uploads/2018/12/ustglobal.jpg?resize=150%2C150&ssl=1"
              alt="logo 6"
            />
          </div>
          <div className="w-25 h-[8vh]  ">
            <img
              src="https://i2.wp.com/ictkerala.org/wp-content/uploads/2018/12/Questglobal.jpg?resize=150%2C150&ssl=1"
              alt="logo 7"
            />
          </div>
        </div>
      </div>

      {/* leader */}
      <div className="flex items-center justify-between h-full w-full mt-12 absolute z-0">
        <div className="w-1/3 bg-white h-full" />
        <div className="w-4/6 ml-16 bg-gray-100 h-[90vh] mt-5" />
      </div>
      <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container mt-12 relative z-40">
        <h1 className="text-5xl font-bold xl:block hidden leading-tight text-cyan-600">
          Hear from our
          <br />
          Leaders!!
        </h1>
        <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-cyan-600">
          Hear from our leaders
        </h1>
        <div className="flex">
          <div className="mt-14 md:flex">
            <div className="relative lg:w-1/4 sm:w-96 h-[66vh] md:h-70 xl:h-92 ">
              <img
                src="https://media-exp1.licdn.com/dms/image/C5603AQEgfYgb48xFMQ/profile-displayphoto-shrink_200_200/0/1620233227538?e=1651104000&v=beta&t=G-kdwZhwyGrDvBu-dsczTOQMm-MOl737DxpCoN1QlZM"
                alt="image of profile"
                className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded "
              />
              <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full hover:bg-cyan-500">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                  alt="commas"
                />
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between"
            >
              <div>
                <h1 className="text-2xl font-semibold xl:leading-loose text-cyan-600">
                  Some of the best work that was done!
                </h1>
                <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                  ICT Academy is a great example of not-for-profit partnership
                  between Government, Academia and Industry, to bridge the
                  current skills gap. I am excited to volunteer to be part of
                  this opportunity to help develop the next generation along
                  with other eminent leaders of the Board and the team of ICT
                  Academy. We shall strive to create an impact that will benefit
                  the Educators, Students, Industry and the Community at large
                </p>
              </div>
              <div className="md:mt-0 mt-8">
                <p className="text-base font-medium leading-4 text-cyan-600">
                  Tony Thomas
                </p>
                <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                  Chairman of the board
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative" style={{ transform: "translateX(0%)" }}>
          <div className="mt-14 md:flex">
            <div className="relative lg:w-1/4 sm:w-96 xl:h-92 h-[8vh]0">
              <img
                src="https://i0.wp.com/ictkerala.org/wp-content/uploads/2019/01/Mr.-Santhosh.jpg?resize=768%2C924&ssl=1"
                alt="image of profile"
                className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded "
              />
              <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 hover:bg-cyan-500 rounded-full">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                  alt="commas"
                />
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between"
            >
              <div>
                <h1 className="text-2xl font-semibold xl:leading-loose text-cyan-600">
                  Industry Immersion in Strategy and Transaction
                </h1>
                <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                  We are a Social Enterprise created in a Public Private
                  Partnership model (PPP) for imparting ICT skills to the youths
                  of Kerala and improve their employability opportunities in the
                  Industry. The Company is supported by Govt. of India ,
                  partnered by Govt. of Kerala and the ICT industry.
                </p>
              </div>
              <div className="md:mt-0 mt-8">
                <p className="text-base font-medium leading-4 text-cyan-600">
                  Santhosh Chandrasekara Kurup
                </p>
                <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                  Chief Executive Officer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* team starts here */}
      <div className="p-8 w-full bg-gray-100 border-2 shadow-xl box-border dark:bg-grey-600 rounded-lg shadow mx-auto ">
        <p className="text-center text-3xl font-bold text-cyan-600 dark:text-white">
          Professional team
        </p>
        <p className="text-center mb-12 text-xl font-normal text-gray-500 dark:text-gray-200">
          Meet the best team in world
        </p>
        <Slider
          dots={true}
          slidesToShow={2}
          slidesToScroll={2}
          autoplay={true}
          autoplaySpeed={2000}
        >
          <div className="p-4">
            <div className="text-center mb-4 opacity-90">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="https://i2.wp.com/ictkerala.org/wp-content/uploads/2019/10/GOPI1.jpg?w=250&ssl=1"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-cyan-600 dark:text-white">
                Mr. Gopinathan Nair
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Head-Finance & Admin
              </p>
            </div>
            <div className="w-full flex justify-center pt-5 pb-5">
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          {/* 3 */}
          <div className="p-4">
            <div className="text-center mb-4 opacity-90">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="https://i2.wp.com/ictkerala.org/wp-content/uploads/2019/10/nidhin.jpg?w=250&ssl=1"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-cyan-600 dark:text-white">
                Mr. Nidhin Das
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Company Secretary & Lead – HR
              </p>
            </div>
            <div className="w-full flex justify-center pt-5 pb-5">
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          {/* 5 */}
          <div className="p-4">
            <div className="text-center mb-4 opacity-90">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="https://i0.wp.com/ictkerala.org/wp-content/uploads/2020/07/Sreekumar.png?fit=250%2C300&ssl=1"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-cyan-600 ">Mr. Sreekumar K V</p>
              <p className="text-xl text-gray-500 font-light">
                Head – Retail Operating Unit
              </p>
            </div>
            <div className="w-full flex justify-center pt-5 pb-5">
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          {/* 6 */}
          <div className="p-4">
            <div className="text-center mb-4 opacity-90">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="https://i2.wp.com/ictkerala.org/wp-content/uploads/2020/08/sreekanth-1.png?fit=250%2C300&ssl=1"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-cyan-600 dark:text-white">
                Dr. Sreekanth.D
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Senior Knowledge Officer
              </p>
            </div>
            <div className="w-full flex justify-center pt-5 pb-5">
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          {/* 7 */}
          <div className="p-4">
            <div className="text-center mb-4 opacity-90">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="https://i1.wp.com/ictkerala.org/wp-content/uploads/2019/10/sreeraj1.jpg?fit=250%2C250&ssl=1"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-cyan-600 dark:text-white">
                Mr. Sreeraj.A
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Senior IT Infrastructure
              </p>
            </div>
            <div className="w-full flex justify-center pt-5 pb-5">
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          {/* 8 */}
          <div className="p-4">
            <div className="text-center mb-4 opacity-90">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="https://i1.wp.com/ictkerala.org/wp-content/uploads/2019/10/sajan1.jpg?w=250&ssl=1"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-cyan-600 dark:text-white">
                Mr. Sajan.M
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Head – Academic Relations
              </p>
            </div>
            <div className="w-full flex justify-center pt-5 pb-5">
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          {/* 9 */}
          <div className="p-4">
            <div className="text-center mb-4 opacity-90">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="https://i0.wp.com/ictkerala.org/wp-content/uploads/2019/10/prasanth.jpg?w=250&ssl=1"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-cyan-600 dark:text-white">
                Mr. Prasanth.K.N
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Head – Corporate Relationship
              </p>
            </div>
            <div className="w-full flex justify-center pt-5 pb-5">
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          {/* 10 */}
          <div className="p-4">
            <div className="text-center mb-4 opacity-90">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="https://i1.wp.com/ictkerala.org/wp-content/uploads/2019/10/abhilash-copy.jpg?fit=250%2C250&ssl=1"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-cyan-600 dark:text-white">
                Mr. Abilash R
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Head-Government Operating Unit
              </p>
            </div>
            <div className="w-full flex justify-center pt-5 pb-5">
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          {/* 11 */}
          <div className="p-4">
            <div className="text-center mb-4 opacity-90">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="https://i1.wp.com/ictkerala.org/wp-content/uploads/2019/10/Sinjith1.jpg?fit=250%2C250&ssl=1"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-cyan-600 dark:text-white">
                Mr. Sinjith.S
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Associate Manager -Govt OU
              </p>
            </div>
            <div className="w-full flex justify-center pt-5 pb-5">
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          {/* 12 */}
          <div className="p-4">
            <div className="text-center mb-4 opacity-90">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="https://i2.wp.com/ictkerala.org/wp-content/uploads/2019/10/Thomas-1.jpg?fit=250%2C250&ssl=1"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-cyan-600 dark:text-white">
                Mr. Thomas Joseph
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Associate Manager – Govt OU
              </p>
            </div>
            <div className="w-full flex justify-center pt-5 pb-5">
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          {/* 13 */}
          <div className="p-4">
            <div className="text-center mb-4 opacity-90">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="https://i0.wp.com/ictkerala.org/wp-content/uploads/2020/07/Kailas.png?fit=250%2C300&ssl=1"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-cyan-600 dark:text-white">
                Mr. Kailas Karthikeyan
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Assistant Manager – Marketing
              </p>
            </div>
            <div className="w-full flex justify-center pt-5 pb-5">
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          {/* 14 */}
          <div className="p-4">
            <div className="text-center mb-4 opacity-90">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="https://i0.wp.com/ictkerala.org/wp-content/uploads/2020/07/priya.png?fit=250%2C300&ssl=1"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-cyan-600 dark:text-white">
                Ms. Priya A
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Accountant
              </p>
            </div>
            <div className="w-full flex justify-center pt-5 pb-5">
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          {/* 14 */}
          <div className="p-4">
            <div className="text-center mb-4 opacity-90">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="https://i0.wp.com/ictkerala.org/wp-content/uploads/2019/10/Nitha.jpg?fit=250%2C250&ssl=1"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-cyan-600 dark:text-white">
                Ms. Nitha Anilkumar
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Knowledge Officer
              </p>
            </div>
            <div className="w-full flex justify-center pt-5 pb-5">
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          {/* 15 */}
          <div className="p-4">
            <div className="text-center mb-4 opacity-90">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="https://i0.wp.com/ictkerala.org/wp-content/uploads/2019/10/remys.jpg?w=250&ssl=1"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-cyan-600 dark:text-white">
                Ms. Remya.U L
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Knowledge Officer
              </p>
            </div>
            <div className="w-full flex justify-center pt-5 pb-5">
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          {/* 16 */}
          <div className="p-4">
            <div className="text-center mb-4 opacity-90">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="https://i0.wp.com/ictkerala.org/wp-content/uploads/2019/10/meera.jpg?fit=250%2C250&ssl=1"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-cyan-600 dark:text-white">
                Ms. Meera Mathew
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Knowledge Officer
              </p>
            </div>
            <div className="w-full flex justify-center pt-5 pb-5">
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          {/* 17 */}
          <div className="p-4">
            <div className="text-center mb-4 opacity-90">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="https://i0.wp.com/ictkerala.org/wp-content/uploads/2019/10/Aish.jpg?w=250&ssl=1"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-cyan-600 dark:text-white">
                Ms. Aishwarya L
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Project Co-ordinator & Junior Trainer
              </p>
            </div>
            <div className="w-full flex justify-center pt-5 pb-5">
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          {/* 18 */}
          <div className="p-4">
            <div className="text-center mb-4 opacity-90">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="https://i1.wp.com/ictkerala.org/wp-content/uploads/2019/10/Nitya.jpg?fit=250%2C250&ssl=1"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-cyan-600 dark:text-white">
                Ms. Nithya Jose
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Project Co-ordinator & Junior Trainer
              </p>
            </div>
            <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </a>{" "}
              <a href="#">
                <svg
                  width="10"
                  height="30"
                  fill="currentColor"
                  className="text-xl hover:text-cyan-600 dark:hover:text-white transition-colors duration-200"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="30"
                  fill="currentColor"
                  className="text-xl hover:text-cyan-600 dark:hover:text-white transition-colors duration-200"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="10"
                  height="30"
                  viewBox="0 0 30 30"
                  className="text-xl hover:text-cyan-600 dark:hover:text-white transition-colors duration-200"
                  fill="currentColor"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* 19 */}
          <div className="p-4">
            <div className="text-center mb-4 opacity-90">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="https://i2.wp.com/ictkerala.org/wp-content/uploads/2020/07/John-.png?fit=250%2C300&ssl=1"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-cyan-600 dark:text-white">
                Mr. John J. Padamadan
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Junior Knowledge Officer
              </p>
            </div>
            <div className="w-full flex justify-center pt-5 pb-5">
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="mx-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </Slider>
      </div>

      {/* marketing partners starts here */}
      <div
        data-aos-easing="linear"
        data-aos-duration="2000"
        className="w-full flex items-center justify-center py-16 md:py-12 bg-gradient-to-r from-indigo-700 to-purple-500 rounded-lg"
      >
        <p className="text-center text-3xl font-bold text-white">
          Marketing Partners
        </p>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
          <div
            data-aos="flip-up"
            data-aos-duration="1200"
            className="rounded  "
          >
            <img
              className="h-[35vh] rounded-3xl"
              src="http://ictacademyofficial.herokuapp.com/assets/img/c1.jpg"
              alt="img"
            />
          </div>
          <div data-aos="flip-up" data-aos-duration="1200" className="rounded">
            <img
              className="h-[35vh] rounded-3xl"
              src="http://ictacademyofficial.herokuapp.com/assets/img/c2.png"
              alt="img"
            />
          </div>
          <div data-aos="flip-up" data-aos-duration="1200" className="rounded ">
            <img
              className="h-[35vh] rounded-3xl"
              src="http://ictacademyofficial.herokuapp.com/assets/img/c3.png"
              alt="img"
            />
          </div>
          <div data-aos="flip-up" data-aos-duration="1200" className="rounded ">
            <img
              className="h-[35vh] rounded-3xl"
              src="http://ictacademyofficial.herokuapp.com/assets/img/c4.png"
              alt="img"
            />
          </div>
        </div>
      </div>

      {/* industrial partners start here */}
      <div className="p-8">
        <p className="text-center text-3xl font-bold text-black">
          Industrial Partners
        </p>
        <Slider
          dots={false}
          slidesToShow={7}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={1500}
        >
          <div className="w-25 h-[18vh] ">
            <img
              src="https://i2.wp.com/ictkerala.org/wp-content/uploads/2018/12/Oracle.jpg?resize=150%2C150&ssl=1"
              alt="logo 1"
            />
          </div>
          <div className="w-25 h-[18vh] ">
            <img
              src="https://i1.wp.com/ictkerala.org/wp-content/uploads/2018/12/aws.jpg?resize=150%2C150&ssl=1"
              alt="logo 2"
            />
          </div>
          <div className="w-25 h-[18vh] ">
            <img
              src="https://i1.wp.com/ictkerala.org/wp-content/uploads/2018/12/isro.jpg?resize=150%2C150&ssl=1"
              alt="logo 3"
            />
          </div>
          <div className="w-25 h-[18vh] ">
            <img
              src="https://i0.wp.com/ictkerala.org/wp-content/uploads/2018/12/Salesforce.jpg?resize=150%2C150&ssl=1"
              alt="logo 4"
            />
          </div>
          <div className="w-25 h-[20vh]  ">
            <img
              src="https://i0.wp.com/ictkerala.org/wp-content/uploads/2018/12/EY.jpg?resize=150%2C150&ssl=1"
              alt="logo 5"
            />
          </div>
          <div className="w-25 h-[18vh]  ">
            <img
              src="https://i0.wp.com/ictkerala.org/wp-content/uploads/2018/12/TATAelxsi.jpg?resize=150%2C150&ssl=1"
              alt="logo 6"
            />
          </div>
          <div className="w-25 h-[18vh]  ">
            <img
              src="https://i0.wp.com/ictkerala.org/wp-content/uploads/2018/12/Speridian.jpg?resize=150%2C150&ssl=1"
              alt="logo 7"
            />
          </div>
          <div className="w-25 h-[18vh]  ">
            <img
              src="https://i0.wp.com/ictkerala.org/wp-content/uploads/2018/12/suntec.jpg?resize=150%2C150&ssl=1"
              alt="logo 8"
            />
          </div>
          <div className="w-25 h-[18vh]  ">
            <img
              src="https://i0.wp.com/ictkerala.org/wp-content/uploads/2018/12/Gtech.jpg?resize=150%2C150&ssl=1"
              alt="logo 9"
            />
          </div>
          <div className="w-25 h-[18vh]  ">
            <img
              src="https://i2.wp.com/ictkerala.org/wp-content/uploads/2018/12/Nasscom.jpg?resize=150%2C150&ssl=1"
              alt="logo 10"
            />
          </div>
          <div className="w-25 h-[18vh]  ">
            <img
              src="https://i1.wp.com/ictkerala.org/wp-content/uploads/2018/12/Google.jpg?resize=150%2C150&ssl=1"
              alt="logo 11"
            />
          </div>
        </Slider>
      </div>

      {/* Knowledge partners start here */}
      <div className="p-8">
        <p className="text-center text-3xl font-bold text-black dark:text-white">
          Knowledge Partners
        </p>
        <Slider
          dots={false}
          slidesToShow={7}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={1500}
        >
          <div className="w-25 h-[18vh] ">
            <img
              src="https://i2.wp.com/ictkerala.org/wp-content/uploads/2019/01/Ui-path.png?resize=150%2C150&ssl=1"
              alt="logo 1"
            />
          </div>
          <div className="w-25 h-[18vh] ">
            <img
              src="https://i0.wp.com/ictkerala.org/wp-content/uploads/2018/12/KTU-1.jpg?resize=150%2C150&ssl=1"
              alt="logo 2"
            />
          </div>
          <div className="w-25 h-[18vh] ">
            <img
              src="https://i0.wp.com/ictkerala.org/wp-content/uploads/2018/12/KSITl-1.jpg?resize=150%2C150&ssl=1"
              alt="logo 3"
            />
          </div>
          <div className="w-25 h-[18vh] ">
            <img
              src="https://i0.wp.com/ictkerala.org/wp-content/uploads/2019/01/Untitled-1.jpg?resize=150%2C150&ssl=1"
              alt="logo 4"
            />
          </div>
          <div className="w-25 h-[20vh]  ">
            <img
              src="https://i1.wp.com/ictkerala.org/wp-content/uploads/2018/12/KSUM-1.jpg?resize=150%2C150&ssl=1"
              alt="logo 5"
            />
          </div>
          <div className="w-25 h-[18vh]  ">
            <img
              src="https://i1.wp.com/ictkerala.org/wp-content/uploads/2018/12/ASAP-1.jpg?resize=150%2C150&ssl=1"
              alt="logo 6"
            />
          </div>
          <div className="w-25 h-[18vh]  ">
            <img
              src="https://i1.wp.com/ictkerala.org/wp-content/uploads/2018/12/Kdisc-1.jpg?resize=150%2C150&ssl=1"
              alt="logo 7"
            />
          </div>
          <div className="w-25 h-[18vh]  ">
            <img
              src="https://i2.wp.com/ictkerala.org/wp-content/uploads/2018/12/Keralauniversity-1.jpg?resize=150%2C150&ssl=1"
              alt="logo 8"
            />
          </div>
          <div className="w-25 h-[18vh]  ">
            <img
              src="https://i0.wp.com/ictkerala.org/wp-content/uploads/2018/12/SCERT-1.jpg?resize=150%2C150&ssl=1"
              alt="logo 9"
            />
          </div>
          <div className="w-25 h-[18vh]  ">
            <img
              src="https://i1.wp.com/ictkerala.org/wp-content/uploads/2018/12/ICFOSS-1.jpg?resize=150%2C150&ssl=1"
              alt="logo 10"
            />
          </div>
          <div className="w-25 h-[18vh]  ">
            <img
              src="https://i2.wp.com/ictkerala.org/wp-content/uploads/2018/12/KSITM-1.jpg?resize=150%2C150&ssl=1"
              alt="logo 11"
            />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default BottomSection;
