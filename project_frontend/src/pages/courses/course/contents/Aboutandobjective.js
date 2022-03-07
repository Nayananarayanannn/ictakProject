import React, { useEffect } from "react";
import Aos from "aos";

function Aboutandobjective({ course }) {
  useEffect(() => {
    Aos.init({});
  }, []);

  let obj = course.objectives;

  return (
    <div>
      <div className="courseContent">
        <div className="deck">
          <div data-aos="fade-left" data-aos-duration="1000" className="card">
            <header className="cardHeader">
              <i className="fab fa-instagram cardHeader_type"></i>
            </header>
            <div className="cardBody">
              <img
                className="aboutImage"
                src="https://i0.wp.com/ictkerala.org/wp-content/uploads/2018/12/ict-1.gif?fit=678%2C382&ssl=1"
                alt="about"
              />
              <section className="cardStats"></section>
            </div>
          </div>

          <div data-aos="fade-right" data-aos-duration="1000" className="card">
            <header className="cardHeader">
              <i className="fab fa-facebook-f cardHeader_type"></i>
              <span className="cardHeader_account">About The Course</span>
            </header>
            <div className="cardBody">
              <p className="cardText">{course.shortDescription}</p>
              <section className="cardStats"></section>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="1000" className="card">
            <header className="cardHeader">
              <i className="fab fa-twitter cardHeader_type"></i>
              <span className="cardHeader_account">OBJECTIVES</span>
            </header>
            <div className="cardBody">
              <ul type="circle" className="cardText">
                {obj?.map((el) => {
                  return (
                    <>
                      <li style={{ listStyle: "outside" }}>{el}</li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutandobjective;
