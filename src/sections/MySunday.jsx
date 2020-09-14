import React from 'react'
import { Link } from "react-scroll";

const MySunday = () => {
  return (
    <div id="MySunday-section">
      <h1>Play my Sunday</h1>
      <p>This is my Sunday</p>
      <Link
        to="Home-section"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={0}
        duration={1500}
      >
        <button id="scrollToTopBtn">Scroll to top</button>
      </Link>
    </div>
  )
}


export default MySunday