import React from "react";
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Saved from "./components/Saved";
import Home from "./components/Home";
import Contact from "./components/contact";

function App() {
  return (
    <div>
        <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/saved" element={<Saved/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
