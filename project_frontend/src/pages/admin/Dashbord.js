import React from 'react';

function Dashbord(props) {
    return (
        <div>
                        <div class="overflow-auto h-screen pb-10 px-4 md:px-6">
              <div class="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
                <div class="w-full md:w-6/12">
                  <div class="shadow-lg w-full bg-gray-700 relative overflow-hidden">
                    <a href="#" class="w-full h-full block">
                      <div class="flex items-center justify-between px-4 py-6 space-x-4">
                        <div class="flex items-center">
                          {/* <span class="rounded-full relative p-5 bg-yellow-100">
                                            <svg width="40" fill="currentColor" height="40" class="text-yellow-500 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z">
                                                </path>
                                            </svg>
                                        </span> */}
                          <p class="text-sm text-white ml-2 text-2xl font-bold border-b border-gray-200">
                            Course enquiries
                          </p>
                        </div>
                        <div class="border-b border-gray-200 mt-6 md:mt-0 text-white font-bold text-xl">
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
                    <div class="shadow-lg px-4 py-6 w-full bg-gray-700 relative">
                      <p class="text-2xl text-white font-bold">
                        4
                      </p>
                      <p class="text-gray-400 text-base font-bold">
                        Active Courses
                      </p>
                    </div>
                  </div>
                  <div class="w-1/2">
                    <div class="shadow-lg px-4 py-6 w-full bg-gray-700 relative">
                      <p class="text-2xl text-white font-bold">
                        500
                      </p>
                      <p class="text-gray-400 text-base font-bold">
                        Brochure Download
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full sm:w-1/2 xl:w-1/3">
                <div class="mb-4 mx-0 sm:ml-4 xl:mr-4">
                  <div class="shadow-lg rounded-2xl bg-gray-700 w-full">
                    <p class="font-bold text-md p-4 text-white">
                      Tasks
                    </p>
                    <ul>
                      <li class="flex items-center text-gray-200 justify-between py-3 border-b-2 border-gray-800">
                        <div class="flex items-center justify-start text-sm">
                          <span class="mx-4">01</span>
                          <span></span>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="mx-4 text-gray-300"
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
                      <li class="flex items-center text-gray-200 justify-between py-3 border-b-2 border-gray-800">
                        <div class="flex items-center justify-start text-sm">
                          <span class="mx-4">02</span>
                          <span></span>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="mx-4 text-gray-300"
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
                      <li class="flex items-center text-gray-200 justify-between py-3 border-b-2 border-gray-800">
                        <div class="flex items-center justify-start text-sm">
                          <span class="mx-4">03</span>
                          <span></span>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="mx-4 text-gray-300"
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
                      <li class="flex items-center text-gray-200 justify-between py-3 border-b-2 border-gray-800">
                        <div class="flex items-center justify-start text-sm">
                          <span class="mx-4">04</span>
                          <span></span>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="mx-4 text-gray-300"
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
                      <li class="flex items-center text-gray-200 justify-between py-3 border-b-2 border-gray-800">
                        <div class="flex items-center justify-start text-sm">
                          <span class="mx-4">05</span>
                          <span></span>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="mx-4 text-gray-300"
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
                      <li class="flex items-center text-gray-200 justify-between py-3 border-b-2 border-gray-800">
                        <div class="flex items-center justify-start text-sm">
                          <span class="mx-4">06</span>
                          <span></span>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="mx-4 text-gray-300"
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
                      <li class="flex items-center text-gray-200 justify-between py-3 border-b-2 border-gray-800">
                        <div class="flex items-center justify-start text-sm">
                          <span class="mx-4">07</span>
                          <span></span>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="mx-4 text-gray-300"
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

            
        </div>
    );
}

export default Dashbord;