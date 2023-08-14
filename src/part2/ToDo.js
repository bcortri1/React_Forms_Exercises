import React from 'react';
import "./ToDo.css";


const ToDo = ({id="test-id", text="", removeToDo}) => {
    const handleRemove = () => {
        removeToDo(id);
    }

    return <li className='ToDo' id={id}>
                <button className='remove-todo-btn' onClick={handleRemove}>X</button>{text}
            </li>;
};

export default ToDo;