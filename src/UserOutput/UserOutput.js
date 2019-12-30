import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className = 'user-output'>
            <p> This example demonstrates <b> {props.type} </b>  passed output to the component. </p> 
            <p> Hi! I'm {props.username} </p>
        </div>
    ) 
}

export default userOutput;