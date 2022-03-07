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



function App() {
  return (
    <Router>
      <>
        <NavBar />

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
          <Route path='/membership/academic' element = {<Academic/>}/>
          <Route path='/membership/academic/members' element = {<Members/>}/>
          <Route path='/membership/corporate' element = {<Corporate/>}/>
          <Route path='/membership/corporate/register' element = {<Register/>}/>
          <Route path='/:error' element = {<NotFoundPage/>}/>
          
        </Routes>

        <Footer />
      </>
    </Router>
  );
}

export default App;
