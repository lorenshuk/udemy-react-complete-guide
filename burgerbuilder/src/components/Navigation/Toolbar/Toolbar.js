import React from 'react'
import classes from './Toolbar.css'
import BurgerLogo from '../../Logo/Logo'
import NavigationItems from './../NavigationItems/NavigationItems'
import DrawerToggle from './../SideDrawer/DrawerToggle/DrawerToggle'

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