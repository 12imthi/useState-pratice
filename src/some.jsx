import { useState } from 'react';
import { some } from 'imbelt';
import './App.css';

function App() {
  const initialNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [numbers, setNumbers] = useState(initialNumbers);

  // Example usage of imbelt's some method
  const checkIfAnyNumberGreaterThanFive = () => {
    const result = some(numbers, (number) => number > 5);
    alert(result ? 'There are numbers greater than 5' : 'No numbers greater than 5');
  };

  return (
    <>
      <div className="card">
        <h1>Numbers</h1>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
        <button onClick={checkIfAnyNumberGreaterThanFive}>Check if any number 5</button>
      </div>
    </>
  );
}

export default App;
