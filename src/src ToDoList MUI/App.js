import React, { useState } from 'react';
import "./index.css";
import ToDoItems from './ToDoItems';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';







function App() {
    const [input, setInput] = useState("");
    const [addVal, setAddVal] = useState([]);
    const InputVal = (e) => {
        setInput(e.target.value)
    }
    const AddInput = () => {
        if (input === "") {
            alert("Please add something")
        } else {
            setAddVal((preVal) => {
                return [...preVal, input]
            })
            setInput("");
        }
    }
    const DeleteItem = (id) => {
        setAddVal((preVal) => {
            return preVal.filter((item, idx) => {
                return idx !== id;
            })
        })
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            AddInput();
        }
    }



    return (
        <>
            <div className='background'>
                <div className='card'>

                    <div className='cardTitle'>To Do List</div>

                    <div className='addItemPadding'>
                        <input className='addContent' type="text" placeholder='Add a Item' onChange={InputVal} value={input} onKeyPress={handleKeyPress} />
                        <Button variant="text" className='addBtn' onClick={AddInput} type="submit"> <AddIcon /> </Button>
                    </div>

                    {addVal.map((crntVal, idx) => {
                        return (
                            <ToDoItems
                                key={idx}
                                id={idx}
                                currentItem={crntVal}
                                toDelete={DeleteItem}
                            />

                        );
                    })}
                    <div className='blank'></div>
                </div>


            </div>

        </>
    );
}

export default App;