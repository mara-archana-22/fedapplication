import React, { useState } from 'react';

function MouseEventExample() {
  const [message, setMessage] = useState('');

  const handleMouseEnter = () => {
    setMessage('Mouse is over the box!');
  };

  const handleMouseLeave = () => {
    setMessage('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div
        style={{
          width: '300px',
          height: '150px',
          backgroundColor: '#add8e6',
          lineHeight: '150px',
          fontSize: '20px',
          margin: '0 auto',
          borderRadius: '10px',
          transition: 'background-color 0.3s',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover over me!
      </div>
      <p style={{ fontSize: '18px', marginTop: '20px' }}>{message}</p>
    </div>
  );
}

export default MouseEventExample;
