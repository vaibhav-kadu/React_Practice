import React, { useState } from 'react'

export const CounterApp = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='container'>
        <div className='container'>
            <h1>CounterApp</h1>

            <h2>Count Value: {count} </h2>

            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    </div>
  );
}