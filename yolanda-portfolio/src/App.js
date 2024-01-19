import React from 'react';
import "./App.css";
import Sidebar from './components/sidebar/Sidebar';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Home from './components/home/Home';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </>
  )
}

export default App
