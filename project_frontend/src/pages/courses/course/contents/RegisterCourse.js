import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Aos from "aos";
import axios from 'axios';

function RegisterCourse(props) {
  // get particular course details
  const location = useLocation();
  const course = location.state.course;

  const navigate= useNavigate();

  const [register,setRegister] = useState({name:"",email:"",course:course.name})

    useEffect(() => {
        Aos.init({});
      }, []);

    // manage form change
    const handleChange=(event)=>{
      const { name, value } = event.target;
    setRegister({ ...register, [name]: value });
    }

    // manage form submit
    const handleSubmit=(event)=>{
      event.preventDefault();
      var data = JSON.stringify({
        "name": register.name,
        "email": register.email,
        "course": register.course
      });
      
      var config = {
        method: 'post',
        url: 'http://localhost:8000/api/courses/register/add',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        alert("Registered Successfully.We will contact you soon...");
        navigate(`/courses`)
      })
      .catch(function (error) {
        console.log(error);
      });

    }
    return (
        <div className='registerCourse'>
            <div className="coursesList bg-gray-300">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="courseListHead block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 bg-[#FFFFFFA8] backdrop-blur-sm"
      >
      <h1>Register for {course.name}</h1>
        <form onSubmit={handleSubmit} className='text-left'>
                    <div className="relative w-full mb-3 mt-8">
                    
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="full-name"
                    >
                      Full Name
                    </label>
                    <input
                    name="name"
                    onChange={handleChange}
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
                    name="email"
                    onChange={handleChange}
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
                    <br/>
                    <Link to={`/course/${course.url}`}>View {course.name} course Details</Link>
      </div>
      
    </div>
        </div>
    );
}

export default RegisterCourse;