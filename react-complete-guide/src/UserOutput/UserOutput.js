import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    const outputStyle = {
        width: '60%',
        backgroundColor: 'yellow',
        color: 'black',
        border: '1px solid black',
        padding: '16px'
    }

    return (
        <div className="UserOutput">
            <p style={outputStyle}><bold>Username:</bold> {props.username}</p>
        </div>
    )
};

export default userOutput;