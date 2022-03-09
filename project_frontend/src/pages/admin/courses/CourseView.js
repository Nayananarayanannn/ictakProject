
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CourseView() {
  const [course,setCourse] = useState([]);
  
  const { name } = useParams();

    // Fetch particular course details from DB based on parameter id
    useEffect(() => {
      var config = {
        method: "get",
        url: `http://localhost:8000/api/courses/${name}`,
      };
  
      axios(config)
        .then(function (response) {
          setCourse(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);
    return (
      
              <div style={{maxHeight:"80vh",overflowY:"scroll"}}
                className="inline-block align-bottom bg-white rounded-lg w-full
                 text-left shadow-xl 
              transform transition-all 
              sm:my-8 sm:align-middlesm:w-full"
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start" >
                    <div
                      className="mx-auto flex-shrink-0 flex items-center
                     justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0
                      sm:h-10 sm:w-10"
                    >
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {course?.name}
                      </h3>
                      <div className="mt-2"  >
                       <img
                            alt="FSD"
                            src={process.env.PUBLIC_URL + `/courseImages/${course.image}`}
                            className=" mx-auto "
                            style={{height:"8rem"}}
                          />
                        <ul>
                          <li><b>url :</b> {course.url}</li>
                          <li><b>Name :</b> {course.name}</li>
                          <li><b>Status :</b> {course.status}</li>
                          <li><b>Title :</b> {course.title}</li>
                          <li><b>Quote :</b> {course.quote}</li>
                          <li><b>Short description :</b> {course.shortDescription}</li>
                          <li><b>Objectives: </b>{course.objectives?.map((obj)=>(
                            <ul style={{listStyle:"outside"}}>
                              <li>{obj}</li>
                            </ul>
                          ))}</li>
                          <li><b>Highlights: </b>{course.highlights?.map((hil)=>(
                            <ul style={{listStyle:"outside"}}>
                              <li>{hil}</li>
                            </ul>
                          ))}</li>
                          <li><b>Important Dates: </b>{course.dates?.map((date)=>(
                            <ul>
                              <li>{date}</li>
                            </ul>
                          ))}</li>
                          <li><b>Agenda: </b>{course.agenda?.map((agen)=>(
                            <ul style={{listStyle:"outside"}}>
                              <li>{agen}</li>
                            </ul>
                          ))}</li>
                          <li><b>eligibility : </b>{course.eligibility?.map((elig)=>(
                            <ul style={{listStyle:"outside"}}>
                              <li>{elig}</li>
                            </ul>
                          ))}</li>
                          <li>fees: {course.fee}</li>
                          <li><b>Testimonials : </b>{course.testimonials?.map((test,index)=>(
                            
                            <ul style={{listStyle:"outside"}}>
                            <h2 style={{backgroundColor:"black",padding:"2px",color:"white"}}>{index+1}</h2>
                              <li><b>name:</b> {test.name}</li>
                              <li><b>Placed @ :</b>{test.placed}</li>
                              <li><b>Quote :</b>{test.quote}</li>
                              <img src={`${test.image}`} alt ={test.name}/>
                            </ul>
                          ))}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
      <a href='/admin/coursedash'><p className='px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"'>Close</p></a>
                </div>
              </div>
    );
  
}