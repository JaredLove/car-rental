// src/App.js
import React from 'react';
import Home from './pages/Home';
import About from "./components/About";
import Nav from './components/Nav';
import Choose from './components/Choose';
import Cars from './components/Cars';
function App() {
  return (
    <>
    <Nav />
    <Home />
    <About />
    <Choose />
    <Cars />
    </>
  );
}

export default App;
