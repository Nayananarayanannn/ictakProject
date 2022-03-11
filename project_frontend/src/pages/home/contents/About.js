import React from "react";

const About = () => {
  return (
    <>
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
              "url('http://ictacademyofficial.herokuapp.com/assets/material/img/ictaku.png')",
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
                <h1 className="text-white font-semibold text-5xl">About Us</h1>
                <h3 className="mt-4 text-white font-semibold text-2xl">
                  What is ICT Academy of Kerala?
                </h3>
                <p className="mt-4 text-lg text-gray-300">
                  ICT Academy of Kerala is a Social Enterprise created in a
                  Public Private Partnership model (PPP) for imparting ICT
                  skills to the youths of Kerala and improve their employability
                  opportunities in the Industry.
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
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Who we are</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    We can support you to host an ICT Solution based on our
                    immense experience in the domain. We can understand the
                    unique requirements of clients and our well-experienced team
                    will devote to generate the desired output.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    ICT Academy of Kerala
                  </h6>
                  <img
                    className="mt-2 mb-4 "
                    src="https://i0.wp.com/ictkerala.org/wp-content/uploads/2018/12/ict-1.gif?fit=678%2C382&ssl=1"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Internship</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    The internship program strategies are very specific,
                    measurable, realistic and fit well within the time framework
                    and also showcases what the student hopes to learn from
                    their experiences and the level of academic expectations
                    that are expected!
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Why to associate with us?
                  </h6>
                  <ul className="mt-2 mb-4 text-gray-600">
                    <li>Government supported and Industry-led Program</li>
                    <li> Government scholarships and affordable fees model</li>
                    <li>
                      One-stop shop for Students, Unemployed and Working
                      professionals
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Entrepreneurship Development
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    We improves the skills and knowledge of entrepreneurs
                    through various training and classroom programs. The whole
                    point of entrepreneurship development is to increase the
                    number of professional entrepreneurs
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Advisory Service</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    A range of consulting services provided by Certified Public
                    Accountants (CPA) and other financial advisors to businesses
                    and high net-worth individuals who require specialized
                    advice on capital formation
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <i className="fas fa-user-friends text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Learn And Grow With Us ! ~ICTAK
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                "Live as if you were to die tomorrow. Learn as if you were to
                live forever.” - Mahatma Gandhi
              </p>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Find Yourself with the Best Teaching Partner ! ~ICTAK
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                "Wisdom is not a product of schooling but of the lifelong
                attempt to acquire it.” - Albert Einstein
              </p>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Your Knowledge WareHouse ! ~ICTAK
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                “Anyone who stops learning is old, whether at twenty or eighty.
                Anyone who keeps learning stays young. The greatest thing in
                life is to keep your mind young.” - Henry Ford
              </p>
              <a href="/courses" className="font-bold text-gray-800 mt-8">
                Check out Our Courses
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-[#82A1DE]">
                <img
                  alt="..."
                  src="http://ictacademyofficial.herokuapp.com/assets/material/img/icthall.png"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{
                      height: "95px",
                      top: "-94px",
                    }}
                  ></svg>
                  <h4 className="text-xl font-bold text-white">
                    It's Never too Late for a new beginning ! Come Join Us !
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    ICT Academy was officially inaugurated by Chief Minister of
                    Kerala Mr. Oommen Chandy on 24 June 2014 at a function held
                    in Thiruvananthapuram in the presence of Education Minister
                    P.K. Abdu Rabb, Additional Chief Secretary V. Somasundaram,
                    and Higher Education Principal Secretary K.M. Abraham. The
                    Chief Minister also released the logo of the ICT Academy and
                    Education Minister P.K. Abdu Rabb launched the academy's
                    website and learning management system called 'Paatshala'.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
