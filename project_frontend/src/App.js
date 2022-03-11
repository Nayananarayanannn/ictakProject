import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import About from "./pages/about/About";
import Courses from './pages/courses/Courses';
import Course from  './pages/courses/course/Course';
import News from "./pages/news/News";
import RegisterCourse from "./pages/courses/course/contents/RegisterCourse";
import Partnership from "./pages/partnership/Partnership";
import Academic from "./pages/membership/academic/Academic";
import Members from "./pages/membership/academic/Members";
import NotFoundPage from "./components/NotFoundPage";
import Corporate from "./pages/membership/corporate/Corporate";
import Register from "./pages/membership/corporate/Register";
import Admin from "./pages/admin/Admin";
import Testimonial from "./pages/admin/Testimonial";
import CourseDash from "./pages/admin/courses/CourseDash";
import Example from "./pages/admin/courses/CourseView";
import Event from "./pages/events/ICSET";
import ICSET from "./pages/events/ICSET";
import Techathlon from "./pages/events/Techathlon";
import PartnershipRegister from "./pages/partnership/PartnershipRegister";





function App() {
  const admin = localStorage.getItem('admin');
  console.log(admin);
  return (
    <>
      <Router>
      {admin =='true'? <></> : <NavBar/>}
        {/* Routings */}
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/about-us" element={<About />} />
          <Route path='/courses' element = {<Courses/>}/>
          <Route path='/course/:id' element = {<Course/>}/>
          <Route path='/course/:id/apply' element = {<RegisterCourse/>}/>
          <Route path='/news' element = {<News/>}/>
          <Route path='/partnership' element = {<Partnership/>}/>
          <Route path="/partnership/register" element = {<PartnershipRegister/>}/>
          <Route path='/membership/academic' element = {<Academic/>}/>
          <Route path='/membership/academic/members' element = {<Members/>}/>
          <Route path='/membership/corporate' element = {<Corporate/>}/>
          <Route path='/membership/corporate/register' element = {<Register/>}/>
          <Route path = '/events/icset' element = {<ICSET/>}/>
          <Route path = '/events/techathlon' element = {<Techathlon/>}/>
          <Route path="/admin/*" element = {<Admin/>}/>
          <Route path="/modal" element = {<Example/>}/>
          <Route path='/:error' element = {<NotFoundPage/>}/>
        </Routes>
        {admin =='true'? <></> : <Footer/>}
    </Router>
    </>
  );
}

export default App;
