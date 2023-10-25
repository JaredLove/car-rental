// src/App.js
import React from 'react';
import Home from './pages/Home';
import About from "./components/About";
import Nav from './components/Nav';
function App() {
  return (
    <>
    <Nav />
    <Home />
    <About />
    </>
  );
}

export default App;
