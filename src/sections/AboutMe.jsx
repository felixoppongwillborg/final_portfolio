import React from 'react'
import { Link } from "react-scroll";

const AboutMe = () => {
  return (
    <div id="AboutMe-section">
      <h1>About me!</h1>
      <p>Hello, i like code!</p>
      <Link
        to="Projects-section"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
      >
        <button id="projectsBtn">Projects</button>
      </Link>
    </div>
  )
}


export default AboutMe