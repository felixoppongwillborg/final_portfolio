import React from "react";
import { Link } from "react-scroll";
import { Button } from "semantic-ui-react";

const Projects = () => {
  return (
    <div id="Projects-section">
      <h1>My Projects</h1>
      <p>This is my projects</p>
      <Link
        to="Cv-section"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
      >
        <Button basic inverted size="massive" id="cvBtn">
          Resumé
        </Button>
      </Link>
    </div>
  );
};

export default Projects;
