import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Corporate(props) {
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
          <h1>Corporate Membership</h1>
        </div>
      </div>
      <div className="bg-gray-300 p-6 text-center">
        <a
          className="inline-block px-7 py-3 mb-2 md:mb-0 md:mr-2 bg-[#00000A] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-aos="flip-up"
          data-aos-duration="1000"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="/membership/corporate/register"
          role="button"
        >
          Register Now
        </a>
      </div>
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center overflow-hidden"
        style={{
          minHeight: "75vh",
        }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover blur-[1px]"
          style={{
            backgroundImage:
              "url('https://th.bing.com/th/id/OIP.sPScD4Jp833Ws5h6tcrocgHaF9?w=205&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-30 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="px-auto ">
                <p
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  className="mt-4 text-lg text-gray-300"
                >
                  ICT Academy of Kerala is pleased to offer ‘ICTAK Corporate
                  Membership’ to a select set of leading organizations in the
                  country. Through this membership, ICTAK would like to unlock
                  the value of a Corporate – Academia collaboration through its
                  wide network of corporate and academic partners.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
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
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap ">
            <div
              data-aos="flip-right"
              data-aos-duration="1000"
              className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"
            >
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Collaborate</h6>
                  <p>Collaborate with the flagship skills development organization in the state supported Govt. of India and partnered by Govt. of Kerala. </p>
                    
                </div>
              </div>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="w-full md:w-4/12 px-4 text-center"
            >
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Benefits</h6>
                </div>
              </div>
            </div>

            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              className="pt-6 w-full md:w-4/12 px-4 text-center"
            >
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Interactions</h6>
                  Access to over hundred Engineering and Non-engineering educational institutions in the state of Kerala for campus recruitment/internships and for collaborative research with Academia.

                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
             
            </div>

            <div
              data-aos="flip-down"
              data-aos-duration="1000"
              className="pt-6 w-full md:w-4/12 px-4 text-center"
            >
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Corporate trainings benefits</h6>
                  <p>Participate in our corporate trainings and workshops at ‘Member rates’ (up to 20% discount)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <i className="fas fa-user-friends text-xl"></i>
              </div>
              <h2
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-4xl font-bold"
              >
                Commercial and Validity Period
              </h2>
              <br />
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-xl"
              >
                The industry membership programme will be offered based on an
                internal accreditation process and shall be valid for three
                years. The membership will be free for selected industry
                partners.
              </p>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-[#82A1DE]">
                <img
                  data-aos="flip-up"
                  data-aos-duration="1000"
                  alt="..."
                  src="https://media.istockphoto.com/photos/elearning-education-concept-learning-online-picture-id1290864946?b=1&k=20&m=1290864946&s=170667a&w=0&h=zZq7rG5McSptSIpEm9f8iTGd3Mrdkcslakr91T7qTYM="
                  className="w-full align-middle rounded-t-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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

        {/* technology poartners */}
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          style={{
            marginLeft: "100px",
            marginRight: "100px",
            borderRadius: "20px",
            boxShadow: "rgba(0, 0, 0, 0.151) 10px 10px 10px",
          }}
          className="m-2 p-2 bg-white"
        >
          <div className="p-8">
            <p
              style={{ color: "#036BCB" }}
              className="text-center text-3xl font-bold"
            >
              Meet our technology partners
            </p>
            <br />
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
        </div>
      </section>
    </div>
  );
}

export default Corporate;
