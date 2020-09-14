import React from "react";
import { Link } from "react-scroll";

const Cv = () => {
  return (
    <div id="Cv-section">
      <h1>My Resumé</h1>
      <p>This is my Resumé</p>
      <Link
        to="MySunday-section"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1500}
      >
        <button id="mySundayBtn">Act out my Sunday</button>
      </Link>
    </div>
  );
};

export default Cv;
