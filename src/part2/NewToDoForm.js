import React, { useState } from 'react';
import './NewToDoForm.css';


const NewToDoForm = ({addToDo}) =>{
    const initialState ={
        text:""
    }

    const [formData, setFormData] = useState(initialState);
    //Reset Form to initial state
    const clearForm = (evt) =>{
        setFormData(initialState);
    }

    //Handle any input change
    const handleChange = (evt) =>{
        const { name, value } = evt.target;
        setFormData((data) => ({
            ...data,
            [name]: value
        }))
    }
    //Handles default behavior and submission of data
    const handleSubmit = (evt) =>{
        evt.preventDefault();
        addToDo(formData);
        clearForm();
    }

    return <form id='new-todo-form'>
                <label htmlFor='text'>ToDo:</label>
                <input 
                    id='text'
                    name='text' 
                    type='text' 
                    value={formData.text} 
                    onChange={handleChange} 
                    required
                />
                <button id='form-btn' onClick={handleSubmit}>Add!</button>
            </form>;
};


export default NewToDoForm;