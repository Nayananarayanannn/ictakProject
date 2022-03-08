
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useParams } from 'react-router-dom';

export default function CourseView({course}) {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  const { name } = useParams();
  console.log(name);
  if(course.url === name){
    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div
            className="flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block
           sm:p-0"
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
  
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              
            >
              <div style={{overflowY:"scroll",maxHeight:"70vh",marginTop:"10vh"}}
                className="inline-block align-bottom bg-white rounded-lg
                 text-left shadow-xl 
              transform transition-all 
              sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
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
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        {course?.name}
                      </Dialog.Title>
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
                 
                  <a href='/admin/coursedash'><button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center
                    rounded-md border border-gray-300 shadow-sm px-4 py-2
                     bg-white text-base font-medium text-gray-700
                      hover:bg-gray-50 focus:outline-none focus:ring-2
                       focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0
                        sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    OK
                  </button>
                  </a>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    );
  }
return null;
  
}