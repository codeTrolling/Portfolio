import "../Styles/LearningStyles.css";
import { useRef, useState, forwardRef } from "react";
import Donut from "./Donut";
import DonutTest from "./DonutTest";

const Learning = forwardRef((props, viewportRef) => {

    //hide component if out of screen (and show it if it's in the screen)
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

    const [programToRun, setProgramToRun] = useState(true);

    return(
        <div className="viewport flex-column" ref={viewportRef} style={{opacity: isOnScreen ? "1" : "0", transition: isOnScreen ? "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "all 1s linear", transform: isOnScreen ? "translateX(0)" : "translate(100px)"}}>
            <h1 className="theme-font-family heading">Learning process</h1>
            <p className="theme-font-family">The way I studied was simple: watch a youtube course, try implementing what you have learnt, repeat. <br/>
            Overall I started off with some little programs that used the newly acquired knowledge. Maybe something that uses a function or perhaps even a class.<br/>
            After gaining a bit of confidence, I started working on some leetcode problems. Like anyone who just finished learning something, I went straight to the hard questions. I was humbled pretty quickly...<br/>
            That only made me want to study more though and at some point I successfully solved my first hard leetcode question. <br/>
            Afterwards, I started looking towards learning something more specific. I turned to web development. Building something and being able to see it visually was, in my opinion, very interesting. That's why I started learning front-end and back-end development. I liked it.</p>

            <div className="flex-column donut-container">
                <div className="flex" style={{marginBottom: "20px"}}>
                    <label className="program-file-name" style={{backgroundColor: !programToRun ? "rgb(120 120 120)" : "", color: !programToRun ? "rgb(255 255 255)" : "rgb(130 130 130)" , borderTop: !programToRun ? "solid 2px #4c9aff" : "solid 2px rgb(50 50 50)"}} onClick={() => setProgramToRun(false)}>Donut test</label>
                    <label className="program-file-name" style={{backgroundColor: programToRun ? "rgb(120 120 120)" : "", color: programToRun ? "rgb(255 255 255)" : "rgb(130 130 130)", borderTop: programToRun ? "solid 2px #4c9aff" : "solid 2px rgb(50 50 50)"}} onClick={() => setProgramToRun(true)}>Donut</label>
                </div>
                { programToRun ? <Donut/> : <DonutTest/>}
            </div>
        </div>
    )
})

export default Learning;