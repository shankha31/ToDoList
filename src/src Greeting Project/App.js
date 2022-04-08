import React from 'react';
import "./index.css";


function App() {
    const date = new Date();
    const currentHour = date.getHours();
    let greet = " ";
    const greetColour = {};
    const greetBgc = {};

    if (currentHour >= 1 && currentHour <= 11) {
        greet = "Good Morning";
        greetColour.color = "#2D4263";
        greetBgc.backgroundColor = "#";

    }

    else if (currentHour >= 12 && currentHour <= 19) {
        greet = "Good Afternoon";
        greetColour.color = "#395B64";
        greetBgc.backgroundColor = "#395B64";

    }

    else {
        greet = "Good Night";
        greetColour.color = "#219F94";
        greetBgc.backgroundColor = "#219F94";

    }

    return (
        <>
            <div className='greetBg' style={greetBgc}>
               <span className='greetHeading'>
                   <span style={{ color: "#1572A1" }}>Hello sir,</span><span style={greetColour}> {greet}</span>
               </span>
            </div>
        </>
    );
}

export default App;