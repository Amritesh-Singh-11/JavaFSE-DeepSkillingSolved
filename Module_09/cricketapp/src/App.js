import React from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  // CHANGE THIS TO true OR false TO SWITCH INTERFACES
  const flag = false; 

  let componentToDisplay;
  if (flag === true) {
    componentToDisplay = <ListofPlayers />;
  } else {
    componentToDisplay = <IndianPlayers />;
  }

  return (
    <div>
      {componentToDisplay}
    </div>
  );
}

export default App;