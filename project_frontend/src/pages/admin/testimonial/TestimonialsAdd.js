import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TestimonialAdd() {
  const navigate = useNavigate();

  const [inpval, setINP] = useState({
    name: "",
    quote: "",
    image: "",
    course: "",
    placed: "",
  });

  const setdata = (e) => {
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();
    const { name, quote, image, course, placed } = inpval;

    var data = JSON.stringify({
  "name": name,
  "quote": quote,
  "placed": placed,
  "course": course,
  "image": image
});

var config = {
  method: 'post',
  url: 'http://localhost:8000/api/testimonials/add-test',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  navigate('/admin/Test')
})
.catch(function (error) {
  console.log(error);
});
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-gray-300 m-10 rounded-md shadow-md">
      <div style={{ float: "right" }}>
        <a href="/admin/Test">
          <p className="font-bold">X</p>
        </a>
      </div>
      <div
        className="mx-auto mb-6 flex-shrink-0 flex items-center
                     justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0
                      sm:h-10 sm:w-10"
      ></div>
      <h2 className="text-lg font-semibold text-gray-700 capitalize">
        Add Testimonials
      </h2>

      <form onSubmit={addinpdata}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700 " for="username">
              Name
            </label>
            <input
              value={inpval.name}
              name="name"
              type="text"
              onChange={setdata}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              required
            />
          </div>
          <div>
            <label className="text-gray-700 " for="email">
              Quote
            </label>
            <input
              value={inpval.quote}
              name="quote"
              onChange={setdata}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 " for="designation">
              CourseAdd
            </label>
            <input
              value={inpval.course}
              name="course"
              required
              onChange={setdata}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 " for="password">
              Image url
            </label>
            <input
              required
              value={inpval.image}
              name="image"
              onChange={setdata}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 " for="password">
              Placed @
            </label>
            <input
              required
              value={inpval.placed}
              name="placed"
              onChange={setdata}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
}

export default TestimonialAdd;
