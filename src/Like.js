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
    <div className='like-container'>
      <button onClick={handleDecrement}><span className='emoji'>👎</span></button>
      <span>{count}</span>
      <button onClick={handleIncrement}><span className='emoji'>👍</span></button>
    </div>
  );
}

export default Like;