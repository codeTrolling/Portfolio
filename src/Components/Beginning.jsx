import "../Styles/BeginningStyles.css";
import { useEffect, useState, forwardRef, useRef } from "react";

const Beginning = forwardRef((props, viewportRef) => {

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

    //tic tac toe
    const [tictactoe, setTicTacToe] = useState(["", "", "", "", "", "", "", "", ""]);
    const [turn, setTurn] = useState(true)
    const [winner, setWinner] = useState("");
    const tictactoeInputRef = useRef();
    const placeXO = (place) => {
        if(tictactoe[place] === ""){
            let temp = tictactoe.slice();
            temp[place] = turn ? "X" : "O";
            setTicTacToe(temp);
            setTurn(!turn);
        }
    }

    useEffect(() => {
        if(tictactoe[0] === tictactoe[1] && tictactoe[0] === tictactoe[2] && tictactoe[0] !== "" || tictactoe[3] === tictactoe[4] && tictactoe[3] === tictactoe[5] && tictactoe[3] !== "" || tictactoe[6] === tictactoe[7] && tictactoe[6] === tictactoe[8] && tictactoe[6] !== "" || tictactoe[0] === tictactoe[3] && tictactoe[0] === tictactoe[6] && tictactoe[0] !== "" || tictactoe[1] === tictactoe[4] && tictactoe[1] === tictactoe[7] && tictactoe[1] !== "" || tictactoe[2] === tictactoe[5] && tictactoe[2] === tictactoe[8] && tictactoe[2] !== "" || tictactoe[0] === tictactoe[4] && tictactoe[0] === tictactoe[8] && tictactoe[0] !== "" || tictactoe[2] === tictactoe[4] && tictactoe[2] === tictactoe[6] && tictactoe[2] !== ""){
            setWinner(turn ? "O wins!" : "X wins!");
        }
        else if(!tictactoe.includes("")){
            setWinner("Draw!");
        }
    }, tictactoe)
    //

    return(
        <div className="viewport flex-column" ref={viewportRef} style={{opacity: isOnScreen ? "1" : "0", transition: isOnScreen ? "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "all 1s linear", transform: isOnScreen ? "translateX(0)" : "translate(100px)"}}>
            <h1 className="theme-font-family heading">The Beginning</h1>
            <p className="theme-font-family">I started learning programming at school. However I did not really get into it untill the pandemic when I started watching some tutorials on youtube. <br/>
            At first, school thought me C++. I wasn't exactly sure what I wanted to do with it and didn't really do any research of my own at home (although I was still doing well at school). <br/>
            Then... covid entered the building. I caught the virus and had a lot of time to spare so I thought to myself "how about learning some programming?" and started watching a Python course. <br/>
            Only this time it clicked with me. It was... kind of fun? I studied and did some programs just to practice. I liked it. The first time I felt kind of proud of myself was when I created a little tic-tac-toe in the console. It wasn't much, but I enjoyed making it. <br/>
            Here is what it looked like:</p>
            <div className="flex-column tic-tac-toe-board">
                <div className="flex">
                    <label className="tic-tac-toe-field">{tictactoe[0]}</label>
                    <label className="tic-tac-toe-field">{tictactoe[1]}</label>
                    <label className="tic-tac-toe-field">{tictactoe[2]}</label>
                </div>
                <div className="flex">
                    <label className="tic-tac-toe-field">{tictactoe[3]}</label>
                    <label className="tic-tac-toe-field">{tictactoe[4]}</label>
                    <label className="tic-tac-toe-field">{tictactoe[5]}</label>
                </div>
                <div className="flex">
                    <label className="tic-tac-toe-field">{tictactoe[6]}</label>
                    <label className="tic-tac-toe-field">{tictactoe[7]}</label>
                    <label className="tic-tac-toe-field">{tictactoe[8]}</label>
                </div>
            </div>
            <label className="theme-font-family">select a square (from 0 to 8):</label>
            <div className="flex">
                <input type="text" name="tictactoeinput" id="tictactoeinput" className="theme-font-family tic-tac-toe-input" ref={tictactoeInputRef} onKeyUp={(e) => {if(e.key === "Enter" && winner === ""){placeXO(tictactoeInputRef.current.value); tictactoeInputRef.current.value = ""}}}/>
                <button className="restart-tic-tac-toe-btn theme-font-family" onClick={() => {setTicTacToe(["", "", "", "", "", "", "", "", ""]); setWinner(""); setTurn(true)}}>Restart</button>
            </div>
            <label className="theme-font-family" style={{height: "29px"}}>{winner}</label>
        </div>
    )
})

export default Beginning;