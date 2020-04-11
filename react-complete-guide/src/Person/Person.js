import React from 'react';
import classes from './Person.css';

const person = (props) => {
    let randNum = Math.random()
    if (randNum > 0.7) { 
        throw new Error('Something went horribly wrong here!')
    }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
       </div>
    ) 
};

export default person;