import React from "react";
import { Link } from "react-scroll";
import { Button, Image } from "semantic-ui-react";

const Home = () => {
  return (
    <div id="Home-section">
      <Image size="medium" circular id="FelixProfil" src="./image/FelixProfil.png" alt="" />
      <h1 id="title">Felix Oppong Willborg</h1>
      <div id="shortIntro">
      <h2>Full Stack developer</h2>
      <h2>Full Stack developer</h2>
      <h2>Full Stack developer</h2>
      </div>
      <Link
        to="AboutMe-section"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
      >
        <Button basic inverted size="massive" id="aboutMeBtn">
          About me
        </Button>
      </Link>
      
    </div>
  );
};

export default Home;
