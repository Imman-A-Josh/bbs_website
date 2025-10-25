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
import Rices from "./Pages/Rices";
import WheatPage from "./Pages/Wheat";
import SugarPage from "./Pages/Sugar";
import MaizePage from "./Pages/Maize";
import SoyaBeanPage from "./Pages/Soya";

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
        <Route path="/products/agro/rice" element={<Rices />} />
        <Route path="/products/agro/wheat" element={<WheatPage />} />
        <Route path="/products/agro/sugar" element={<SugarPage />} />
        <Route path="/products/agro/maize" element={<MaizePage />} />
        <Route path="/products/agro/soya-bean" element={<SoyaBeanPage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
