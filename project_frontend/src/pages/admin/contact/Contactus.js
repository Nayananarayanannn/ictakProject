import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel'


function Contactus(props) {

    const [contact,setContact] = useState([])

    // get data from db
    const getdata=()=>{
        var config = {
            method: 'get',
            url: 'http://localhost:8000/api/contact/get',
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            setContact(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    // fetch data on page load
    useEffect(()=>{
        getdata();
    },[])

    return (
        <div>
            <div className="container mx-auto px-4">
      
      <div className="py-8">
        <div className="flex flex-row mb-1 justify-between w-full">
          <h2 className="text-2xl leading-tight">Cotacted Details</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-hidden">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table id="table-to-xls" className="min-w-full leading-normal overflow-hidden">
              <thead>
                <tr>
                <th
                    scope="col"
                    className="px-5 py-3 bg-black  border-b border-gray-200 text-white  text-left text-sm uppercase font-normal"
                  >
                    Sl.No.
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-black  border-b border-gray-200 text-white  text-left text-sm uppercase font-normal"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-black  border-b border-gray-200 text-white  text-left text-sm uppercase font-normal"
                  >
                    Email ID
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                  >
                    Message
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                  ></th>
                </tr>
              </thead>
              <tbody>
                {contact.map((element, id) => {
                  return (
                    <tr>
                    <td
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                      >
                        {id+1}
                      </td>
                      <td
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                      >
                        {element.name}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {element.email}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {element.message}
                        </p>
                      </td>
                      <td className="px-5 py-5 flex justify-between whitespace-no-wrap flex-shrink-0">
                        <button onClick={() => window.location = `mailto:${element.email}`} className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Reply</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <ReactHTMLTableToExcel
                  id="test-table-xls-button"
                  className="download-table-xls-button btn btn-success mb-3 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                  table="table-to-xls"
                  filename="Contact"
                  sheet="Contact"
                  buttonText="Download as Excel"/>
        </div>
    );
}

export default Contactus;