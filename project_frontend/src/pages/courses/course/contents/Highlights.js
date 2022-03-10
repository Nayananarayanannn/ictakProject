import React from "react";

function Highlights({ course }) {
  let hilt = course.highlights;
  return (
    <div>
      <div className="highlightHead">
        <h1>COURSE HIGHLIGHTS</h1>
      </div>
      <div className="courseHighlight">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 m-1">
              <div
                data-aos="flip-up"
                data-aos-duration="1000"
                className="highlightCard"
              >
                <div className="highlightinfo">
                  <h1>100% SCHOLARSHIP FOR FEMALE CANDIDATES</h1>
                </div>
              </div>
              <div
                data-aos="flip-up"
                data-aos-duration="1000"
                className="highlightCard"
              >
                <div className="highlightinfo">
                  <h1>70% SCHOLARSHIP FOR MALE CANDIDATES</h1>
                </div>
              </div>
              <div
                data-aos="flip-up"
                data-aos-duration="1000"
                className="highlightCard"
              >
                <div className="highlightinfo">
                  <h1>ACCESS TO LINKEDIN LEARNING WITH 14,000 COURSES</h1>
                </div>
              </div>
              <div
                data-aos="flip-up"
                data-aos-duration="1000"
                className="highlightCard"
              >
                <div className="highlightinfo">
                  <h1>125 HRS VIRTUAL INTERNSHIP WITH TCS ION</h1>
                </div>
              </div>
              <div
                data-aos="flip-up"
                data-aos-duration="1000"
                className="highlightCard"
              >
                <div className="highlightinfo">
                  <h1>100% PLACEMENT ASSISTANCE GUARANTEE*</h1>
                </div>
              </div>
              <div
                data-aos="flip-up"
                data-aos-duration="1000"
                className="highlightCard"
              >
                <div className="highlightinfo">
                  <h1>AVAILABILITY OF BADGES FROM AWS</h1>
                </div>
              </div>
              <div
                data-aos="flip-up"
                data-aos-duration="1000"
                className="highlightCard"
              >
                <div className="highlightinfo">
                  <h1>TRAINING METHODOLOGY USING PERL MODEL</h1>
                </div>
              </div>
              <div
                data-aos="flip-up"
                data-aos-duration="1000"
                className="highlightCard"
              >
                <div className="highlightinfo">
                  <h1>INDUSTRY GRADE CERTIFICATION</h1>
                </div>
              </div>
          
        </div>
      </div>
    </div>
  );
}

export default Highlights;
