import React from 'react';

function IndianPlayers() {
  // Array constructed to match the specific destructuring output format
  const allPlayers = [
    'Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvraj5', 'Raina6'
  ];

  // ES6 Destructuring match
  const [first, second, third, fourth, fifth, sixth] = allPlayers;

  // Merged lists using the spread operator as required
  const T20players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const mergedSquad = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h1>Odd Players</h1>
      <ul>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>
      
      <hr />
      
      <h1>Even Players</h1>
      <ul>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </ul>
      
      <hr />
      
      <h1>List of Indian Players Merged:</h1>
      <ul>
        {mergedSquad.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;