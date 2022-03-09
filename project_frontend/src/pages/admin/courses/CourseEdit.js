import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function CourseEdit() {
  const navigate = useNavigate();
  const { name } = useParams();

  const [course, setCourse] = useState([]);

  // get course details
  const getdata = () => {
    var config = {
      method: "get",
      url: `http://localhost:8000/api/courses/${name}`,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setCourse(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const UpdateCourse=(e)=>{
      e.preventDefault();
      const formData = new FormData();

    formData.append('url',course.url);
    formData.append('name',course.name);
    formData.append('status',course.status);
    formData.append('title',course.title);
    formData.append('quote',course.quote);
    formData.append('shortDescription',course.shortDescription);
    formData.append('fee',course.fee);
    formData.append('image',course.image);

    var config = {
      method: 'post',
      url: `http://localhost:8000/api/courses/edit-course/${name}`,
      headers: { 
      },
      data : formData
    };

  axios(config)
  .then(res => {
          console.log(JSON.stringify(res.data));
          navigate('/admin/coursedash');
           })
       .catch(err => {
          console.log(err);
       });
  }

  // Fetch course list data from DB
  useEffect(() => {
    getdata();
  }, []);

  // Manage file upload
  const handleImage = (event) => {
    console.log(event.target.files[0])
      if(event.target.files[0]){
        setCourse({ ...course, image: event.target.files[0] });
        
      }
  };

  // Manage form change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourse({ ...course, [name]: value });
  };

  return (
    <div
    style={{ maxHeight: "80vh", overflowY: "scroll" }}
    className="inline-block align-bottom bg-white rounded-lg w-full
     text-left shadow-xl 
  transform transition-all 
  sm:my-8 sm:align-middlesm:w-full"
  >
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div className="">
        <div
          className="mx-auto flex-shrink-0 flex items-center
                   justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0
                    sm:h-10 sm:w-10"
        ></div>
        <div
          className="mt-3 text-center p-2 ml-8 mr-8 "
          style={{ borderRadius: "10px" }}
        >
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Add New Course
          </h3>
          <div className="mt-2 w-full">
          <form onSubmit={UpdateCourse} encType="multipart/form-data" className="text-left">
        <div className="relative w-full mb-3 mt-8">
          <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
            Course URL
          </label>
          <input
            onChange={handleChange}
            value={course.url}
            type="text"
            name="url"
            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
            placeholder="fsd"
            style={{ transition: "all .15s ease" }}
            required
          />
        </div>

        <div className="relative w-full mb-3 mt-8">
          <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
            Course Name
          </label>
          <input
            onChange={handleChange}
            value={course.name}
            type="text"
            name="name"
            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
            placeholder="MERN stack development"
            style={{ transition: "all .15s ease" }}
            required
          />
        </div>

        <div className="relative w-full mb-3 mt-8">
          <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
            Status
          </label>
          <input
            onChange={handleChange}
            value={course.status}
            type="text"
            name="status"
            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
            placeholder="open"
            style={{ transition: "all .15s ease" }}
            required
          />
        </div>
        <div className="relative w-full mb-3 mt-8">
          <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
            Course Title
          </label>
          <input
            onChange={handleChange}
            value={course.title}
            type="text"
            name="title"
            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
            placeholder="CERTIFIED SPECIALIST IN FULL STACK DEVELOPMENT"
            style={{ transition: "all .15s ease" }}
            required
          />
        </div>
        <div className="relative w-full mb-3 mt-8">
          <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
            Course Quote
          </label>
          <input
            onChange={handleChange}
            value={course.quote}
            type="text"
            name="quote"
            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
            placeholder="OPENING A DOOR TO THE FUTURE"
            style={{ transition: "all .15s ease" }}
            required
          />
        </div>
        <div className="relative w-full mb-3 mt-8">
          <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
            Course Short Description
          </label>
          <textarea
            onChange={handleChange}
            value={course.shortDescription}
            rows="5"
            cols="50"
            name="shortDescription"
            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
            placeholder="The MERN stack is an excellent choice for web developers who wish to develop high-quality web applications using JavaScript. The core technologies define the MERN stack – MongoDB, Express.js, React, and Node.js – all are based on one language, Javascript."
            style={{ transition: "all .15s ease" }}
            required
          />
        </div>
        <div className="relative w-full mb-3 mt-8">
          <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
            Course Fee
          </label>
          <input
            onChange={handleChange}
            value={course.fee}
            type="number"
            name="fee"
            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
            placeholder="18000"
            style={{ transition: "all .15s ease" }}
            required
          />
        </div>
        <div className="relative w-full mb-3 mt-8">
          <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
            Image
          </label>
          <input
            onChange={handleImage}
            name="image"
            type="file"
            accept=".png, .jpg, .jpeg"
            placeholder="File upload"
          />
        </div>

        <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <a href="/admin/coursedash">
            <button
              type="button"
              className="px-6 py-2 ml-4 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Close
            </button>
          </a>
          <button
            type="submit"
            className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Add
          </button>
        </div>
      </form>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CourseEdit;
