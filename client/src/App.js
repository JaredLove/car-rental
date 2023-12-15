// src/App.js
import React from 'react';
import Home from './pages/Home';
import About from "./components/About";
import Nav from './components/Nav';
import Choose from './components/Choose';
import Cars from './components/Cars';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Download from './components/Download';
import Contact from './components/Contact';
function App() {
  return (
    <>
    <div className='wrapper'>
    <Nav />
    <Home />
    </div>
    <About />
    <Choose />
    <Cars />
    <Testimonials />
    <FAQ />
    <Download />
    <Contact />
    </>
  );
}

export default App;
