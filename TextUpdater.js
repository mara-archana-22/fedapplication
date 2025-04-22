import React, { useState } from 'react';

const TextUpdater = () => {
  const [text, setText] = useState('Hello, World!');

  const handleClick = () => {
    setText('You clicked the button!');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{text}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default TextUpdater;
