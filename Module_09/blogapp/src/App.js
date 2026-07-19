import React from 'react';
import Posts from './Posts';

function App() {
  return (
    <div style={{ 
      backgroundColor: '#f8fafc', 
      minHeight: '100vh', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '40px 20px'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ 
          color: '#1e293b', 
          fontSize: '2.5rem', 
          margin: '0 0 10px 0',
          fontWeight: '800'
        }}>
          Lifecycle Exploration Studio
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', margin: 0 }}>
          Module 09 Hands-On: Managing Component State & Error Catching
        </p>
      </header>

      <main style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
        padding: '24px',
        border: '1px solid #f1f5f9'
      }}>
        {/* Integrating our custom Posts component containing our lifecycle logic */}
        <Posts />
      </main>
      
      <footer style={{ textAlign: 'center', marginTop: '50px', color: '#94a3b8', fontSize: '0.875rem' }}>
        Java Full-Stack Engineering Hands-On Practice
      </footer>
    </div>
  );
}

export default App;