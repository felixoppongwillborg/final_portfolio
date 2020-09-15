import React from "react";
import { Link } from "react-scroll";
import { Button } from "semantic-ui-react";

const AboutMe = () => {
  return (
    <div id="AboutMe-section">
      <h1 id="subTitle">About me!</h1>
      <h3 id="text">
        {" "}
        Junior Web Developer, with previous experience within the insurance,
        retail and art industry. During the past 10 years, I have acquired a
        broad set of both hard and soft skills applicable across different
        industries. Having extensive experience working in B2B and B2C roles.
        Completed an intensive coding bootcamp at Craft Academy during summer
        2020. I have now gained knowledge working with both test and
        behavior-driven development applying the Agile methodology. Hands-on,
        innovative and a problem solver with keen attention to details.
      </h3>
      <Link
        to="Projects-section"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
      >
        <Button basic inverted size="massive" id="projectsBtn">
          Projects
        </Button>
      </Link>
    </div>
  );
};

export default AboutMe;
