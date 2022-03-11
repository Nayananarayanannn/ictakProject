import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-[#111827] px-2 sm:px-4 py-2.5  fixed top-0 inset-x-0 z-50 ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <img
            className="h-[2.25rem] rounded-md"
            src="https://ictkerala.org/wp-content/uploads/2019/01/cropped-ict-ico.png"
            height={40}
            width={40}
            alt="NFT Blog Logo"
          />
          <span className="self-center text-2xl mx-1 font-semibold whitespace-nowrap text-white">
            ICTAK
          </span>
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-7 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="/"
                className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-[#5297E0] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about-us"
                className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-[#5297E0] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/courses"
                className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-[#5297E0] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/partnership"
                className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-[#5297E0] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Partnership
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownMembership"
                class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-100 border-b border-gray-100 hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-[#5297E0] md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Membership{" "}
                <svg
                  class="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              <div
                id="dropdownMembership"
                class="hidden z-10 w-44 text-base list-none bg-[#111827] rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul class="py-1" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a
                      href="/membership/academic"
                      class="block py-2 px-4 text-sm text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      Academic
                    </a>
                  </li>
                  <li>
                    <a
                      href="/membership/corporate"
                      class="block py-2 px-4 text-sm text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      Corporate
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownEvents" class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-100 border-b border-gray-100 hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-[#5297E0] md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Events <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
           
            <div id="dropdownEvents" class="hidden z-10 w-44 text-base list-none bg-[#111827] rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="/events/icset" class="block py-2 px-4 text-sm text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">ICSET</a>
                  </li>
                  <li>
                    <a href="/events/techathlon" class="block py-2 px-4 text-sm text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Techathlon</a>
                  </li>
                </ul>
                
            </div>
        </li>
            <li>
              <a
                href="https://retail.ictkerala.org"
                className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-[#5297E0] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                target="_blank"
                rel="noreferrer"
              >
                Paatshala
              </a>
            </li>
            <li>
              <a
                href="/news"
                className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-[#5297E0] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                News
              </a>
            </li>
            <li>
              <a
                href="https://ictkerala.zohorecruit.com/jobs/Careers"
                className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-[#5297E0] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                target="_blank"
                rel="noreferrer"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="/#contact-us"
                className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-[#5297E0] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-[#5297E0] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;