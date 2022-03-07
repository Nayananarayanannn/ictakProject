import React, { useEffect } from "react";
import Aos from "aos";
function Members(props) {
  useEffect(() => {
    Aos.init({});
  }, []);

  const style = {
    open: `bg-green-500 hover:bg-green-700 text-sm mt-10 text-white font-bold py-2 px-4 rounded`,
    close: `bg-red-500 cursor-not-allowed text-sm mt-10 text-white font-bold py-2 px-4 rounded `,
  };

  return (
    <div>
      <div className="coursesList bg-gray-300">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="courseListHead block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 bg-[#FFFFFFA8] backdrop-blur-sm"
        >
          <h1>Premium Members</h1>
        </div>
        <div style={{marginTop:"200px",textAlign:'center'}} className="m-5 p-3">
          <h1  data-aos="flip-up"
          data-aos-duration="1000" className="text-4xl"> Membership Renewal</h1>
          <br/>
          <p data-aos="flip-up"
          data-aos-duration="1000">
            Existing Premium Member colleges are requested to submit the
            membership renewal request.
            <br /> Click the Existing Member Renewal Form and submit needed
            details.
            <br />
            New institutions are requested to submit the New membership
            Application form.
          </p>

          <button data-aos="flip-up"
          data-aos-duration="1000" className={style.close}>Registeration Closed</button>
        </div>
      </div>
      <section className=" relative py-20 bg-blue-300">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blue-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <section class="antialiased text-gray-600 px-4">
        <h1 className="text-4xl font-bold text-center pb-4">
            ICTAK Premium Member Colleges
        </h1>
          <div class="flex flex-col justify-center h-full">
            {/* <!-- Table --> */}
            <div data-aos="flip-up"
          data-aos-duration="1000" class="w-full max-w-5xl mx-auto block rounded-lg shadow-lg bg-[#FFFFFFA8] backdrop-blur-sm shadow-lg rounded-sm border border-gray-200">
              <header class="px-5 py-4 border-b border-gray-100"></header>
              <div class="p-3">
                <div class="overflow-x-auto">
                  <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Sl.No</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">
                            Membership ID
                          </div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">
                            Name of the Institution
                          </div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center">
                            Website Address
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                      <tr>
                        <td class="p-2 whitespace-nowrap">1</td>
                        <td class="p-2 whitespace-nowrap">ICTAK/2021/PM/001</td>
                        <td class="p-2 whitespace-nowrap">
                          Adi Shankara Institute of Engineering and Technology,
                          Kalady
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <a href="	https://www.adishankara.ac.in/">
                            https://www.adishankara.ac.in/{" "}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Members;
