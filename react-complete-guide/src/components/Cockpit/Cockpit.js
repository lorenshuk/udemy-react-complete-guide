import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect( () => {
        // test delete me
        console.log('[Cockpit.js] useEffect() #1')
        // HTTP REQUEST
       const timer = setTimeout( () => {
            alert('[Cockpit.js] useEffect() #1: Initial HTTP Request here...');
        }, 3000);

        return () => {
            clearTimeout(timer)
            console.log('[Cockpit.js] useEffect() #1: Cleanup Code')
        }
    }, [])

    useEffect(() => {
        console.log('[Cockpit.js] useEffect() #2')
    })

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
            <button 
                className={btnClass} 
                onClick={props.clicked}
            >
                {buttonText}
            </button>
        </div>
    )
};

export default React.memo(cockpit);
