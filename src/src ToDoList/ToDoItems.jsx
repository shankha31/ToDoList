import React from "react";

const ToDoItems = (props) => {
    return (
        <div className='listItem'>
            <button className='deleteBtn' onClick={() => props.toDelete(props.id)}> &#10540; </button>
            <li className='list'>{props.currentItem} </li>
        </div>
    )
}

export default ToDoItems;