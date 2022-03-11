import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel'

function PartnershipRegistered(props) {
    const [register,setRegister] = useState([])

    // get data from db
    const getdata=()=>{
        var config = {
            method: 'get',
            url: 'http://localhost:8000/api/partnership/get',
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            setRegister(response.data);
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
            <h2 className="text-2xl leading-tight">Partnership Registered Details</h2>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-hidden">
            <div style={{maxWidth:"78vw"}} className="hover:overflow-auto inline-block shadow rounded-lg overflow-hidden">
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
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                    >
                      Head of organisation
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                    >
                      Nature of organisation
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                    >
                      Corporate Identity No.
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                    >
                      GSTN
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                    >
                      Website
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                    >
                      Contact Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                    >
                     Contact Phone
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                    >
                      Contact Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                    >
                     No. of employees
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {register.map((element, id) => {
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
                            {element.address}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {element.head}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {element.nature}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {element.id}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {element.gstn}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            <a href ={`${element.website}`}>{element.website}</a>
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {element.contactname}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {element.phone}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {element.email}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {element.employees}
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
                    filename="partnerships"
                    sheet="partnerships"
                    buttonText="Download as Excel"/>
        </div>
    );
}

export default PartnershipRegistered;