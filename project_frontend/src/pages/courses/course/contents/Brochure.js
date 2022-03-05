import React from "react";

function Brochure({ course }) {
	
  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form submitted successfully");
  };

  return (
    <div>
      <div className="courseBrochure">
        <div className="wrapper">
          <h1>{course.title}</h1>
          <h3>Brochure Download</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <br />
          <input type="text" name="name" required />
          <br />
          <label>Phone</label>
          <br />
          <input type="tel" name="phone" required />
          <br />
          <label>Email</label>
          <br />
          <input type="email" name="mail" required />
          <br />
          <label>Are you employed?</label>
          <br />
          Yes :<input type="radio" name="employed" />
          <br />
          NO :<input type="radio" name="employed" />
          <br />
          <label>Highest Graduation</label>
          <br />
          <input type="text" name="degree" />
          <br />
          <button type="submit">SEND BROCHURE</button>
        </form>
      </div>
    </div>
  );
}

export default Brochure;
