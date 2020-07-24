import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

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
            {/* Lesson 114: Use useContext() (authContext=useContext(AuthContext)) instead of AuthContext.Consumer to reference context.login prop  
            <AuthContext.Consumer> 
                {(context) => 
                    <button onClick={context.login}>Log In</button>
                }
            </AuthContext.Consumer>*/}
            <button onClick={authContext.login}>Log In</button>
        </div>
    )
};

export default React.memo(cockpit);
