import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <div className="font-mont mb-64">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}
