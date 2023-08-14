import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import ToDo from './ToDo';
import NewToDoForm from './NewToDoForm';
import './ToDoList.css'


const ToDoList = () => {
    const initialState = []
    const [toDoArr, setToDoList] = useState(initialState);

    const removeToDo = (id) => {
        setToDoList(toDoArr.filter((todo) => (todo.id !== id)));
    }

    const addToDo = (data) => {
        let id = uuid();
        setToDoList([...toDoArr, {...data, id}]);
    }

    return <div>
        <div className='ToDoList'>
            <NewToDoForm addToDo={addToDo}/>
        </div>
        <ol className='ToDoList'>
            {toDoArr.map((props) =>
                <ToDo key={props.id} {...props} removeToDo={removeToDo} />
            )}
        </ol>
    </div>;
};

export default ToDoList;