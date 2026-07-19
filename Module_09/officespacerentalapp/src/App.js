import React from 'react';

function App() {
  // Image URL source placeholder for the {sr} attribute matching the layout look
  const sr = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&h=300&q=80";

  // Hints variable alignment declarations
  const element = "Office Space";
  const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;
  
  // List of objects to fulfill the requirement: "Create a list of Object and loop through"
  const officeSpaces = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "Regus Hub", Rent: 75000, Address: "Bangalore" },
    { Name: "WeWork Space", Rent: 58000, Address: "Mumbai" }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* 1. Heading element interpolation using the {element} constant */}
      <h1>{element} , at Affordable Range</h1>
      
      {/* 2. Image element interpolation */}
      {jsxatt}

      {/* 3. Looping through the items to handle array evaluations */}
      {officeSpaces.map((ItemName, index) => {
        // Implementing the Hint structure for conditional coloring using inline styles
        let rentColor = "";
        if (ItemName.Rent <= 60000) {
          rentColor = "red";
        } else {
          rentColor = "green";
        }

        return (
          <div key={index} style={{ marginTop: '30px' }}>
            {/* Display layout blocks using target structure tags */}
            <h1>Name: {ItemName.Name}</h1>
            
            <h3 style={{ color: rentColor }}>
              Rent: Rs. {ItemName.Rent}
            </h3>
            
            <h3>Address: {ItemName.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;