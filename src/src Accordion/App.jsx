import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./index.css";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';



function App() {

    return (
        <>
            <div className='background'>
                <div className='card'>
                    <div className='cardTitle'>React Interview Questions</div>
                    <div>
                    <Button variant="text" className='addBtn' type="submit"> <AddIcon /> </Button>

                    </div>
                </div>
                

            </div>
        </>

    );
}

export default App;