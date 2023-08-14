import React, {useState} from 'react';
import './NewBoxForm.css';


const NewBoxForm = ({addBox}) =>{
    const initialState ={
        width: '50',
        height: '50',
        color: '#000000',
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
        addBox(formData);
        clearForm();
    }

    return <form id='new-box-form'>
                <label htmlFor='width'>Width:</label>
                <input 
                    id='width'
                    name='width' 
                    type='number' 
                    value={formData.width} 
                    onChange={handleChange} 
                    required
                />
                <label htmlFor='height'>Height:</label>
                <input 
                    id='height'
                    name='height'
                    type='number' 
                    value={formData.height} 
                    onChange={handleChange} 
                    required
                />
                <label htmlFor='color'>Color:</label>
                <input
                    id='color' 
                    name='color' 
                    type='color' 
                    value={formData.color} 
                    onChange={handleChange}
                />
                <button id='form-btn' onClick={handleSubmit}>Add!</button>
            </form>;
};

export default NewBoxForm;