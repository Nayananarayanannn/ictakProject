import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function PartnershipRegister(props) {
  const navigate= useNavigate();

  const[register,setRegister]= useState([]);

    useEffect(() => {
        Aos.init({});
      }, []);

       // manage form change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegister({ ...register, [name]: value });
  };

   // manage form submit
   const handleSubmit = (event) => {
    
    event.preventDefault();
    var data = JSON.stringify({
      name: register.name,
      address:register.address,
      head:register.head,
      nature:register.nature,
      id:register.id,
      gstn:register.gstn,
      website:register.website,
      contactname:register.contactname,
      phone:register.phone,
      email:register.email,
      phone:register.phone,
      employees:register.employees
    });

    var config = {
      method: "post",
      url: "http://localhost:8000/api/partnership/add",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        alert("Registered Successfully.We will contact you soon...");
        navigate(`/partnership`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

    return (
        <div>
            <div className='registerCourse'>
            <div className="coursesList bg-gray-300">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="courseListHead block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 bg-[#FFFFFFA8] backdrop-blur-sm"
      >
      <h1>Corporate Membership Form</h1>
        <form onSubmit={handleSubmit} className='text-left'>
                    <div className="relative w-full mb-3 mt-8">
                    
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      Name
                    </label>
                    <input
                    onChange={handleChange}
                    name='name'
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Name"
                      style={{ transition: "all .15s ease" }}
                      required
                    />
                  </div>
                  <div className="relative w-full mb-3 mt-8">
                    
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      Address
                    </label>
                    <input
                    onChange={handleChange}
                    name='address'
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Address"
                      style={{ transition: "all .15s ease" }}
                      required
                    />
                  </div>
                  <div className='grid md:grid-cols-2 gap-4 sm:grid-cols-1 xs:grid-cols-1'>
                  <div className="relative w-full col-span-1 mb-3 mt-8">
                    
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      Head of the Organization
                    </label>
                    <input
                    onChange={handleChange}
                    name='head'
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Head of Organisation"
                      style={{ transition: "all .15s ease" }}
                      required
                    />
                  </div>
                  <div className="relative w-full mb-3 mt-8 ml-2">
                    
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      Nature of the Organization
                    </label>
                    <input
                    onChange={handleChange}
                    name='nature'
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Nature of organisation"
                      style={{ transition: "all .15s ease" }}
                      required
                    />
                  </div>
                  </div>
                  <div className='grid md:grid-cols-2 gap-4 sm:grid-cols-1 xs:grid-cols-1'>
                  <div className="relative w-full col-span-1 mb-3 mt-8">
                    
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      Corporate Identity No.
                    </label>
                    <input
                    onChange={handleChange}
                    name='id'
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Corporate Identity No."
                      style={{ transition: "all .15s ease" }}
                      required
                    />
                  </div>
                  <div className="relative w-full mb-3 mt-8 ml-2">
                    
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      GSTN
                    </label>
                    <input
                    onChange={handleChange}
                    name='gstn'
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="GSTN"
                      style={{ transition: "all .15s ease" }}
                      required
                    />
                  </div>
                  </div>

                  <div className="relative w-full mb-3 mt-8 ml-2">
                    
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      Website
                    </label>
                    <input
                    onChange={handleChange}
                    name='website'
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Website"
                      style={{ transition: "all .15s ease" }}
                      required
                    />
                  </div>
                  <h2 className='text-2xl font-bold'>Point of Contact Details</h2>

                  <div className='grid md:grid-cols-2 gap-4 sm:grid-cols-1 xs:grid-cols-1'>
                  <div className="relative w-full col-span-1 mb-3 mt-8">
                    
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      Name
                    </label>
                    <input
                    onChange={handleChange}
                    name='contactname'
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Name"
                      style={{ transition: "all .15s ease" }}
                      required
                    />
                  </div>
                  <div className="relative w-full mb-3 mt-8 ml-2">
                    
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      Phone
                    </label>
                    <input
                    onChange={handleChange}
                    name='phone'
                      type="tel"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Phone"
                      style={{ transition: "all .15s ease" }}
                      required
                    />
                  </div>
                  </div>
                  <div className='grid md:grid-cols-2 gap-4 sm:grid-cols-1 xs:grid-cols-1'>
                  <div className="relative w-full col-span-1 mb-3 mt-8">
                    
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                    onChange={handleChange}
                    name='email'
                      type="email"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="email"
                      style={{ transition: "all .15s ease" }}
                      required
                    />
                  </div>
                  <div className="relative w-full mb-3 mt-8 ml-2">
                    
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      Total Number of employees in Your organisation
                    </label>
                    <input
                    onChange={handleChange}
                    name='employees'
                      type="number"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="total number of employees"
                      style={{ transition: "all .15s ease" }}
                      required
                    />
                  </div>
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
                   
      </div>
      
    </div>
        </div>
        </div>
    );
}

export default PartnershipRegister;