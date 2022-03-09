import React from "react";
import Heading from "./Heading";
import "./index.css";
import SlotMach from "./SlotMachine";

function App() {
    return (
        <>
            <div className="slotPage">
            <Heading />
            <div className="slotBox">
                <SlotMach
                    emj1="❤️"
                    emj2="❤️"
                    emj3="❤️"
                />
                <SlotMach
                    emj1="❤️"
                    emj2="😀"
                    emj3="❤️"
                />
                <SlotMach
                    emj1="☺️"
                    emj2="☺️"
                    emj3="☺️"
                />
                <SlotMach
                    emj1="😘"
                    emj2="😀"
                    emj3="🚩"
                />
                <SlotMach
                    emj1="😈"
                    emj2="😈"
                    emj3="😈"
                />
            </div>
            </div>
        </>

    );
}

export default App;