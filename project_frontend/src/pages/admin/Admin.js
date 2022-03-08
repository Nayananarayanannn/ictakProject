import React from "react";

const Admin = () => {
  return (
    <>
      <main class="bg-white dark:bg-white  relative">
        <div class="flex items-start justify-between  ">
          <div class="   lg:block  my-4 ml-4 shadow-lg relative w-80 overscroll-auto ">
            <div class="bg-white overflow-auto h-screen rounded-2xl dark:bg-gray-700">
              <div class="flex items-center justify-center pt-6 "></div>

              <nav class="mt-2 ">
                <div>
                  {/* <img
  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
  class="rounded-full w-40 flex items-center object-center"
  alt="Avatar"
/> */}

                  <a
                    class="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500 "
                    href="#"
                  >
                    <span class="text-left">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                      </svg>
                    </span>

                    <span class="mx-4 text-sm font-normal" href="/CourseDash">
                      Dashboard
                    </span>
                  </a>
                  <a
                    class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                    href="/coursedash"
                  >
                    <span class="text-left">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="m-auto"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"></path>
                      </svg>
                    </span>
                    <span class="mx-4 text-sm font-normal">Courses</span>
                  </a>
                  <a
                    class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                    href="/Test"
                  >
                    <span class="text-left">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="m-auto"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z"></path>
                      </svg>
                    </span>
                    <span class="mx-4 text-sm font-normal">Testimonial</span>
                  </a>
                  <a
                    class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                    href="#"
                  >
                    <span class="text-left">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="m-auto"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z"></path>
                      </svg>
                    </span>
                    <span class="mx-4 text-sm font-normal">
                      Course Registration
                    </span>
                  </a>
                  <a
                    class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                    href="#"
                  >
                    <span class="text-left">
                      <svg
                        width="20"
                        height="20"
                        class="m-auto"
                        fill="currentColor"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                      </svg>
                    </span>
                    <span class="mx-4 text-sm font-normal">
                      Academic Membership
                    </span>
                  </a>
                  <a
                    class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                    href="#"
                  >
                    <span class="text-left">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="m-auto"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"></path>
                      </svg>
                    </span>
                    <span class="mx-4 text-sm font-normal">
                      Corporate Membership
                    </span>
                  </a>
                  <a
                    class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                    href="#"
                  >
                    <span class="text-left">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="h-5 w-5"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"></path>
                      </svg>
                    </span>
                    <span class="mx-4 text-sm font-normal">Partnership</span>
                  </a>
                  <a
                    class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                    href="#"
                  >
                    <span class="text-left">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="h-5 w-5"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"></path>
                      </svg>
                    </span>
                    <span class="mx-4 text-sm font-normal">Industrial</span>
                  </a>
                  <a
                    class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                    href="#"
                  >
                    <span class="text-left">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="h-5 w-5"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"></path>
                      </svg>
                    </span>
                    <span class="mx-4 text-sm font-normal">Knowledge</span>
                  </a>
                  <a
                    class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                    href="#"
                  >
                    <span class="text-left">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="h-5 w-5"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"></path>
                      </svg>
                    </span>
                    <span class="mx-4 text-sm font-normal">Patrons</span>
                  </a>
                  <a
                    class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                    href="#"
                  >
                    <span class="text-left">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="h-5 w-5"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"></path>
                      </svg>
                    </span>
                    <span class="mx-4 text-sm font-normal">Events</span>
                  </a>
                  <a
                    class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                    href="#"
                  >
                    <span class="text-left">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="h-5 w-5"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"></path>
                      </svg>
                    </span>
                    <span class="mx-4 text-sm font-normal">Staffs</span>
                  </a>
                  <a
                    class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                    href="#"
                  >
                    <span class="text-left">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="h-5 w-5"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"></path>
                      </svg>
                    </span>
                    <span class="mx-4 text-sm font-normal">Admin Users</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
          <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4 ">
            <header class="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40 ">
              <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center ">
                <div class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0 ">
                  <div class="container relative left-0 z-50 flex w-3/4 h-auto h-full ">
                    <div class="relative flex items-center w-full lg:w-64 h-full group ">
                      <svg
                        class="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                      </svg>
                      {/* Searchbar */}
                      <input
                        type="text"
                        class="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
                        placeholder="Search"
                      />
                      <div class="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                        +
                      </div>
                    </div>
                  </div>
                  <div class="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto ">
                    <div class="relative inline-block text-left ">
                      <div class="flex justify-center">
                        <div>
                          <div class="dropdown relative">
                            <button
                              class="
         
          dropdown-toggle
          px-3
          py-2.5
          bg-blue-600
          text-white
          font-bold
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                              type="button"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Admin
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="caret-down"
                                class="w-1 ml-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                ></path>
                              </svg>
                            </button>
                            <ul
                              class="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          font-bold
          z-30
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <li>
                                <a
                                  class="dropdown-item text-sm py-2 px-4 font-bold font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                  href="#"
                                >
                                  Logout
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </header>

            <div class="overflow-auto h-screen pb-10 px-4 md:px-6">
              <div class="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
                <div class="w-full md:w-6/12">
                  <div class="shadow-lg w-full bg-white dark:bg-gray-700 relative overflow-hidden">
                    <a href="#" class="w-full h-full block">
                      <div class="flex items-center justify-between px-4 py-6 space-x-4">
                        <div class="flex items-center">
                          {/* <span class="rounded-full relative p-5 bg-yellow-100">
                                            <svg width="40" fill="currentColor" height="40" class="text-yellow-500 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z">
                                                </path>
                                            </svg>
                                        </span> */}
                          <p class="text-sm text-gray-700 dark:text-white ml-2 text-2xl font-bold border-b border-gray-200">
                            Course enquiries
                          </p>
                        </div>
                        <div class="border-b border-gray-200 mt-6 md:mt-0 text-black dark:text-white font-bold text-xl">
                          699
                          <span class="text-xs text-gray-400">/ 2000</span>
                        </div>
                      </div>
                      <div class="w-full h-3 bg-gray-100">
                        <div class="w-3/5 h-full text-center text-xs text-white bg-blue-400"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="flex items-center w-full md:w-1/2 space-x-4">
                  <div class="w-1/2">
                    <div class="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                      <p class="text-2xl text-black dark:text-white font-bold">
                        4
                      </p>
                      <p class="text-gray-400 text-base font-bold">
                        Active Courses
                      </p>
                    </div>
                  </div>
                  <div class="w-1/2">
                    <div class="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                      <p class="text-2xl text-black dark:text-white font-bold">
                        500
                      </p>
                      <p class="text-gray-400 text-base font-bold">
                        Brochure Download
                      </p>
                      {/* <span class="rounded-full absolute p-4 bg-purple-500 top-2 right-4">
                                    <svg width="40" fill="currentColor" height="40" class="text-white h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z">
                                        </path>
                                    </svg>
                                </span> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full sm:w-1/2 xl:w-1/3">
                <div class="mb-4 mx-0 sm:ml-4 xl:mr-4">
                  <div class="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
                    <p class="font-bold text-md p-4 text-black dark:text-white">
                      Tasks
                    </p>
                    <ul>
                      <li class="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                        <div class="flex items-center justify-start text-sm">
                          <span class="mx-4">01</span>
                          <span></span>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="mx-4 text-gray-400 dark:text-gray-300"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </li>
                      <li class="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                        <div class="flex items-center justify-start text-sm">
                          <span class="mx-4">02</span>
                          <span></span>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="mx-4 text-gray-400 dark:text-gray-300"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </li>
                      <li class="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                        <div class="flex items-center justify-start text-sm">
                          <span class="mx-4">03</span>
                          <span></span>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="mx-4 text-gray-400 dark:text-gray-300"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </li>
                      <li class="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                        <div class="flex items-center justify-start text-sm">
                          <span class="mx-4">04</span>
                          <span></span>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="mx-4 text-gray-400 dark:text-gray-300"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </li>
                      <li class="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                        <div class="flex items-center justify-start text-sm">
                          <span class="mx-4">05</span>
                          <span></span>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="mx-4 text-gray-400 dark:text-gray-300"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </li>
                      <li class="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                        <div class="flex items-center justify-start text-sm">
                          <span class="mx-4">06</span>
                          <span></span>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="mx-4 text-gray-400 dark:text-gray-300"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </li>
                      <li class="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                        <div class="flex items-center justify-start text-sm">
                          <span class="mx-4">07</span>
                          <span></span>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="mx-4 text-gray-400 dark:text-gray-300"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </main>
    </>
  );
};

export default Admin;
