import React from "react";
import { Link } from "react-scroll";
import { Button } from "semantic-ui-react";

const Cv = () => {
  return (
    <div id="Cv-section">
      <h1 id="subTitle">My Resumé</h1>
      <p id="text">This is my Resumé</p>
      <Link
        to="MySunday-section"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
      >
        <Button basic inverted size="massive" id="mySundayBtn">
          Act out my Sunday
        </Button>
      </Link>
    </div>
  );
};

export default Cv;
