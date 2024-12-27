import React from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";
import HomePages from "./Pages/HomePages.jsx";
import Footer from "./Components/Footer.jsx";
import AboutPages from "./Pages/AboutPages.jsx";
import ServicesPage from "./Pages/ServicesPage.jsx";
import ContactUs from "./Pages/ContactUs.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePages />} />
        <Route exact path="/AboutHome"  element={<AboutPages />} />
        <Route exact path="/HomeServices" element={<ServicesPage />} />
        <Route exact path="/contacted" element={<ContactUs/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
