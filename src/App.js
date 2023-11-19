import './App.css';
import "./Styles/CommonStyles.css";
import { useRef } from 'react';
import About from "./Components/About";
import Navigation from "./Components/Navigation";
import Skills from "./Components/Skills";
import Beginning from "./Components/Beginning";

function App() {
  const skillsRef = useRef();
  const aboutRef = useRef();
  const beginningRef = useRef();
  return (
    <>
    <Navigation skillsRef={skillsRef} aboutRef={aboutRef} beginningRef={beginningRef}/>
    <About ref={aboutRef}/>
    <Skills ref={skillsRef}/>
    <Beginning ref={beginningRef}/>
    </>
  );
}

export default App;
