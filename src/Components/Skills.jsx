import "../Styles/SkillsStyles.css";
import { useState, useRef, useEffect, forwardRef } from "react";

const Skills = forwardRef((props, viewportRef) => {

    //hide component if out of screen (and show it if it's in the screen)
    //const viewportRef = useRef();
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

    const [confidentLanguages, setConfidentLanguages] = useState([]);
    const [confidentFrameworks, setConfidentFrameworks] = useState([]);
    const [familiarLanguages, setFamiliarLanguages] = useState([]);
    const [confidentDatabases, setConfidentDatabases] = useState([]);
    //const [lastInterval, setLastInterval] = useState();
    const [intervalStarted, setIntervalStarted] = useState(false);

    useEffect(() => {
        var lastInterval;
        const showSkills = () => {
            if(!intervalStarted){
                setIntervalStarted(true);
                var counter = 0, counter2 = 0, counter3 = 0, counter4 = 0;
                lastInterval = (setInterval(() => {
                    if(counter < 6){
                        setConfidentLanguages(c => [...c, true])
                        counter++;
                    }
                    else if(counter2 < 5){
                        setConfidentFrameworks(c => [...c, true]);
                        counter2++;
                    }
                    else if(counter3 < 2){
                        setFamiliarLanguages(c => [...c, true]);
                        counter3++;
                    }
                    else if(counter4 < 2){
                        setConfidentDatabases(c => [...c, true]);
                        counter4++
                    }
                    else{
                        clearInterval(lastInterval);
                    }
                }, 200))
            }
            }

        const hideSkills = () =>{
            if(intervalStarted){
                clearInterval(lastInterval);
                lastInterval = undefined;
            }
            setConfidentLanguages([]);
            setConfidentFrameworks([]);
            setFamiliarLanguages([]);
            setConfidentDatabases([]);
            setIntervalStarted(false);
        }
        console.log("are we spamming?")

        isOnScreen ? showSkills() : hideSkills()
    }, [isOnScreen, intervalStarted])

    useEffect(() => {
        setIsOnScreen(true)
    },[])


    return(
        <div className="viewport flex-column" ref={viewportRef} style={{opacity: isOnScreen ? "1" : "0", transition: isOnScreen ? "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "all 1s linear", transform: isOnScreen ? "translateX(0)" : "translate(100px)"}}>
            <h2 className="theme-font-family heading">Skills</h2>
            <label className="theme-font-family">As of writing this, I am confident with these languages:</label>
            <div className="flex skills-container">
                <label className="theme-font-family skill" style={{opacity: confidentLanguages[0] !== undefined ? "1" : "0", transform: confidentLanguages[0] !== undefined ? "translate(0px)" : "translate(20px)"}}>JavaScript</label>
                <label className="theme-font-family skill" style={{opacity: confidentLanguages[1] !== undefined ? "1" : "0", transform: confidentLanguages[1] !== undefined ? "translate(0px)" : "translate(20px)"}}>HTML</label>
                <label className="theme-font-family skill" style={{opacity: confidentLanguages[2] !== undefined ? "1" : "0", transform: confidentLanguages[2] !== undefined ? "translate(0px)" : "translate(20px)"}}>CSS</label>
                <label className="theme-font-family skill" style={{opacity: confidentLanguages[3] !== undefined ? "1" : "0", transform: confidentLanguages[3] !== undefined ? "translate(0px)" : "translate(20px)"}}>C#</label>
                <label className="theme-font-family skill" style={{opacity: confidentLanguages[4] !== undefined ? "1" : "0", transform: confidentLanguages[4] !== undefined ? "translate(0px)" : "translate(20px)"}}>Python</label>
                <label className="theme-font-family skill" style={{opacity: confidentLanguages[5] !== undefined ? "1" : "0", transform: confidentLanguages[5] !== undefined ? "translate(0px)" : "translate(20px)"}}>C++</label>
            </div>

            <label className="theme-font-family">As well as these frameworks:</label>
            <div className="flex skills-container">
                <label className="theme-font-family skill" style={{opacity: confidentFrameworks[0] !== undefined ? "1" : "0", transform: confidentFrameworks[0] !== undefined ? "translate(0px)" : "translate(20px)"}}>React.js</label>
                <label className="theme-font-family skill" style={{opacity: confidentFrameworks[1] !== undefined ? "1" : "0", transform: confidentFrameworks[1] !== undefined ? "translate(0px)" : "translate(20px)"}}>Express.js</label>
                <label className="theme-font-family skill" style={{opacity: confidentFrameworks[2] !== undefined ? "1" : "0", transform: confidentFrameworks[2] !== undefined ? "translate(0px)" : "translate(20px)"}}>Mongoose.js</label>
                <label className="theme-font-family skill" style={{opacity: confidentFrameworks[3] !== undefined ? "1" : "0", transform: confidentFrameworks[3] !== undefined ? "translate(0px)" : "translate(20px)"}}>.NET Web API</label>
                <label className="theme-font-family skill" style={{opacity: confidentFrameworks[4] !== undefined ? "1" : "0", transform: confidentFrameworks[4] !== undefined ? "translate(0px)" : "translate(20px)"}}>Entity Framework</label>
            </div>

            <label className="theme-font-family">I am also familiar with these languages (I have used them):</label>
            <div className="flex skills-container">
                <label className="theme-font-family skill" style={{opacity: familiarLanguages[0] !== undefined ? "1" : "0", transform: familiarLanguages[0] !== undefined ? "translate(0px)" : "translate(20px)"}}>Java</label>
                <label className="theme-font-family skill" style={{opacity: familiarLanguages[1] !== undefined ? "1" : "0", transform: familiarLanguages[1] !== undefined ? "translate(0px)" : "translate(20px)"}}>C</label>
            </div>

            <label className="theme-font-family">I am also confident with these databases:</label>
            <div className="flex skills-container">
                <label className="theme-font-family skill" style={{opacity: confidentDatabases[0] !== undefined ? "1" : "0", transform: confidentDatabases[0] !== undefined ? "translate(0px)" : "translate(20px)"}}>MongoDB</label>
                <label className="theme-font-family skill" style={{opacity: confidentDatabases[1] !== undefined ? "1" : "0", transform: confidentDatabases[1] !== undefined ? "translate(0px)" : "translate(20px)"}}>MS SQL Server</label>
            </div>
        </div>
    )
})



export default Skills;