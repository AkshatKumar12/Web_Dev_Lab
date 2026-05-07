import React from 'react'

function Greet(props){
    return(
        <div className = "greet">
            <h1>Hello {props.name}</h1>
            <h2>Welcome to React.</h2>
        </div>
    );
}

export default Greet