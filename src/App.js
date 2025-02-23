import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Theme from './components/Theme';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Footer from './components/Footer';
import FaqBot from './components/FaqBot';
import AboutUs from './components/AboutUs';
import './styles/App.css';

function App() {
  return (
    <div className="app-wrapper">
      <div className="container">
        <Navbar />
        <main className="main-content">
          <Hero />
          <Stats />
          <AboutUs />
          <Theme />
          <Prizes />
          <Timeline />
        </main>
        <Footer />
      </div>
      <FaqBot />
    </div>
  );
}

export default App;
