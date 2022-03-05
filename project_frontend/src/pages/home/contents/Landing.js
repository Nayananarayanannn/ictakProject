import React from "react";

export default function Landing() {
  return (
    <>
      <main>
        <section className="relative py-20">
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="http://ictacademyofficial.herokuapp.com/assets/material/img/icthall.png"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">Every Moment is a Fresh Beginning !</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  ICT Academy was officially inaugurated by Chief Minister of Kerala Mr. Oommen Chandy on 24 June 2014 at a function held in Thiruvananthapuram in the presence of Education Minister P.K. Abdu Rabb, Additional Chief Secretary V. Somasundaram, and Higher Education Principal Secretary K.M. Abraham.
<br/><br/>
The Chief Minister also released the logo of the ICT Academy and Education Minister P.K. Abdu Rabb launched the academy’s website and learning management system called ‘Paatshala’.
                  </p>
                  {/* <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Dynamic components</h4>
                        </div>
                      </div>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Here are our students</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                Check Out what our Students has to say about the Courses and how they have benefitted ! Don't Miss the opportunity !
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="http://ictacademyofficial.herokuapp.com/uploads/file1-1641929766438.jpeg"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jewel Moncy John</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Front End Developer
                    </p>
                    <h6>@Ernst & Young</h6>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="http://ictacademyofficial.herokuapp.com/uploads/file1-1641929778788.jpeg"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Theertha Anil K</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Data Scientist
                    </p>
                    <h6>@Edstem Technologies</h6>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="http://ictacademyofficial.herokuapp.com/uploads/file1-1641929791347.jpeg"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Nihad Hassan</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Data Analystics
                    </p>
                    <h6>@TCS</h6>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("../../../assets/img/team-4-470x470.png").default}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Cyril John Varghese</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Data Scientist
                    </p>
                    <h6>@Eynetech services</h6>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-gray-900">
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
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  INDUSTRY CONNECTS
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                We conduct various programs which leverages the link between industry and academia. These interactions not only limits to students, but also extends to faculties too. The institute can encourage their faculties, scientists, technicians and students to interact with industry in all possible ways with the spirit of deriving mutual benefits. This increases understanding between the Institute and industries to bring the two sides emotionally and strategically closer.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Teachers Top-5
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                Top 5 event is one of the hallmark events of ICT Academy of Kerala, targeted to Faculty members of the colleges. This event will be conducted in three different zones of Kerala namely, South, Central and North. Five faculty members from each college will be invited to a respective zone, where they will interact with the industry experts and doyens in the filed of Engineering & Technology.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Students Top-10
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                This is another flagship event of ICTAK, which is engrossed for student community of the colleges in the state of Kerala. This event will be conducted in three different zones of Kerala namely, South, Central and North. For this event 10 students from each college (called as student champs) will be invited to a respective zone and will be given a chance to interact with industry leaders and experts from various domains. 
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                ICTAK TECHATHLON
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                ICTAK Techathlon is a National Level Technical Fest organized by ICT Academy of Kerala every year. Techathlon is a unique technical contest designed in line with employability skills assessments conducted by Global Organizations. This is an event open to all the undergraduate, graduate and post graduate students across the country where the participants can exhibit and depict their creativity, problem solving, collaboration, communication and prototyping skills
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                ICSET
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                The fifth edition of ICT Academy of Kerala’s International Conclave on Skills, Engineering & Technology (ICSET) is aimed at bringing closer the academia, industry, government and connected stakeholders at large, to discuss, deliberate and exchange ideas about skills, engineering and technology areas. This year's main theme is 'Leading the New Normal'.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <form>
                    <div className="relative w-full mb-3 mt-8">
                    
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="full-name"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Full Name"
                      style={{ transition: "all .15s ease" }}
                      required
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Email"
                      style={{ transition: "all .15s ease" }}
                      required
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      rows="4"
                      cols="80"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Type a message..."
                      required
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      style={{ transition: "all .15s ease" }}
                    >
                      Send Message
                    </button>
                  </div>

                    </form>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
