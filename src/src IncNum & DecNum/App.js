import React, { useState } from 'react';
import "./index.css";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';




function App() {
    const [num, setNum] = useState(0)

    const Incre = () => {
        setNum(num + 1)
    }
    const Decre = () => {
        (num > 0) ? setNum(num - 1) : alert("End Limit Crossed")
    }
    return (
        <>
            <div className='cardBG'>
                <div className='card'>
                    <h1 className='num'>{num}</h1>
                    <div className='buttons'>
                        <Tooltip title="Add">
                            <Button variant="contained" className='incBtn' onClick={Incre}><AddIcon /></Button>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button variant="contained" className='decBtn' onClick={Decre}><RemoveIcon /></Button>
                        </Tooltip>
                    </div>
                </div>
            </div>

        </>
    );
}

export default App;