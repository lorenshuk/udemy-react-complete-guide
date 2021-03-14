import React from 'react'
import classes from './Toolbar.css'
import BurgerLogo from '../components/Logo/Logo'
import NavigationItems from './../components/Navigation/NavigationItems/NavigationItems'

const toolbar = (props) => (
    <header className={classes.Toolbar}> 
        <div>MENU</div>
        <div className={classes.Logo}>
            <BurgerLogo />
        </div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar