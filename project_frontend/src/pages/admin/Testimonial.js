import React from "react";
import { NavLink } from "react-router-dom";

function Testimonial(props) {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-8  relative">
        <div className="py-6">
          <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
            <h2 className="text-2xl leading-tight font-bold">
              Testimonial List
            </h2>
            <div className="text-end">
              {/* <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                    <div className=" relative ">
                        <input type="text" id="&quot;form-subscribe-Filter" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-1 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="name"/>
                        </div>
                        <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                            Filter
                        </button>
                    </form> */}
              <NavLink
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
                type="submit"
                to="/CourseDash"
              >
                Add
              </NavLink>
            </div>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white  text-left text-sm uppercase font-normal"
                    >
                      Index No
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white  text-left text-sm uppercase font-normal"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                    >
                      Course Title
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                    >
                      Organization
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                    >
                      Testimonials
                    </th>
                    {/* <th
                                            scope="col"
                                            className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                                        >
                                            status
                                        </th> */}
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                    >
                      1
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Jewel Moncy John
                          </p>
                        </div>
                      </div>
                    </td>
                    {/* <div className="flex-shrink-0">
                                                    <a href="#" className="block relative">
                                                        <img
                                                            alt="FSD"
                                                            src="/images/person/8.jpg"
                                                            className="mx-auto object-cover rounded-full h-10 w-10 "
                                                        />
                                                    
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                           
                                        </td></a>
                                                </div> */}
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        CERTIFIED SPECIALIST IN FULL STACK DEVELOPMENT using
                        MEAN
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Ernst & Young
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        The teaching staff was really helpful when it comes to
                        understanding the course and training. I expect more
                        courses in the future and hope for continued support
                        from ICTAK"
                      </p>
                    </td>
                    {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                ></span>
                                                <span className="relative">open</span>
                                            </span>
                                        </td> */}
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex xs:flex-row items-center xs:justify-between justify-between whitespace-no-wrap">
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 border border-green-700 rounded">
                        <svg
                          width="22"
                          fill="currentColor"
                          height="22"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                          />
                        </svg>
                      </button>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded">
                        <svg
                          width="22"
                          fill="currentColor"
                          height="22"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
                          />
                        </svg>
                      </button>
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 border border-red-700 rounded">
                        <svg
                          width="22"
                          fill="currentColor"
                          height="22"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                                <div className="flex items-center">
                                    <button
                                        type="button"
                                        className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
                                    >
                                        <svg
                                            width="9"
                                            fill="currentColor"
                                            height="8"
                                            className=""
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                                        </svg>
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 "
                                    >
                                        1
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
                                    >
                                        2
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100"
                                    >
                                        3
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
                                    >
                                        4
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
                                    >
                                        <svg
                                            width="9"
                                            fill="currentColor"
                                            height="8"
                                            className=""
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
