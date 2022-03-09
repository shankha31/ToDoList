import React, { useState } from "react";
import "./index.css";



function App() {
    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds; 
        var strTime = hours + ':' + minutes + ':' + seconds + " " + ampm;
        return strTime;
    }


    const [time, setTime] = useState(formatAMPM(new Date()));

    const UpdateTime = () => {
        setTime( formatAMPM( new Date() ) );
    };

    setInterval( UpdateTime, 1000 )

    return (
        <>
            <div className="digitalClock">
                <p className="cTime">{time}</p>
            </div>
        </>

    );
}

export default App;