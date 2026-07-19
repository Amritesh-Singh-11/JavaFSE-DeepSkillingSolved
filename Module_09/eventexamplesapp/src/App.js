import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [counter, setCounter] = useState(0);

  // 1a & 1b: Increment button invokes multiple methods/actions
  const handleIncrement = () => {
    // Action A: Update state value counter
    setCounter(prevCount => prevCount + 1);
    
    // Action B: Say Hello followed by a static message alert
    alert("Hello! Member1");
  };

  // 1. Decrement action handler
  const handleDecrement = () => {
    setCounter(prevCount => prevCount - 1);
  };

  // 2. Dynamic argument message handler
  const sayWelcome = (message) => {
    alert(message);
  };

  // 3. Synthetic event handler execution
  const handlePress = () => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      {/* Counter Tracker Display Area */}
      <div style={{ fontSize: '1.2rem', marginBottom: '15px' }}>
        {counter}
      </div>

      {/* Action Buttons Interface Layout Stack */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: 'max-content' }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={() => sayWelcome('welcome')}>Say welcome</button>
        <button onClick={handlePress}>Click on me</button>
      </div>

      {/* Render the structural form conversion element below */}
      <CurrencyConvertor />
    </div>
  );
}

export default App;