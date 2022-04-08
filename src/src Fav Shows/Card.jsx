import React from "react";
import Image from "./image";

function Card(props) {
    return (
        <>
            <div className="cardArea" align="center">
                <div className="card">
                    <Image imgsrc={props.imgsrc} />
                    <div className="cardContent">
                        <p className="topText">{props.toptext}</p>
                        <h3 className="title">{props.title}</h3>
                        <a href={props.link} className="link" target="_blank" rel="noreferrer">
                            <button className="watchnow">Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;