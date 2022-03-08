import React, { useEffect } from "react";
import Aos from "aos";

function Techathlon(props) {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div>
      <div>
        <div className="coursesList bg-gray-300">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="courseListHead block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 bg-[#FFFFFFA8] backdrop-blur-sm"
          >
            <h1>TECHATHLON</h1>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <a
              data-aos="flip-down"
              data-aos-duration="1000"
              class="pr-10 relative ml-10 mr-10 bg-gray-900 block p-8 overflow-hidden border border-gray-100 rounded-lg"
              href=""
            >
              <span class="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
              <div class="justify-between sm:flex">
                <div>
                  <h5 class="text-center text-xl font-bold text-gray-100">
                    Techathlon 2022
                  </h5>
                </div>
              </div>
              <div class="mt-4 sm:pr-8">
                <p class="text-justify text-m text-gray-200">
                  Lorem ipsum dolor sit amet. Eos deleniti recusandae et omnis
                  quaerat vel voluptas odit est laborum porro ea doloremque quia
                  et tempora optio et dolorem molestias. Eos necessitatibus quis
                  ea galisum quasi ut minima perferendis.Ad quis omnis eos enim
                  molestias eos dolores consequuntur ut voluptatibus optio ut
                  blanditiis fuga? Ad amet doloremque At alias aspernatur et
                  blanditiis libero.In consectetur voluptate est aspernatur fuga
                  vel nesciunt modi a ipsa consequatur ut facere quia. Non
                  voluptatem consequatur sed necessitatibus perferendis ut
                  facilis iure eos optio autem hic beatae obcaecati. A explicabo
                  autem quo neque galisum cum sint quis et veniam nisi aut
                  numquam illum hic debitis consequatur aut neque animi. Ad quia
                  itaque ab asperiores doloremque et esse impedit et assumenda
                  iste ea deleniti laborum nam odio veritatis qui odio illum.
                  <p>
                    Lorem ipsum dolor sit amet. Eos deleniti recusandae et omnis
                    quaerat vel voluptas odit est laborum porro ea doloremque
                    quia et tempora optio et dolorem molestias. Eos
                    necessitatibus quis ea galisum quasi ut minima
                    perferendis.Ad quis omnis eos enim molestias eos dolores
                    consequuntur ut voluptatibus optio ut blanditiis fuga? Ad
                    amet doloremque At alias aspernatur et blanditiis libero.In
                    consectetur voluptate est aspernatur fuga vel nesciunt modi
                    a ipsa consequatur ut facere quia. Non voluptatem
                    consequatur sed necessitatibus perferendis ut facilis iure
                    eos optio autem hic beatae obcaecati. A explicabo autem quo
                    neque galisum cum sint quis et veniam nisi aut numquam illum
                    hic debitis consequatur aut neque animi. Ad quia itaque ab
                    asperiores doloremque et esse impedit et assumenda iste ea
                    deleniti laborum nam odio veritatis qui odio illum.{" "}
                  </p>{" "}
                </p>
              </div>
            </a>

            <div
              data-aos="flip-up"
              data-aos-duration="1000"
              class="mt-20 ml-10 mr-10 p-10 lg:flex items-center justify-between"
            >
              <div class="lg:w-1/2 w-full">
                <h1
                  role="heading"
                  class="md:text-5xl text-3xl font-bold leading-10 mt-3 text-black-600"
                >
                  {" "}
                  Pricing and Registration Details
                </h1>
                <br></br>
                <p
                  role="contentinfo"
                  class="text-xl leading-5 mt-5 text-black-600"
                >
                  Last Date of Registration: 3rd Apr 2022
                </p>
                <p
                  role="contentinfo"
                  class="text-xl leading-5 mt-5 text-black-600"
                >
                  Start Date: 03-08-2022
                </p>
                <p
                  role="contentinfo"
                  class="text-xl leading-5 mt-5 text-black-600"
                >
                  End Date:03-10-2022
                </p>
                <div class="w-56"></div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                class="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8"
                role="list"
              >
                <div
                  role="listitem"
                  class="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30"
                >
                  <div class="w-2.5 h-auto bg-indigo-700 rounded-tl-md rounded-bl-md"></div>
                  <div class="w-full p-8">
                    <div class="md:flex items-center justify-between">
                      <h2 class="text-2xl font-semibold leading-6 text-gray-800">
                        Our Pricing
                      </h2>
                      <p class="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                        <span class="font-bold text-2xl text-base">
                          ₹8000 + GST
                        </span>
                      </p>
                    </div>
                    <br></br>
                    <a
                      role="button"
                      class="bg-purple-600 hover:bg-indigo-700 text-white text-sm px-4 py-2  border rounded-full"
                    >
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Techathlon;
