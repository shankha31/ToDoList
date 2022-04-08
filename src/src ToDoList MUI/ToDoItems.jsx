import React, { useState } from "react";
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const ToDoItems = (props) => {
    const { toDelete, id, currentItem } = props;

    const [strike,setStrike] = useState(false)

    const strikeTxt = ()=>{
        setStrike(true)
    }
    const unStrikeTxt = ()=>{
        setStrike(false)
    }
    
    
    return (
        <div className='listItem'>
        { strike === false? <Button variant="text" className='deleteBtn' onClick={strikeTxt} > <DeleteOutlineIcon className="dltBtn"/> </Button> : <Button variant="text" className='deleteBtn' onClick={unStrikeTxt} > <AddIcon className="addAftrDlt"/> </Button> }
            <li className='list' style={{textDecoration : strike === true? "line-through" : "none"}}> {currentItem} </li>
            <Button variant="text" className='deleteBtn' onClick={() => toDelete(id)} > <DeleteForeverIcon className="dltBtn"/> </Button>
        </div>
    )
}

export default ToDoItems;