import "../Styles/AboutStyles.css";
import { useRef, useState } from "react";

const About = () => {

    //hide component if out of screen (and show it if it's in the screen)
    const viewportRef = useRef();
    const [isOnScreen, setIsOnScreen] = useState(true);
    window.addEventListener("scroll", () => {
        if(viewportRef.current !== undefined && (viewportRef.current.getBoundingClientRect().bottom <= 0 || viewportRef.current.getBoundingClientRect().top >= window.innerHeight)){
            setIsOnScreen(false);
        }
        else{
            setIsOnScreen(true);
        }
    })
    //


    return(
        <div className="viewport flex-column" ref={viewportRef} style={{opacity: isOnScreen ? "1" : "0", transition: isOnScreen ? "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "all 1s linear", transform: isOnScreen ? "translateX(0)" : "translate(100px)"}}>
            <h1 className="theme-font-family heading">About</h1>
            <label className="theme-font-family" style={{fontSize: "2.1rem", alignSelf: "center"}}>Welcome to my portfolio!</label>
            <p className="theme-font-family">Hello! I am a student in computer science as well as an aspiring programmer. <br/> I like playing video games and sports and watching useless youtube videos.
            <br/> In this portfolio website, I will talk about my journey so far, the skills I have acquired, the skills I plan on learning, the way I learn and a lot more. I hope you will like going through everything.
            <br/> Now without further ado, let's dive in.</p>
        </div>
    )
}

export default About;