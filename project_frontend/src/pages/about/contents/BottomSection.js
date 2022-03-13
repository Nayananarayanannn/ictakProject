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

    const res1 = await fetch("/getIndudata", {
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

    const res2 = await fetch("/getKnowdata", {
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

    const res = await fetch("/getdata", {
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
              alt='' src="https://st4.depositphotos.com/11337508/27781/v/450/depositphotos_277816546-stock-illustration-business-vision-business-team-searching.jpg"
            />
            <img
              className="xl:hidden h-full "
              alt='' src="https://st4.depositphotos.com/11337508/27781/v/450/depositphotos_277816546-stock-illustration-business-vision-business-team-searching.jpg"
            />
          </div>
        </div>
        <div className="md:hidden  mt-6">
          <img
            alt='' src="https://st4.depositphotos.com/11337508/27781/v/450/depositphotos_277816546-stock-illustration-business-vision-business-team-searching.jpg"
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
                alt="profile"
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
                alt="profile"
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

      <div class="max-w-screen-xl px-4 mx-auto md:px-8">
        <div class="mb-10 md:mb-16">
          <h2
            class="
        mb-4
        text-2xl
        font-bold
        text-center text-gray-800
        lg:text-3xl
        md:mb-6
      "
          >
            Our Team Section
          </h2>

          <p class="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
            Meet the best team in world
          </p>
        </div>
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

                <div class="grid gap-4 md:grid-cols-3">
                  <div class="p-4 shadow">
                    <div class="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
                      <img
                        src={element.profileimg}
                        alt="Image"
                        class="object-cover object-center w-full h-full"
                      />
                    </div>

                    <div class="flex flex-col items-center justify-center">
                      <div class="font-bold text-indigo-500 md:text-lg">{element.name}</div>
                      <p class="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
                        {element.designation}
                      </p>

                      <div class="flex">
                        <div class="flex gap-4">
                          <a href="#">
                            <svg
                              class="w-6 h-6 text-blue-600 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              class="w-6 h-6 text-blue-300 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              class="w-6 h-6 text-blue-500 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path
                                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
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
