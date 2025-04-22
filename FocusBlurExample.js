import React, { useState } from 'react';
import './FocusBlurExample.css'; // for custom styles

const FocusBlurExample = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Click to focus"
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`text-input ${isFocused ? 'focused' : ''}`}
      />

      <p className="hover-blur">Hover over this text to blur it</p>

      <img
        className="hover-blur"
        src="./burger.jpg"
        alt="Hover to blur"
      />
    </div>
  );
};

export default FocusBlurExample;
