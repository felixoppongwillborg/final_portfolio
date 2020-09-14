import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  debugger
  return (
    <div id="Home-section">
      <h1 id="title">Felix Oppong Willborg</h1>
      <img id="FelixProfil" src="./image/FelixProfil.png" alt="" />
      <Link
        to="AboutMe-section"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1500}
      >
        <button id="aboutMeBtn">About me</button>
      </Link>
    </div>
  );
};

export default Home;
