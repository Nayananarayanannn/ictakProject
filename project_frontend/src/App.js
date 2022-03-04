import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import About from "./components/about/About";
import Courses from './components/courses/Courses';
import Course from  './components/courses/course/Course';



function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/about-us" element={<About />} />
          <Route path='/courses' element = {<Courses/>}/>
          <Route path='/course/:id' element = {<Course/>}/>
        </Routes>
        {<Footer />}
      </>
    </Router>
  );
}

export default App;
