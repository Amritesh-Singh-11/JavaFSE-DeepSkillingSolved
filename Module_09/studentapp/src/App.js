import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#1e293b', textAlign: 'center', borderBottom: '2px solid #e2e8f0', paddingBottom: '15px' }}>
        Student Management Portal
      </h1>
      <div>
        {/* Invoking all three components */}
        <Home />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;