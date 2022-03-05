import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import About from "./pages/about/About";
import Courses from './pages/courses/Courses';
import Course from  './pages/courses/course/Course';



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
        </Routes>

        <Footer />
      </>
    </Router>
  );
}

export default App;
