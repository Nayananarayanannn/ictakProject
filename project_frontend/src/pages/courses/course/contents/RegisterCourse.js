import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function RegisterCourse(props) {

    const { id } = useParams();
    const location = useLocation();
    const course = location.state.course;
    console.log(course);

    return (
        <div className='registerCourse'>
            <div className="coursesList bg-gray-300">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="courseListHead block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 bg-[#FFFFFFA8] backdrop-blur-sm"
      >
      <h1>Register for {course.name}</h1>
        <form className='text-left'>
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
                      Course
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      value={course.name}
                      style={{ transition: "all .15s ease" }}
                      disabled
                    />
                    
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      style={{ transition: "all .15s ease" }}
                    >
                      Register
                    </button>
                  </div>

                    </form>
      </div>
      
    </div>
        </div>
    );
}

export default RegisterCourse;