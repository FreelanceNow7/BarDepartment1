import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Main } from "./components/Main/Main";

// import logo from "./logo.svg";
import "./App.css";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Main width={width} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
