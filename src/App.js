import './App.css';
import "./Styles/CommonStyles.css";
import { useRef } from 'react';
import About from "./Components/About";
import Navigation from "./Components/Navigation";
import Skills from "./Components/Skills";
import Beginning from "./Components/Beginning";
import Learning from "./Components/Learning";
import Projects from "./Components/Projects";

function App() {
  const skillsRef = useRef();
  const aboutRef = useRef();
  const beginningRef = useRef();
  const learningRef = useRef();
  const projectsRef = useRef();
  return (
    <>
    <Navigation skillsRef={skillsRef} aboutRef={aboutRef} beginningRef={beginningRef} learningRef={learningRef} projectsRef={projectsRef}/>
    <About ref={aboutRef}/>
    <Skills ref={skillsRef}/>
    <Beginning ref={beginningRef}/>
    <Learning ref={learningRef}/>
    <Projects ref={projectsRef}/>
    </>
  );
}

export default App;
