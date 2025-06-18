import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const handleClick = () => {
    alert("Button clicked in Child!");
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent onButtonClick={handleClick} />
    </div>
  );
}

export default ParentComponent;
