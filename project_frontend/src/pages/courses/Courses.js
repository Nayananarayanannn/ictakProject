import React, { useEffect} from "react";
import "./CourseCards.scss";
// import CourseLists from "./CourseList";
import Aos from "aos";
import CoursesCard from "./course/CoursesCard";

function Courses(props) {

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="coursesList bg-gray-300">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="courseListHead block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 bg-[#FFFFFFA8] backdrop-blur-sm"
      >
        <h1>Our Courses</h1>
      </div>
      <CoursesCard Aos={Aos}/>
    </div>
  );
}

export default Courses;
