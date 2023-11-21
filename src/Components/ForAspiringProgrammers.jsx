import "../Styles/ForAspiringProgrammersStyles.css";
import { useState, forwardRef } from "react";

const ForAspiringProgrammersStyles = forwardRef((props, viewportRef) => {

    //hide component if out of screen (and show it if it's in the screen)
    const [isOnScreen, setIsOnScreen] = useState(false);
    window.addEventListener("scroll", () => {
        if(viewportRef.current !== undefined && (viewportRef.current.getBoundingClientRect().bottom <= 0 || viewportRef.current.getBoundingClientRect().top >= window.innerHeight)){
            setIsOnScreen(false);
        }
        else{
            setIsOnScreen(true);
        }
    })
    //

    const [printFunc, setPrintFunc] = useState([]);
    const [printFuncBrackets, setPrintFuncBrackets] = useState([]);
    const [helloWorld, setHelloWorld] = useState([]);
    const [programResult, setProgramResult] = useState(false);


    const [intervalStarted, setIntervalStarted] = useState(false);
    const writeCode = () => {
        var lastInterval;
        var counter = 0;
        if(!intervalStarted){
            setIntervalStarted(true);
            lastInterval = setInterval(() => {
                if(counter === 5){
                    clearInterval(lastInterval);
                    setPrintFuncBrackets([true]);
                    writeHelloWorld();
                    setIntervalStarted(false);
                }
                setPrintFunc(c => [...c, true])
                counter++;
            }, 150)
        }
    }

    const writeHelloWorld = () => {
        var lastInterval;
        var counter = 0;
        if(!intervalStarted){
            setIntervalStarted(true);
            lastInterval = setInterval(() => {
                if(counter === 12){
                    clearInterval(lastInterval);
                    setPrintFuncBrackets([true, true]);
                    setIntervalStarted(true);
                    setTimeout(() => {
                        setProgramResult(true)
                    }, 350)
                }
                setHelloWorld(c => [...c, true])
                counter++;
            }, 150)
        }
    }

    return(
        <div className="viewport flex-column" ref={viewportRef} style={{opacity: isOnScreen ? "1" : "0", transition: isOnScreen ? "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "all 1s linear", transform: isOnScreen ? "translateX(0)" : "translate(100px)", marginBottom:"70px"}}>
            <h1 className="theme-font-family heading">For aspiring programmers</h1>
            <p className="theme-font-family">
                I may not be the most qualified person to learn from but if there is one thing I know it is in order to improve you need to start writing code.
                Watch some quick course to know the basics and just start applying your knowledge right away. Do not worry if you make mistakes or you need to google something, it does not matter.
                What matters is that you are actively trying to create programs, even if simple. Writing code is, in my opinion, the best way to learn.<br/>
                Go on now. If you are somebody who want to learn programming just close this portfolio and go build something.
            </p>
            <div className="flex-column hello-world-container" onMouseOver={writeCode}>
                <div className="code-container">
                    {/* Could be done better with .map */}
                    <span className="code-letters" style={{color: "yellow", opacity: printFunc[0] !== undefined ? "1" : "0"}}>p</span>
                    <span className="code-letters" style={{color: "yellow", opacity: printFunc[1] !== undefined ? "1" : "0"}}>r</span>
                    <span className="code-letters" style={{color: "yellow", opacity: printFunc[2] !== undefined ? "1" : "0"}}>i</span>
                    <span className="code-letters" style={{color: "yellow", opacity: printFunc[3] !== undefined ? "1" : "0"}}>n</span>
                    <span className="code-letters" style={{color: "yellow", opacity: printFunc[4] !== undefined ? "1" : "0"}}>t</span>
                    <span className="code-letters" style={{color: "blue", opacity: printFuncBrackets[0] !== undefined ? "1" : "0"}}>{"("}</span>
                    <span className="code-letters" style={{color: "orange", opacity: helloWorld[0] !== undefined ? "1" : "0"}}>"</span>
                    <span className="code-letters" style={{color: "orange", opacity: helloWorld[1] !== undefined ? "1" : "0"}}>H</span>
                    <span className="code-letters" style={{color: "orange", opacity: helloWorld[2] !== undefined ? "1" : "0"}}>e</span>
                    <span className="code-letters" style={{color: "orange", opacity: helloWorld[3] !== undefined ? "1" : "0"}}>l</span>
                    <span className="code-letters" style={{color: "orange", opacity: helloWorld[4] !== undefined ? "1" : "0"}}>l</span>
                    <span className="code-letters" style={{color: "orange", opacity: helloWorld[5] !== undefined ? "1" : "0"}}>o </span>
                    <span className="code-letters" style={{color: "orange", opacity: helloWorld[6] !== undefined ? "1" : "0"}}>w</span>
                    <span className="code-letters" style={{color: "orange", opacity: helloWorld[7] !== undefined ? "1" : "0"}}>o</span>
                    <span className="code-letters" style={{color: "orange", opacity: helloWorld[8] !== undefined ? "1" : "0"}}>r</span>
                    <span className="code-letters" style={{color: "orange", opacity: helloWorld[9] !== undefined ? "1" : "0"}}>l</span>
                    <span className="code-letters" style={{color: "orange", opacity: helloWorld[10] !== undefined ? "1" : "0"}}>d</span>
                    <span className="code-letters" style={{color: "orange", opacity: helloWorld[11] !== undefined ? "1" : "0"}}>!</span>
                    <span className="code-letters" style={{color: "orange", opacity: helloWorld[12] !== undefined ? "1" : "0"}}>"</span>
                    <span style={{color: "blue", opacity: printFuncBrackets[1] !== undefined ? "1" : "0"}}>{")"}</span>
                </div>
                <span style={{color: "whitesmoke", height: "21px", opacity: programResult ? "1" : "0", transition: "all 0.2s"}}>Hello world!</span>
            </div>
        </div>
    )
})

export default ForAspiringProgrammersStyles;