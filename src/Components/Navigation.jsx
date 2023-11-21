import "../Styles/NavigationStyles.css";
import { useState } from "react";

const Navigation = ({aboutRef, skillsRef, beginningRef, learningRef, projectsRef, forProgrammersRef}) => {
    const [showNavigation, setShowNavigation] = useState(false);
    const [borderRadiuses, setBorderRadiuses] = useState("100% 0 0 100%");

    const navigationBorders = () => {
        if(showNavigation){
            setBorderRadiuses("100% 0 0 100%");
        }
        else{
            setBorderRadiuses("0 0 0 15px");
        }
    }

    const scrollToComponent = (componentRef) => {
        componentRef.current.scrollIntoView({behavior: "smooth"});
    }

    return(
        <div className="flex-column navigation-container" style={{transform: showNavigation ? "translateX(0)" : "translateX(400px)", borderRadius: borderRadiuses, transition: showNavigation ? "transform 0.3s ease-in-out, border-radius 0.6s ease-out" : "transform 0.3s ease-in-out, border-radius 0.6s ease-in"}}>
            <button className="show-hide-navigation-btn" onClick={() => {setShowNavigation(!showNavigation); navigationBorders()}}></button>
            <label className="theme-font-family navigation-options" onClick={() => scrollToComponent(aboutRef)}>About</label>
            <label className="theme-font-family navigation-options" onClick={() => scrollToComponent(skillsRef)}>Skills</label>
            <label className="theme-font-family navigation-options" onClick={() => scrollToComponent(beginningRef)}>Beginning</label>
            <label className="theme-font-family navigation-options" onClick={() => scrollToComponent(learningRef)}>Learning process</label>
            <label className="theme-font-family navigation-options" onClick={() => scrollToComponent(projectsRef)}>Projects</label>
            <label className="theme-font-family navigation-options" onClick={() => scrollToComponent(forProgrammersRef)}>For aspiring programmers</label>
        </div>
    )
}

export default Navigation;