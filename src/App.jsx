import React from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;
