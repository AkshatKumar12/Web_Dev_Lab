import React, { useState } from "react"

function Counter(){
    const [count,setUpdate] = useState(0);
    function increase(){
        setUpdate(count + 1)
    }
    function decrease(){
        setUpdate(count - 1)
    }
    function reset(){
        setUpdate(0)
    }
    return(
        <div>
            <h2>Counter</h2>
            <h3>{count}</h3>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter
