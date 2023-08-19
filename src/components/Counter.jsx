import React, { useState } from 'react';

const Counter = () => {

    const [count , setCount] = useState(0)

    const handleCount= ()=>{
        setCount((count)=>count + 1)
    }

    return (
        <div>
            <p>counter</p>
            <p>Counter: {count}</p>
            <button onClick={handleCount}>Increment</button>
        </div>
    );
};

export default Counter;