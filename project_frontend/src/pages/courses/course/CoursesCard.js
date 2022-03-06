import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CoursesCard(props) {
    const [CourseLists, setCourseLists] = useState([]);

    const style = {
        open: `bg-green-500 hover:bg-green-700 text-sm mt-10 text-white font-bold py-2 px-4 rounded`,
        close: `bg-red-500 cursor-not-allowed text-sm mt-10 text-white font-bold py-2 px-4 rounded `,
      };

      // Fetch course list data from DB
  useEffect(() => {
    var config = {
      method: "get",
      url: "http://localhost:8000/api/courses",
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setCourseLists(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
    return (
        <div>
                  <div className=" grid lg:grid-cols-2 md:grid-cols-1 gap-2">
        {CourseLists.map((course, index) => (
          <>
            <div
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
              className={index % 2 === 0 ? "blog-card" : "blog-card alt"}
            >
              <div className="meta">
                <div className="photo">
                  <img
                    src={
                      process.env.PUBLIC_URL + `/courseImages/${course.image}`
                    }
                    alt={course.name}
                  />{" "}
                </div>
                <div className="details">
                  <h1> {course.name} </h1>
                  {/* apply button sctive or inactive based on registration status */}
                  {console.log(course.status)}
                  {course.status === "open" ? (
                    <Link to={`/course/${course.url}/apply`} state={{ course }}>
                      <button type="button" className={style.open}>
                        APPLY NOW
                      </button>
                    </Link>
                  ) : (
                    <button className={style.close}>Registration closed</button>
                  )}
                </div>
              </div>
              <div className="description">
                <h1>{course.title}</h1>
                <h2>{course.quote}</h2>
                <p>{course.shortDescription}</p>
                <p className="read-more">
                  <Link to={`/course/${course.url}`}>Read More</Link>
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
        </div>
    );
}

export default CoursesCard;