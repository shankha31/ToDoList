import React from "react";

const ToDoItems = (props) => {
    const { toDelete, id } = props;
    return (
        <div className='listItem'>
            <button className='deleteBtn' onClick={() => toDelete(id)}> &#10540; </button>
            <li className='list'>{props.currentItem} </li>
        </div>
    )
}

export default ToDoItems;