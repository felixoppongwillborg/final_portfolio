import React from 'react';
import Home from './sections/Home';
import "./index.css"
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import Cv from './sections/Cv';
import MySunday from './sections/MySunday';



function App() {
  return (
    <div>
      <Home />
      <AboutMe />
      <Projects />
      <Cv />
      <MySunday />
    </div>
  );
}

export default App;
