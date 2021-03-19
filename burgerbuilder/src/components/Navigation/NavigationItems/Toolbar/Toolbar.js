import React from 'react'
import classes from './Toolbar.css'
import BurgerLogo from '../../../Logo/Logo'
import NavigationItems from '../NavigationItems'

const toolbar = (props) => (
    <header className={classes.Toolbar}> 
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <BurgerLogo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
   
)


export default toolbar