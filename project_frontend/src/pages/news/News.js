import React, { useEffect } from  'react';
import "./news.css";
import Aos from 'aos';
const News = () => {

  useEffect(() => {
    Aos.init({});
  }, []);

return(
      
  <div className='p-4 newsPage'>
   
    <div className='newsHead' >
    <h1
    data-aos="flip-down" data-aos-duration="1000"
     className="underline text-4xl font-bold text-center pt-12 pr-4 pl-2 capitalize" > NORKA Roots provides opportunity to study job-oriented new-generation courses with scholarship </h1>
    </div>

    <div data-aos="fade-up" data-aos-duration="1000" className="newsPara pt-4 pr-4 pl-2 block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 bg-[#FFFFFFA8] backdrop-blur-sm aos-init aos-animate">

    <p className="text-center  pt-6 pr-4 pl-2  text-justify capitalize "> Aimed at addressing the issue of youth unemployment in Kerala,NORKA Roots is providing an opportunity to study job-oriented new-generation courses with scholarship.<b> NORKA Roots</b> is providing the opportunity for the youth to study innovative courses in association with ICT Academy, an initiative of the Government of India in collaboration with state governments and industries.</p>
    
    <p className="text-center  pt-2 pr-4 pl-2  text-justify capitalize " > ICT Academy is offering six courses, which have huge employment potential both within the country and abroad,with 75 per cent scholarship of NORKA Roots. Admissions have been started for courses such as <a href = "#" class=" text-red-500 hover:text-black font-bold"> Robotic Process Automation</a>,<a href = "#" class=" text-red-500 hover:text-black font-bold"> Data Science and Analytics</a>, <a href = "#" class=" text-red-500 hover:text-black font-bold">Full Stack Development</a>, <a href = "#" class=" text-red-500 hover:text-black font-bold">Cyber Security Analyst</a>,<a href = "#" class=" text-red-500 hover:text-black font-bold"> Software Testing</a> and <a href = "#" class=" text-red-500 hover:text-black font-bold">Digital Marketing</a>, which has huge demand in the industry. Considering the convenience of the working professionals, the classes have been scheduled as evening classes.</p>
    
    <p className="text-center   pt-2 pr-4 pl-2 text-justify capitalize "> The main highlight of the project is that it would enable students to build a successful and rewarding career by studying the courses from home as all the courses are being offered online.<b class=" text-red-500 hover:text-black">NORKA</b> is offering the scholarships to enable students from the state to study new generation courses despite the financial difficulties created by COVID-19. Scholarships will be provided based on the performance in the entrance examination.Another Key highlight of the course offered in association with ICT Academy is virtual internship of 125 hours in <a href ="https://www.tcsion.com/dotcom/TCSSMB/"class=" text-red-500 hover:text-black font-bold">TCS iON</a> for students who complete the six-month long certificate course.Apart from this, the students will get an opportunity to study around 14000 courses of <a href='https://www.linkedin.com/learning/?u=78898396' class=" text-red-500 hover:text-black font-bold">Linkedin Learning</a>. This would enable students to acquire the latest skills required to adapt to the changes happening in their respective fields. </p>
    
    <p className="text-center   pt-2 pr-4 pl-2 text-justify capitalize flex "> As part of the courses, placement assistance, IELTS basic coaching and cross culture training will also be provided to the students. The fee for the six-month long courses is Rs 19700 without GST. The last date for submission of applications is September 20, 2021. The  entrance examination will be held on September 25.</p>
    
    <p className="text-center   pt-2 pr-4 pl-2 text-justify capitalize flex "> For more details, contact at 7594051437 </p>
    
    </div>
    
    
    <div data-aos="flip-down" data-aos-duration="1000" className="pt-2 pr-4 pl-2 newsCourse">
    
    <a href = "#" class="  hover:text-black text-center pt-2 pr-4 pl-2  text-justify capitalize flex flex-col space-y-4 font-bold rounded-lg py-5 px-6 mb-3 text-lg text-indigo-700 inline-flex items-center w-full" role="alert">  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-right" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path>
    </svg>Full Stack Development Certificate Course</a>
    
    <p className="text-center tracking-wide  pt-2 pr-4 pl-2 text-justify capitalize">A full stack developer is a software expert who is capable of developing both the frontend and back end of a web application. Unlike frontend developers and backend developers, full stack developers are capable of fully designing and developing a web application. The course offered by the ICT Academy would help students to build a career of their own by understanding the basic lessons of the field. The students who successfully complete the course will be provided an internship in TCS iON. Besides, they would be provided an opportunity to study 14000 courses on Linkedin Learning. Course Fee is Rs19700 exclusive of GST. The course has 140 seats.</p>

    <a href = "#" class="  hover:text-black text-center pt-2 pr-4 pl-2  text-justify capitalize font-bold flex flex-col space-y-4 font-bold rounded-lg py-5 px-6 mb-3 text-lg text-indigo-700 inline-flex items-center w-full" role="alert">  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-right" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path>
    </svg>Data Science and Analytics Certificate Course</a>
    
    <p className="text-center tracking-wide  pt-2 pr-4 pl-2 text-justify capitalize">Learning of the science behind data, which has become the most valuable thing in the world, will open vast opportunities for the students. ICT Academy is providing an opportunity for the students to learn the course by sitting at the comfort of their home. The course is suitable for graduates and professionals. The duration of the course is six months. The students who successfully complete the course will be provided an opportunity to do an internship in TCS iON.They will also get free admission for Linkedin Learning courses. Students who have completed graduation in any engineering or science streams can apply for the course. Course Fee is Rs 19700+GST. Number of seats is 140.</p>

    <a href = "#" class=" text-red-500 hover:text-black text-center pt-2 pr-4 pl-2  text-justify capitalize font-bold flex flex-col space-y-4 rounded-lg py-5 px-6 mb-3 text-lg text-indigo-700 inline-flex items-center w-full" role="alert">  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-right" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path>
    </svg>     Robotic Process Automation</a>
    
    <p className="text-center tracking-wide  pt-2 pr-4 pl-2 text-justify capitalize">Robotic Process Automation is another new-generation course that has huge employment potential in India as well as abroad. Robotic Process Automation (RPA) is the process of carrying out basic and repetitive office works quickly and accurately by using software bots.The demand for RPA experts has been growing in sectors such as banking. By acquiring skills in the sector, students can build a successful and rewarding career. 70 students will be admitted in the six-month long course. Science and Engineering graduates can apply for the course. Course Fee is Rs. 19700 without GST.</p>

    <a href = "#" class=" text-red-500 hover:text-black text-center  pt-2 pr-4 pl-2  text-justify capitalize font-bold flex flex-col space-y-4 rounded-lg py-5 px-6 mb-3 text-lg text-indigo-700 inline-flex items-center w-full" role="alert">  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-right" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path>
    </svg>     Cyber Security Analytics</a>
    
    <p className="text-center tracking-wide  pt-2 pr-4 pl-2 text-justify capitalize">As cyber-attacks have been on the rise, the significance of Cyber Security Analyst is growing. It is the job of cyber security analysts to ensure protection of data and machines, including computers and smartphones from cyber-attacks. It is also the responsibility of cyber security analysts to prevent and check hacking, malware, fishing, attacks on Internet of Things, data breaches and spying. The course will help students to acquire the best skills required for becoming successful in cyber security. The duration of the course is six also months. The Cyber Security Analytics course has 140 seats.Students with graduation in any science or engineering streams can apply for the course. Course Fee is Rs 19000 exclusive of GST. After the completion of the course, the students will get an opportunity to do an internship in TCS iON.</p>

    <a href = "#"class=" text-red-500 hover:text-black text-center  pt-2 pr-4 pl-2  text-justify capitalize font-bold flex flex-col space-y-4 rounded-lg py-5 px-6 mb-3 text-lg text-indigo-700 inline-flex items-center w-full" role="alert">  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-right" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path>
    </svg>    Digital Marketing </a>
    
    <p className="text-center tracking-wide  pt-2 pr-4 pl-2 text-justify capitalize">Digital Marketing is a word that has become very popular post COVID-19 outbreak. Many traders around us have switched over to online business after hit by COVID-19 caused lockdown. Digital Marketers is a group of experts who help business entities, from small to large, to switch to online and increase their business using digital platforms. As everything has become digital, the field of Digital Marketing has huge employment potential and there is huge demand for digital marketers in the job market. Therefore, youngsters who have been facing a crisis in their career can build a rewarding career by learning Digital Marketing course. The students who perform well in the entrance examination will be provided a scholarship of 75 per cent of the course fee. The duration of the course is also six months. Number of seats is 70. Graduates of any stream can apply for a Digital Marketing course. Fee is Rs 19700 without tax.</p>

    
    <a href = "#" class=" text-red-500 hover:text-black text-center pt-5 pr-4 pl-2  text-justify capitalize font-bold flex flex-col space-y-4 rounded-lg py-5 px-6 mb-3 text-lg text-indigo-700 inline-flex items-center w-full" role="alert">  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-right" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path>
    </svg>    Software Testing</a>
    
    <p className="text-center tracking-wide  pt-2 pr-4 pl-2 text-justify capitalize">Ensuring the quality of the software as per the clients’ requirement is called Software Testing. In the computer era, a well-trained Software Tester has high demand in the industry. As the demand for such professionals are increasing day by day, this course will be of great use for candidates looking for a bright career. A candidate, who starts off his career as a Test Engineer can raise to the position of Senior Test Engineer, Test Manager in his later career. The course offers classes in, the need for software testing, various testing methods, tools used, etc. The duration of the course is six months. After the course the students can avail 125 hours internship at TCS iON. Total number of seats available is 70. Science/ Engineering graduates are eligible to apply for the course. Course fee- Rs. 19,700 + GST</p>
     
    </div>

    
    <section className=" relative py-20 bg-blue-300">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-blue-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="pt-2 pr-4 pl-2">

    <h1 data-aos="flip-down" data-aos-duration="1000" className="font-bold pt-6 pr-4 pl-2 ">Admission Formalities</h1>

    <p data-aos="flip-down" data-aos-duration="1000" className="pt-5 pr-4 pl-2">Admission to all courses of six month duration will be on the basis of aptitude test. Test will be on the subjects- Numerical ability, logical reason and Computer Science Basics. Candidates, who pass with flying colours in the test to be conducted online on 25 September 2021, can pursue the new gen courses with 75% scholarship from NORKA Roots.  Candidates will be intimated in advance regarding the time and procedures of the test.</p>
    
    <h2 data-aos="flip-down" data-aos-duration="1000" className="pt-5 pr-4 pl-2">Over 500 students made jobs ready in  Covid time.</h2>

    <p data-aos="flip-down" data-aos-duration="1000" className="pt-5 pr-4 pl-2">When the world faced a grave crisis during the Covid times, over 500 students were made job ready through the new gen courses conducted by ICT Academy in association with NORKA Roots. ICT Academy achieved this through the long-term and short-term courses conducted during the last six months. Over 70 top IT companies were ready with job opportunities for students who passed out from ICT Academy. More than 200 students were offered internship facilities at TCS iON. In the Covid crisis period, ICT Academy could find secure jobs for many students through the new gen courses offered by it.</p>
    
    </div>
         
    </section>

    
    </div>

    );

}

export default News;