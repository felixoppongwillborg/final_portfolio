import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="Home-section">
      <img id="FelixProfil" src="./image/FelixProfil.png" alt="" />
      <h1 id="title">Felix Oppong Willborg</h1>
      <Link
        to="AboutMe-section"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
      >
        <button id="aboutMeBtn">About me</button>
      </Link>
    </div>
  );
};

export default Home;
