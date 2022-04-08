import React from "react";
import "./index.css";
import Clock from 'react-live-clock';




function App() {
  
    return (
        <>
            <div className="digitalClock">
                <p className="cTime"> <Clock format={'hh:mm:ss'} ticking={true} timezone={'Asia/Kolkata'} /> </p>
            </div>
        </>

    );
}

export default App;