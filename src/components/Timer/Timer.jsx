import React, {useState, useEffect} from "react";

function Timer(props) {
    

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(25);
    let interval;

    useEffect(() => {
        
        if(props.startFlag === true){
            interval = setInterval(() => {
    
                if(seconds === 0) {
                    if(minutes === 0) {
    
                    } else {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        }
    }, [seconds,props.startFlag]);

    useEffect(() => {
        if(props.resetSession === true) {
            setSeconds(0);
            setMinutes(25);
            props.setResetSession(false);
            if(props.startFlag === true) {
                props.setStartFlag(false);
            }
        }
        
    }, [props.resetSession])
        
    const timerMinutes = minutes < 10 ? ("0" + minutes) : minutes;
    const timerSeconds = seconds < 10 ? ("0" + seconds) : seconds;

    return (
        <p>
            {timerMinutes + ":" + timerSeconds}
        </p>
        
    );
}

export default Timer;