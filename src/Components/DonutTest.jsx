import "../Styles/DonutsStyles.css";
import { useState, useRef } from "react";
import DonutError from "./DonutError";

const DonutTest = () => {
    const [isRunning, setIsRunning] = useState(false);
    const inputRef = useRef();

    return(
        <>
        <div className="flex">
        <button className="run-donut-btn" onClick={() => setIsRunning(true)}>Run</button>
        <button className="run-donut-btn" style={{backgroundColor: "red", marginLeft: "20px"}} onClick={() => setIsRunning(false)}>Stop</button>
        </div>
        <div className="flex-column" style={{borderBottom: "solid 1px rgb(100 100 100)"}}>
            <label style={{color: "green"}}>// I spent a lot of time on this code.</label>
            <input type="text" name="code-input" id="code-input" className="donut-code-input" style={{color: "green"}} ref={inputRef} defaultValue="// surely this works"/>
        </div>
        <div className="donut-container2" style={{position: "relative", height: "100%", width: "100%", justifyContent: "center", display: "flex"}}>
            {isRunning && <DonutError codeInput={inputRef.current.value}/>}
            <div className="spinning-donut">
                <span className="spinning-donut-text donut-char-0">D</span>
                <span className="spinning-donut-text donut-char-1">O</span>
                <span className="spinning-donut-text">N</span>
                <span className="spinning-donut-text donut-char-3">U</span>
                <span className="spinning-donut-text donut-char-4">T</span>
            </div>
        </div>
        </>
    )
}

export default DonutTest;