import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./components/Main/Main";
import "./App.css";

function IntroMessage() {
  return (
    <div className='intro'>
      <p>Our Story: Crafting Moments, One Sip At The Time!</p>
    </div>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showWebsite, setShowWebsite] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      setShowWebsite(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className='App'>
      <div className={`intro ${showIntro ? "" : "fade-out"}`}>
        {showIntro && <IntroMessage />}
      </div>
      <div className={`website ${showWebsite ? "visible" : "hidden"}`}>
        {showWebsite && (
          <Router>
            <Routes>
              <Route path='/' element={<Main />} />
            </Routes>
          </Router>
        )}
      </div>
    </div>
  );
}

export default App;
