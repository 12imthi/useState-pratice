// Increment.js
import React, { useState } from 'react';

function Increment({ onUpdateNumbers }) {
  const [incrementValue, setIncrementValue] = useState(1);

  const handleChange = (e) => {
    setIncrementValue(Number(e.target.value));
  };

  const handleClick = () => {
    onUpdateNumbers(incrementValue);
  };

  return (
    <div>
      <input
        type="number"
        value={incrementValue}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update Numbers</button>
    </div>
  );
}

export default Increment;
