import React, {useEffect, useState} from "react";
import "./main.css";
import MainTop from "../MainSections/MainTop/MainTop";
import Timer from "../Timer/Timer";

function Main() {

    const [startFlag, setStartFlag] = useState(false);
    const [resetSession, setResetSession] = useState(false);
    const [buttonsState, setButtonsState] = useState({
        button1: false,
        button2: false,
        button3: false
    });

    function handleStart() {
        setStartFlag(!startFlag);
    }

    function handleReset() {
        setResetSession(true);
    }

    return (
        <div className="main">
            {/*<div className="top">

                <MainTop id="button1" buttonsState={buttonsState} setButtonsState={setButtonsState} text="pomodoro" />
                <MainTop id="button2" buttonsState={buttonsState} setButtonsState={setButtonsState} text="short break" />
                <MainTop id="button3" buttonsState={buttonsState} setButtonsState={setButtonsState} text="long break" />

            </div>*/}

            <div className="middle">
                <Timer startFlag={startFlag} setStartFlag={setStartFlag} resetSession={resetSession}
                 setResetSession={setResetSession} />
            </div>

            <div className="bottom">
                {/*<div className="bottom-elements" id="settings-logo">
                    <i class="fa-sharp fa-solid fa-gear"></i>
                </div>*/}
                <button onClick={handleStart} id="start-button" className="bottom-elements">
                    {startFlag ? "Stop" : "Start"}
                </button>
                <button onClick={handleReset} className="bottom-elements" id="reset-logo">
                    <i class="fa-sharp fa-solid fa-rotate-right"></i>
                </button>
            </div>
        </div>
    );
}

export default Main;