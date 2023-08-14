import React, { useState } from 'react';
import './BoxList.css'
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';


const BoxList = () => {
    const initialState = []
    const [boxArr, setBoxList] = useState(initialState);

    const removeBox = (id) => {
        setBoxList(boxArr.filter((box) => (box.id !== id)));
    }

    const addBox = (data) => {
        let id = uuid();
        setBoxList([...boxArr, {...data, id}]);
    }

    return <div>
        <div className='BoxList'>
            <NewBoxForm addBox={addBox}/>
        </div>
        <div className='BoxList'>
            {boxArr.map((props) =>
                <Box key={props.id} {...props} removeBox={removeBox} />
            )}
        </div>
    </div>;
};

export default BoxList;