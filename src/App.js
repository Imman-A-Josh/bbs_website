import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Petroleum from "./components/Petroleum";
import Metals from "./components/Metals";
import Agro from "./components/Agro";
import About from "./components/About";
import Homefront from "./components/Homefront";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <NavBar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/petroleum" element={<Petroleum />} />
        <Route path="/metals" element={<Metals />} />
        <Route path="/agro" element={<Agro />} />
        <Route path="/vision" element={<About />} />
        <Route path="/house" element={<Homefront />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
