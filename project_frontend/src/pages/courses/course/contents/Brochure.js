import React, { useState } from "react";
var axios = require("axios");
var qs = require("qs");

function Brochure({ course }) {
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    mail: "",
    degree: "",
  });

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    mailBrochure();
    alert(`Brochure has been sent to mail id ${course.mail}`);
    setFormValue({name:"",phone:"",mail:"",degree:""})
    
  };

  // manage form change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  // post form data to get brochure in mail
  function mailBrochure() {
    var data = qs.stringify({
      mail: formValue.mail,
      name:formValue.name
    });
    var config = {
      method: "post",
      url: `http://localhost:8000/api/courses/${course.url}/mailer`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
          <input
            type="text"
            onChange={handleChange}
            value={formValue.name}
            name="name"
            required
          />
          <br />
          <label>Phone</label>
          <br />
          <input
            type="tel"
            onChange={handleChange}
            value={formValue.phone}
            name="phone"
            required
          />
          <br />
          <label>Email</label>
          <br />
          <input
            type="email"
            onChange={handleChange}
            value={formValue.mail}
            name="mail"
            required
          />
          <br />
          <label>Are you employed?</label>
          <br />
          Yes :
          <input type="radio" name="employed" />
          <br />
          NO :
          <input type="radio" name="employed" />
          <br />
          <label>Highest Graduation</label>
          <br />
          <input
            type="text"
            onChange={handleChange}
            value={formValue.degree}
            name="degree"
          />
          <br />
          <button type="submit">SEND BROCHURE</button>
        </form>
      </div>
    </div>
  );
}

export default Brochure;
