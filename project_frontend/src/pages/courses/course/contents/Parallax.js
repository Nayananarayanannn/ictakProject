import React from "react";

function Parallax({ course, style }) {
  return (
    <div>
      <div className="parallaxContent">
        <div class="header">
          <h1 style={{ padding: "0", margin: "0" }}>
            Are you interested to join the course?
          </h1>
          {course.status === "open" ? (
            <button type="button" className={style.open}>
              APPLY NOW
            </button>
          ) : (
            <button className={style.close}>Registration closed</button>
          )}
        </div>
        <div className="parallax trans1">
          <div className="txt right">
            We all have the ability. <br />
            The difference is how we use it
          </div>
          <div style={{ clear: "both" }}></div>
          <div className="txt right sub">
            The best way to predict the future is
            <br />
            to Create it
          </div>
        </div>
        <div className="content">
          <img
            style={{
              float: "right",
              marginTop: "10px",
              marginRight: "15px",
            }}
            src="https://ak7.picdn.net/shutterstock/videos/1007397547/thumb/1.jpg"
            alt="Test"
          />
          <h1>General aptitude test</h1>
          <br />
          <h3>{course.title}</h3>
          <br />
          <h4>NORKA ROOTS Entrance test</h4>
          <ul>
            <li>Numerical Ability</li>
            <li>Logical Reasoning</li>
            <li>Computer Science Fundamentals</li>
          </ul>
          <br />
          <h4>Duration of the test will be 90 mins</h4>
          <div style={{ clear: "both" }}></div>
        </div>
        <div className="parallax trans2"></div>
        <div className="content right">
          <img
            style={{
              float: "left",
              marginTop: "10px",
              marginLeft: "15px",
              width: "322",
              height: "250",
            }}
            src="https://www.canarahsbclife.com/content/dam/choice/blog-inner/images/what-is-the-eligibility-to-have-life-insurance.jpg"
            alt="Mr and Mrs"
          />
          <h1>Eligibility</h1>
          {course.eligibility?.map((el) => {
            return <h4>{el}</h4>;
          })}
          <div style={{ clear: "both" }}></div>
        </div>
        <div className="parallax trans3">
          <div className="txt left">Course Agenda</div>
          <div style={{ clear: "both" }}></div>
          <div className="txt left sub">
            <ul>
              {course.agenda?.map((el) => {
                return <li>{el}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parallax;
