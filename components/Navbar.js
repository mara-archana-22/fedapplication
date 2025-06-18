// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
        <div style={{ background: "#eee", padding: "10px" }}>

    <nav >
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/aboutus" style={{ marginRight: "10px" }}>aboutus</Link>
      <Link to="/contactus" style={{ marginRight: "10px" }} >contactus</Link>
    </nav>
    </div>
  );
};


export default Navbar;
