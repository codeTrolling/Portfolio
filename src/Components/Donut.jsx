import "../Styles/DonutsStyles.css";
import { useState } from "react";

const Donut = () => {

    const [isRunning, setIsRunning] = useState(false);
    return(
        <>
        <div className="flex">
        <button className="run-donut-btn" onClick={() => setIsRunning(true)}>Run</button>
        <button className="run-donut-btn" style={{backgroundColor: "red", marginLeft: "20px"}} onClick={() => setIsRunning(false)}>Stop</button>
        </div>
        <div className="flex-column" style={{borderBottom: "solid 1px rgb(100 100 100)"}}>
            <label style={{color: "green"}}>// some cool code.</label>
            <label style={{color: "green"}}>// some loops here and there.</label>
        </div>
        <div className="donut-container2" style={{animationName: isRunning ? "spin" : ""}}>
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

export default Donut;