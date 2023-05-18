import React from "react";
import videoBg from "../assets/videoBg.mp4";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Main = () => {
  return (
    <div className="home">
      <div className="overlay"></div>
      <div class="container">
        <nav class="navigation">
          <Link to="/about">About</Link>
          <Link to="/appointments">
            <Button text="Book an Appointment" />
          </Link>
        </nav>
        <div class="video-container">
          <video src={videoBg} autoPlay loop muted playsInline />
        </div>
        <div class="logo-container">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Main;
