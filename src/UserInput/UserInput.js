import React from 'react';

const userInput = (props) => {
    return  (
        <div>
             <p> Please enter your username: </p>
            <input type="text" onChange = {props.acceptUsername} value = {props.currentName} />
        </div>
    ) 
}


export default userInput;