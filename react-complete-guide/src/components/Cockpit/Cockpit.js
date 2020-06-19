import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect( () => {
        toggleBtnRef.current.click();

        return () => {
                console.log('[Cockpit.js] cleanup code in useEffect()')
        }
    }, [])

    let assignedClasses = []

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red)
    }
    if (props.personsLength <=1){
        assignedClasses.push(classes.bold)
    }

    let btnClass = ''
    let buttonText = 'Show Persons'

    if (props.showPersons) {
        btnClass = classes.Red
        buttonText = 'Hide Persons'
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} ref={toggleBtnRef} onClick={props.clicked}>
                {buttonText}
            </button>
            <button onClick={props.login}>Log In</button>
        </div>
    )
};

export default React.memo(cockpit);
