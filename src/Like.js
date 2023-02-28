import React, { useState } from 'react';

function Like() {
  const [count, setCount] = useState(0);

  const handleIncrement = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    if (count > 0) {
        setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={handleDecrement}> 👎</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>👍 </button>
    </div>
  );
}

export default Like;