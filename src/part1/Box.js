import React from 'react';
import "./Box.css";


const Box = ({id="test-id", width="50", height="50", color="#000000", removeBox}) => {
    const handleRemove = () => {
        removeBox(id);
    }

    return <>
    <div 
        className='Box' 
        id={id} 
        style={{backgroundColor: color, width: width + "px", height: height + "px"}}>
    </div>
    <button className='remove-box-btn' onClick={handleRemove}>X</button>
    </>;
};

export default Box;