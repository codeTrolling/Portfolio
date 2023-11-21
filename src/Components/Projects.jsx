import "../Styles/ProjectsStyles.css";
import { forwardRef, useState, useEffect, useRef } from "react";
import ReactLogo from "../Assets/reactlogo.png";

const Projects = forwardRef((props, viewportRef) => {

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

    const [logoSpinDirection, setLogoSpinDirection] = useState(true)
    var lastScrollDirection = 0;
    useEffect(() => {
        //change direction based on scroll
        window.addEventListener("scroll", () => {
            let scrollDirection = window.scrollY;
            if(scrollDirection > lastScrollDirection){
                setLogoSpinDirection(true);
                setTargetDeg(360);
            }
            else if(scrollDirection < lastScrollDirection){
                setLogoSpinDirection(false);
                setTargetDeg(0);
            }
            lastScrollDirection = scrollDirection;
        })

        //start the animation
        setTimeout(() => {
            setTargetDeg(360);
        }, 60)
    }, [])

    const [targetDeg, setTargetDeg] = useState(0);
    const [transitionSpeed, setTransitionSpeed] = useState("4s");
    const logoSpinRef = useRef();
    const configureSpinningAnimation = () => {
        if(targetDeg === 360 && logoSpinDirection){
            setTransitionSpeed("0s")
            setTargetDeg(0);
        }
        else if(targetDeg === 0 && !logoSpinDirection){
            setTransitionSpeed("0s");
            setTargetDeg(359);
        }
    }

    useEffect(() => {
        if(targetDeg === 0 && logoSpinDirection){
            setTimeout(() => {
                setTransitionSpeed("4s");
                setTargetDeg(360);

            }, 10)
        }
        else if(targetDeg === 359 && !logoSpinDirection){
            setTimeout(() => {
                setTransitionSpeed("4s");
                setTargetDeg(0);
            }, 10)
        }
    }, [targetDeg])

    return(
        <div className="viewport flex-column" ref={viewportRef} style={{opacity: isOnScreen ? "1" : "0", transition: isOnScreen ? "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "all 1s linear", transform: isOnScreen ? "translateX(0)" : "translate(100px)"}}>
            <h1 className="theme-font-family heading">Projects</h1>
            <p className="theme-font-family">
                Currently, I have two projects that are complete web apps (without counting this portfolio). One of them is created using vanilla JavaScript, HTML and CSS as well as .NET web api as the backend. This was my first major project that I did as part of a school project which I expanded upon out of my own personal interest.<br/>
                I definitly face some difficulties making this web app as I was just learning web development. Learning HTML and CSS didn't take much time as they are rather simple and I already knew other programming languages so JavaScript wasn't particularly difficult. However, I had to learn about DOM manipulation. Although that wasn't too hard by itself, I wanted to make the app look nice and if I had an idea, I wouldn't give up untill I made it happen. This resulted in me spending quite a lot of time on one single part of the app, just so I can make it how I envisioned it.
                I also had to learn back-end which was honestly surprisingly easy. Maybe it was because I already had some .NET knowledge or perhaps because .NET web api is well made but it wasn't too bad. Dealing with the database was a challenge though.
                Overall, I am happy with how it turned out as my first ever major project.<br/> <br/>
                The other project is a web app made with React.js and Node.js/Express.js. This one is, in my opinion, on a different level than my first project. I already knew HTML and CSS and worked at a faster pace. However, that isn't to say there weren't any challenges.<br/>
                React.js definitly has a learning curve. I already knew how to work with the DOM due to my last project. Unfortunatly for me though, React uses a virtual DOM that (although you can change) you shouldn't change manually but you should rather work with states.
                This was a very new concept to me but learning was very fun and enjoyable. I think React definitly helps you write clean code and also provides a lot of great features. I like it.<br/>
                Then there was the back-end with Express.js. Again, it sounded way more complicated than it really is. I did need to learn something else that was different though - the database. I decided to use MongoDB instead of MS SQL Server. This meant
                that I was now using a noSQL database. I did face some battles with the unknown but MongoDB is actually a lot like a JSON file stored in a database so I managed fine. <br/>
                Overall, I am very proud of how this project turned out. In my opinion, it looks great and I also learnt lots.
            </p>
            <img src={ReactLogo} alt="" className="react-logo-image" ref={logoSpinRef} onTransitionEnd={configureSpinningAnimation} style={{transform: "rotate(" + targetDeg + "deg)", transitionDuration: transitionSpeed}}/>
        </div>
    )
})

export default Projects;