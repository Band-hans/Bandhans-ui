import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BusinessRegistry from "./components/BusinessRegistry";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<BusinessRegistry />} />
      </Routes>
    </Router>
  );
}

export default App;
// This code sets up a React application with routing.
// It imports necessary components and defines routes for the home page and a business registry page. 