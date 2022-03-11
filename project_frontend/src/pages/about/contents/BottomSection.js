import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BottomSection() {

  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const [getinddata, setInddata] = useState([]);
  console.log(getinddata);

  const [getknwdata, setKnwdata] = useState([]);
  console.log(getknwdata);

  //industrial

  const getIndudata = async (e) => {

    const res1 = await fetch("http://localhost:8000/getIndudata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },

    });

    const data = await res1.json();
    console.log(data);

    if (res1.status === 422 || !data) {
      console.log("error");
    } else {
      setInddata(data);
      console.log("data received");
    }
  }

  //knowledge

  const getKnowdata = async (e) => {

    const res2 = await fetch("http://localhost:8000/getKnowdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },

    });

    const data = await res2.json();
    console.log(data);

    if (res2.status === 422 || !data) {
      console.log("error");
    } else {
      setKnwdata(data);
      console.log("data received");
    }
  }

  //team

  const getdata = async (e) => {

    const res = await fetch("http://localhost:8000/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },

    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error");
    } else {
      setUserdata(data);
      console.log("data received");
    }
  }

  useEffect(() => {
    getdata();
    getIndudata();
    getKnowdata();
  }, [])

  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      {/* vision starts here */}
      <div className="mx-auto container py-12 px-6 xl:px-0 flex justify-center items-center flex-col mt-14">
        <div className="flex justify-between bg-gray-50 items-stretch flex-row">
          <div className="flex items-center bg-cyan-600 justify-center">
            <p className="transform shadow-xl flex flex-shrink-0 -rotate-90 text-6xl font-semibold tracking-wide leading-normal text-white">
              vision
            </p>
          </div>
          <div
            data-aos="flip-up"
            data-aos-duration="1100"
            className="flex w-full justify-center border-gray shadow-2xl border-2 bg-gradient-to-r from-cyan-700 to-cyan-300 items-start flex-col xl:w-2/5 md:w-5/12 xl:px-7 px-6 md:px-0 md:py-0 py-5"
          >
            <div className="xl:mt-4 mt-2">
              <p className="text-bold xl:text-xl italic text-white pr-4">
                To emerge as the single-point establishment for all the ICT
                related capability building in the State
              </p>
            </div>
          </div>
          <div className="hidden md:block h-44 md:h-60  xl:h-92">
            <img
              className="hidden h-full xl:block "
              src="https://st4.depositphotos.com/11337508/27781/v/450/depositphotos_277816546-stock-illustration-business-vision-business-team-searching.jpg"
            />
            <img
              className="xl:hidden h-full "
              src="https://st4.depositphotos.com/11337508/27781/v/450/depositphotos_277816546-stock-illustration-business-vision-business-team-searching.jpg"
            />
          </div>
        </div>
        <div className="md:hidden  mt-6">
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
        <h1 data-aos="flip-up"
          data-aos-duration="1000" className="text-5xl font-bold xl:block  leading-tight text-cyan-600">
          Hear from our
          <br />
          Leaders!!
        </h1>
        <div className="flex">
          <div className="mt-14 md:flex">
            <div className="relative lg:w-1/4 sm:w-96 h-[66vh] md:h-70 xl:h-92 ">
              <img
                src="https://media-exp1.licdn.com/dms/image/C5603AQEgfYgb48xFMQ/profile-displayphoto-shrink_200_200/0/1620233227538?e=1651104000&v=beta&t=G-kdwZhwyGrDvBu-dsczTOQMm-MOl737DxpCoN1QlZM"
                alt="image of profile"
                className="w-full shadow-2xl h-full flex-shrink-0 object-fit object-cover shadow-lg rounded "
              />
              <div className="w-32 md:flex hidden shadow-2xl items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full hover:bg-cyan-500">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                  alt="commas"
                />
              </div>
            </div>
            <div data-aos="slide-left"
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
                className="w-full shadow-2xl h-full flex-shrink-0 object-fit object-cover shadow-lg rounded "
              />
              <div className="w-32 shadow-2xl md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 hover:bg-cyan-500 rounded-full">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                  alt="commas"
                />
              </div>
            </div>
            <div
              data-aos="slide-left"
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
      <div className="p-8 w-full bg-gray-100 border-2 shadow-xl box-border rounded-xl shadow-8xl mx-auto ">
        <p className="text-center text-xl font-bold text-cyan-600">
          Professional team
        </p>
        <p className="text-center mb-12 text-md font-normal text-gray-900">
          Meet the best team in world
        </p>

        <Slider
          dots={true}
          slidesToShow={4}
          slidesToScroll={2}
          autoplay={true}
          autoplaySpeed={2000}
        >
          {
            getuserdata.map((element) => {
              return (

                <div className="p-2  h-50 ">
                  <div className="border-2 bg-blue-100 shadow-2xl border-white box-border w-3/4 h-[66vh] p-8 relative hover:scale-110">
                    <div className="text-center opacity-90">
                      <a href="#" className="block relative ">
                        <img
                          alt="profil"
                          src={element.profileimg}
                          className="mx-auto object-cover rounded-lg shadow-lg h-40 w-30"
                        />
                      </a>
                    </div>
                    <div className="text-center">
                      <p className="text-md text-cyan-600">
                        {element.name}
                      </p>
                      <p className="text-sm text-black font-light">
                        {element.designation}
                      </p>
                    </div>
                    <div className="w-full flex justify-center pt-5 pb-5 ">
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
                            className="feather feather-github "
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
                            className="feather feather-instagram "
                          >
                            <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>



              )
            }
            )}
        </Slider>
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
          {getinddata.map((ele) => {
            return (
              <>
                <div className="w-25 h-[29vh] ">

                  <img
                    alt="logo 1"
                    src={ele.image}
                  />
                </div>
              </>
            )
          }
          )}

        </Slider>
      </div>

      {/* marketing partners starts here */}
      <div
        data-aos-easing="linear"
        data-aos-duration="2000"
        className="w-full  flex items-center justify-center my-5 py-16 md:py-12 bg-gradient-to-r from-indigo-700 to-purple-500 rounded-lg"
      >
        <p className="text-center text-3xl font-bold text-white">
          Marketing Partners
        </p>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
          <div
            data-aos="flip-up"
            data-aos-duration="1000"
            className="rounded "
          >
            <img
              className="h-[35vh] rounded-3xl"
              src="http://ictacademyofficial.herokuapp.com/assets/img/c1.jpg"
              alt="img"
            />
          </div>
          <div data-aos="flip-up" data-aos-duration="1200" className="rounded ">
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

      {/* Knowledge partners start here */}
      <div className="p-8">
        <p className="text-center text-3xl font-bold text-black ">
          Knowledge Partners
        </p>
        <Slider
          dots={false}
          slidesToShow={7}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={1500}
        >
          {getknwdata.map((el) => {
            return (
              <>
                <div className="w-25 h-[29vh] ">

                  <img
                    alt="logo 1"
                    src={el.image}
                  />
                </div>
              </>
            )
          }
          )}
        </Slider>
      </div>
    </>
  );
}

export default BottomSection;
