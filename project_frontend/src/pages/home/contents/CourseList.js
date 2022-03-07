import React, { useEffect}from "react";
import CoursesCard from "../../courses/course/CoursesCard";
import Aos from "aos";

const CoursesList = (props) => {
    useEffect(() => {
        Aos.init({});
      }, []);

  return (
    <section className="relative py-20 bg-[#B8FFF9]">
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
            className="text-[#B8FFF9] fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div class="grid grid-cols-1 gap-4">
      <h1 className="text-4xl text-black-500 text-center font-bold"> Our Courses</h1>
      <CoursesCard Aos={Aos}/>
      <a href="/courses" className="no-underline hover:underline text-xl font-semibold text-center">View More...</a>
      </div>
    </section>
  );
};

export default CoursesList;