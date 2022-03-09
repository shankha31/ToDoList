import React from "react";

const TrueVal = (prop) => {
    let { emj1, emj2, emj3 } = prop;
    return (
        <div className="slotItem">
            <h3> {emj1} {emj2} {emj3}</h3>
            <h3>This is a Match</h3>
        </div>
    );

}

const FalseVal = (prop) => {
    let { emj1, emj2, emj3 } = prop;
    return (
        <div className="slotItem">
            <h3> {emj1} {emj2} {emj3}</h3>
            <h3>This is <span style={{color : "red"}}>not</span> a Match</h3>
        </div>
    );

}

export {TrueVal,FalseVal};