import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Metals from "./components/Metals";
import Agro from "./components/Agro";
// import About from "./components/About";
// import Homefront from "./components/Homefront";
import ScrollToTop from "./components/ScrollToTop";
import Petroleum from "./components/Petroleum";
import Services from "./components/Services";
import Products from "./Pages/products";

function App() {
  return (
    <Router>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/metals" element={<Metals />} />
        <Route path="/products/agro" element={<Agro />} />
        <Route path="/products/petroleum" element={<Petroleum />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/vision" element={<About />} />
        <Route path="/house" element={<Homefront />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
