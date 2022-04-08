import React from "react";
import {TrueVal,FalseVal} from "./SlotContent" 



const SlotMach = (prop) => {

    let {emj1,emj2,emj3} = prop;
    
    return (emj1===emj2 && emj2===emj3)? <TrueVal emj1={emj1} emj2={emj2} emj3={emj3}/>: <FalseVal emj1={emj1} emj2={emj2} emj3={emj3}/>

}
    

export default SlotMach;