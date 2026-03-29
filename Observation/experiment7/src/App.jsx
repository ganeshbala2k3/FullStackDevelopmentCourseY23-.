import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import DepartmentsPage from "./components/DepartmentsPage";
import FacultyPage from "./components/FacultyPage";
import NotFound from "./components/NotFound";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="*" element={<NotFound   />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;