import React, { useState } from 'react';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (e) => {
    // Prevent default form page refresh
    e.preventDefault();
    
    // Parse the input amount number value
    const numericAmount = parseFloat(amount) || 0;
    
    // As shown in the screenshot, multiplying 80 yields 6400 (Conversion factor of 80)
    const convertedAmount = numericAmount * 80;

    alert(`Converting to Euro Amount is ${convertedAmount}`);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h1 style={{ color: 'green', margin: '20px 0 10px 0' }}>Currency Convertor!!!</h1>
      
      <form onSubmit={handleSubmit}>
        <table cellPadding="4">
          <tbody>
            <tr>
              <td><label htmlFor="amount">Amount:</label></td>
              <td>
                <input 
                  id="amount"
                  type="text" 
                  value={amount} 
                  onChange={(e) => setAmount(e.target.value)} 
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="currency">Currency:</label></td>
              <td>
                <input 
                  id="currency"
                  type="text" 
                  value={currency} 
                  onChange={(e) => setCurrency(e.target.value)} 
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="submit" style={{ marginTop: '5px' }}>Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default CurrencyConvertor;