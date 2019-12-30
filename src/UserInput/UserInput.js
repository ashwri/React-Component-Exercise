import React from 'react';

const userInput = (props) => {
    return  (
        <div>
             <label> Please enter your username: </label>
            <input type="text" onChange = {props.acceptUsername} value = {props.currentName} />
        </div>
    ) 
}


export default userInput;