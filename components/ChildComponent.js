import React from "react";

function ChildComponent({ onButtonClick }) {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onButtonClick}>Click Me</button>
    </div>
  );
}

export default ChildComponent;
