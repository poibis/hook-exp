import React, { useState } from 'react';

function calculateInitNum(props) {
    return Number(props * 5);
}

const Counter = (initialCount) => {
    const [value, setValue] = useState( ()=> {
        const initialState = calculateInitNum(initialCount.init);
        return initialState;
    });

    const onChangeValue = e => {
        console.log(e.target.value);
    };

    //console.log(initialCount.init);
    return (
        <div>
            <input type='number' onChange={onChangeValue}></input>
            <p> Now Counter value is <b>{value}</b></p>
            <button onClick={() => setValue(value + initialCount.init)}>+1</button>
            <button onClick={() => setValue(value - initialCount.init)}>-1</button>
        </div>
    );
};

export default Counter;
