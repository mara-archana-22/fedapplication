import React from "react";

const UserItem = ({ name, age }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserItem;
