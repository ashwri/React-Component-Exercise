import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p> This example demonstrates <b> {props.type} </b>  passed output to the component. </p> 
            <p> Hi! I'm {props.username} </p>
        </div>
    ) 
}

export default userOutput;