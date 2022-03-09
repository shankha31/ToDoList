import React from "react";
import { Add, Sub, Mul, Div } from "./Calculator";

function App() {
    return (
        <>
            <h1>Addition {Add(5, 10)}</h1>
            <h1>Subtraction {Sub(5, 10)}</h1>
            <h1>Multition {Mul(5, 10)}</h1>
            <h1>Divition {Div(22, 7)}</h1>
        </>
    );
}

export default App;