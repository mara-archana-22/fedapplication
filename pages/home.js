// Home.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
    <Navbar/>
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>🏠 Welcome to the Home Page!</h1>
      <p>You have successfully logged in.</p>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
