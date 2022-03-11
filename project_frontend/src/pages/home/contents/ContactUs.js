import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactUs(props) {
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  // manage form change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  // post contacted data
  const handleSubmit = (event) => {
    event.preventDefault();
    var data = JSON.stringify({
        "name": contact.name,
        "email": contact.email,
        "message": contact.message
      });

    var config = {
      method: "post",
      url: "http://localhost:8000/api/contact/add",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        alert("Thankyou for the interest.We will contact you soon...");
        setContact({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <section className="relative block py-24 lg:pt-0 bg-[#151D3B]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 mt-[4rem]">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold">Talk to Us?</h4>
                  <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                    Complete this form and we will get back to you.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        onChange={handleChange}
                        value={contact.name}
                        name="name"
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
                        onChange={handleChange}
                        value={contact.email}
                        name="email"
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
                        onChange={handleChange}
                        value={contact.message}
                        name="message"
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
    </div>
  );
}

export default ContactUs;
