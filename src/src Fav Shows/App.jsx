import React from "react";
import Card from './Card';
import "./index.css";
import carddata from "./data";


function App() {
    return (
        <>
            
            <div className="cards">

                <div className="header">
                    <h1>List of top 3 series</h1>
                </div>

                {carddata.map((cardItem)=>{
                    return (<Card
                        key={cardItem.id}
                        imgsrc={cardItem.imgsrc}
                        toptext={cardItem.toptext}
                        title={cardItem.title}
                        link={cardItem.link}
                    />)
                })}

            </div>
        </>

    );
}

export default App;