import React from 'react';

function Partners({course}) {
    return (
        <div>
             <div
                  className="flex items-center justify-center h-screen;"
                  style={{ backgroundColor: "#19ceee3d", margin: "0px 100px", paddingBottom:"50px" }}
                >
                  <div
                    className=" rounded-lg shadow-xl p-8"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #036b7f, #007f93, #0093a6, #00a8b9, #02bdcc)",
                      opacity: "0.8",
                      marginTop: "110px",
                      boxShadow:"rgba(0, 0, 0, 0.151) 10px 10px 10px"
                    }}
                  >
                    <div className="grid sm:grid-cols-2 xs:grid-cols-1 gap-4">
                      <div className="flex items-center justify-center flex-col  p-4 rounded-lg w-48 space-y-4">
                        <img
                          className="rounded-full border-gray-100 shadow-sm w-55 h-55"
                          src="https://i2.wp.com/ictkerala.org/wp-content/uploads/2022/02/1.png?w=200&ssl=1"
                          alt="tcs ion"
                        />
                        <h1 className="text-gray-50 font-semibold">
                          Scholarship sponser
                        </h1>
                      </div>
                      <div className="flex items-center justify-center flex-col  p-4 rounded-lg w-48 space-y-4">
                        <img
                          class="rounded-full border-gray-100 shadow-sm w-55 h-55"
                          src="https://i2.wp.com/ictkerala.org/wp-content/uploads/2021/08/3-2.png?w=200&ssl=1"
                          alt="tcs ion"
                        />
                        <h1 className="text-gray-50 font-semibold">
                          Course Delivery
                        </h1>
                      </div>
                      <div className="flex items-center justify-center flex-col  p-4 rounded-lg w-48 space-y-4">
                        <img
                          class="rounded-full border-gray-100 shadow-sm w-55 h-55"
                          src="https://i1.wp.com/ictkerala.org/wp-content/uploads/2021/08/ibs.png?w=200&ssl=1"
                          alt="tcs ion"
                        />
                        <h1 className="text-gray-50 font-semibold">
                          Knowledge Partner
                        </h1>
                      </div>
                      <div className="flex items-center justify-center flex-col  p-4 rounded-lg w-48 space-y-4">
                        <img
                          className="rounded-full border-gray-100 shadow-sm w-55 h-55"
                          src="https://i1.wp.com/ictkerala.org/wp-content/uploads/2021/08/4-2.png?w=200&ssl=1"
                          alt="tcs ion"
                        />
                        <h1 className="text-gray-50 font-semibold">
                          Internship Partner
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    );
}

export default Partners;