import './App.css';
import "./Styles/CommonStyles.css";
import About from "./Components/About";
import Navigation from "./Components/Navigation";
import Skills from "./Components/Skills";
import { useRef } from 'react';

function App() {
  const skillsRef = useRef();
  const aboutRef = useRef();
  return (
    <>
    <Navigation skillsRef={skillsRef} aboutRef={aboutRef}/>
    <About ref={aboutRef}/>
    <Skills ref={skillsRef}/>
    </>
  );
}

export default App;
