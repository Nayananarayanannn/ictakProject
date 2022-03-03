import React, { useEffect} from "react";
import "./Course.scss";
import Aos from 'aos';

function Aboutandobjective({course}) {
    useEffect(() => {
        Aos.init({});  
      }, []);

      // const object=(el)=>{
      //   for (let i=0;i<el.length;i++){
      //     return el[i];
      //   }
      // }

      let obj = course.objectives;
      
    return (
        <div>
            <div className="courseContent">
                  <div className="deck">
                    <div data-aos= "fade-left"
     data-aos-duration="1000" className="card">
                      <header className="cardHeader">
                        <i className="fab fa-instagram cardHeader_type"></i>
                      </header>
                      <div className="cardBody">
                        <img
                          className="aboutImage"
                          src="https://media.istockphoto.com/photos/elearning-education-concept-learning-online-picture-id1290864946?b=1&k=20&m=1290864946&s=170667a&w=0&h=zZq7rG5McSptSIpEm9f8iTGd3Mrdkcslakr91T7qTYM="
                          alt="about"
                        />
                        <section className="cardStats"></section>
                      </div>
                    </div>

                    <div data-aos= "fade-right"
     data-aos-duration="1000" className="card">
                      <header className="cardHeader">
                        <i className="fab fa-facebook-f cardHeader_type"></i>
                        <span className="cardHeader_account">
                          About The Course
                        </span>
                      </header>
                      <div className="cardBody">
                        <p className="cardText">{course.shortDescription}</p>
                        <section className="cardStats"></section>
                      </div>
                    </div>

                    <div data-aos= "fade-left"
     data-aos-duration="1000" className="card">
                      <header className="cardHeader">
                        <i className="fab fa-twitter cardHeader_type"></i>
                        <span className="cardHeader_account">OBJECTIVES</span>
                      </header>
                      <div className="cardBody">
                        <ul type="circle" className="cardText">
                        
                        {obj?.map((el)=>{
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