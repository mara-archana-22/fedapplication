import React from "react";
import UserItem from "./UserItem";

const UserList = ({ users }) => {
  return (
    <div>
      {users.map(([name, age], index) => (
        <UserItem key={index} name={name} age={age} />
      ))}
    </div>
  );
};

export default UserList;
