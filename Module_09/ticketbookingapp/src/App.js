import React, { useState } from 'react';

// Screenshot 3 Hint: LoginButton functional sub-component
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

// Screenshot 4 Hint: LogoutButton functional sub-component
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// Sub-component for Logged-In Users
function UserGreeting() {
  return <h1>Welcome back</h1>;
}

// Sub-component for Guest Users
function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

// Screenshot 5 Hint: Greeting router conditional evaluation mapping component
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// Main operational application component logic container
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  // Determine which functional validation controller button interface to display
  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  // Mock flight details table schema dataset
  const flights = [
    { id: 'AI-101', route: 'Delhi to Mumbai', time: '10:00 AM', status: 'Available' },
    { id: '6E-204', route: 'Bangalore to Chennai', time: '02:30 PM', status: 'Available' },
    { id: 'SG-441', route: 'Hyderabad to Dubai', time: '09:15 PM', status: 'Filling Fast' }
  ];

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      {/* Target output state banner rendering area */}
      <Greeting isLoggedIn={isLoggedIn} />
      <div style={{ marginBottom: '30px' }}>
        {button}
      </div>

      <hr style={{ border: '0.5px solid #e2e8f0', margin: '30px 0' }} />

      {/* Flight Details Browser Panel (Visible to everyone) */}
      <h2>Available Flight Schedule</h2>
      <table cellPadding="10" cellSpacing="0" style={{ width: '100%', border: '1px solid #cbd5e1', textAlign: 'left' }}>
        <thead>
          <tr style={{ backgroundColor: '#f1f5f9' }}>
            <th>Flight ID</th>
            <th>Route Route</th>
            <th>Departure</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td><strong>{flight.id}</strong></td>
              <td>{flight.route}</td>
              <td>{flight.time}</td>
              <td style={{ color: '#16a34a', fontWeight: 'bold' }}>{flight.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Conditional booking terminal section accessible only if logged in */}
      {isLoggedIn ? (
        <div style={{ marginTop: '30px', padding: '20px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px' }}>
          <h3 style={{ color: '#166534', margin: '0 0 10px 0' }}>🔒 Ticket Booking Terminal Enabled</h3>
          <p style={{ margin: '0 0 15px 0' }}>Select your preferred option above to initialize checkout routes.</p>
          <button style={{ padding: '8px 16px', background: '#166534', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={() => alert('Ticket Booked Successfully!')}>
            Book Flight Ticket Now
          </button>
        </div>
      ) : (
        <div style={{ marginTop: '30px', padding: '20px', background: '#fff1f2', border: '1px solid #fecdd3', borderRadius: '6px' }}>
          <p style={{ color: '#9f1239', margin: 0 }}>
            ⚠️ <strong>Notice:</strong> You are currently viewing this terminal portal window as a <em>Guest User</em>. Please click the <strong>Login</strong> button at the top to access full booking privileges.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;