import React, { useEffect, useState} from "react";
import "./Course.scss";
import { useParams } from "react-router-dom";
// import CourseList from "../CourseList";
import Aos from "aos";
import "aos/dist/aos.css";
import Aboutandobjective from "./Aboutandobjective";
import Highlights from "./Highlights";
import Partners from "./Partners";
import Parallax from "./Parallax";
import Purchase from "./Purchase";
import Brochure from "./Brochure";
import Testimonial from "./Testimonial";

var axios = require('axios')

function Course(props) {
  let { id } = useParams();

  const [course,setCourse] = useState([]);
  
  const style = {
    open: `bg-green-500 hover:bg-green-700 text-sm mt-10 text-white font-bold py-2 px-4 rounded`,
    close: `bg-red-500 cursor-not-allowed text-sm mt-10 text-white font-bold py-2 px-4 rounded `,
  };

  useEffect(() => {
    Aos.init({});
  }, []);

  useEffect(()=>{
    var config = {
      method: 'get',
      url: `http://localhost:8000/api/courses/${id}`,
    };
    
    axios(config)
    .then(function (response) {
      setCourse(response.data);
      console.log(response.data);
      
    })
    .catch(function (error) {
      console.log(error);
    });
  },[])
  console.log(course);

  return (
    <>
      
      <div className="course">
              <div className="courseLanding">
                <img
                  className="courseBackground"
                  src={process.env.PUBLIC_URL + `/courseImages/${course.image}`}
                  alt={course.name}
                />
              </div>

              <div className="courseTitle">
                <h1 data-aos= "zoom-in"
     data-aos-duration="1500">{course.title}</h1>
                {course.status === "open" ? (
                  <button type="button" className={style.open}>
                    APPLY NOW
                  </button>
                ) : (
                  <button className={style.close}>Registration closed</button>
                )}
              </div>

              <div className="courseBody">
                {/* about and objective */}
                <Aboutandobjective course={course} />

                {/* highlights */}
                <Highlights course={course} />

                {/* partners */}
                <Partners course={course} />
              </div>
              {/* parallax image */}
              <Parallax course={course} style={style} />
              {/*-------- purchase course---------------- */}
              <Purchase course={course} style={style} />
              {/* testimonials */}
              <Testimonial course={course}/>

              {/* ---brochure download-- */}
              <Brochure course={course} />
            </div>
    </>
  );
}

export default Course;
