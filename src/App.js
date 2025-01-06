import React from "react";

import { Navbar } from "./components";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import { Footer } from "./container";
import GoogleMapPage from "./pages/GoogleMapPage";
import GaleryPage from "./pages/GaleryPage";
import CookingClassPage from "./pages/CookingClassPage";
import TourDetail from "./pages/TourDetail";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<GoogleMapPage />} />
      <Route path="/gallery" element={<GaleryPage />} />
      <Route path="/cooking-class" element={<CookingClassPage />} />
      <Route path="/tour/:slug" element={<TourDetail />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
