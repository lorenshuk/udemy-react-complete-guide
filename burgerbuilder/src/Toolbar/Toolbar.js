import React from 'react'
import classes from './Toolbar.css'
import BurgerLogo from '../components/Logo/Logo'

const toolbar = (props) => (
    <header className={classes.Toolbar}> 
        <div>MENU</div>
        <BurgerLogo />
        <nav>
            . . .
        </nav>
    </header>
)

export default toolbar