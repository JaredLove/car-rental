// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Nav from './components/Nav';

function App() {
  return (
    <>
    <Nav />
    <Home />
    </>
  );
}

export default App;
