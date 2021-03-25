// Convert to Class Component to allow Methods & States
import React, { Component } from 'react';
import Aux from "../Auxiliary/Auxiliary";
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false,
        runRecurse: true
    }

    sideDrawerClosedHandler = () => {
        this.setState( {showSideDrawer: false} )
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    /****
        Test recursion in JS for Caffeine Consumption (5-6 hr half-life, 50 mg will affect slee
    ****/
        recurseHalf = (amount, nth) => {
        this.setState({runRecurse: false})

        if (!Number.isInteger(nth)) nth = 0

        let newAmount = amount * (0.5 ** nth)
        const halfHours = 5
        const stillBuzzed = 50

        console.log(`recurseHalf.newAmount = ${newAmount}`)

        if (newAmount < stillBuzzed ) {
            console.log(`recurseHalf NOT Buzzed after ${nth * halfHours} hours`)
            return nth
        } else {
            console.log(`recurseHalf RECURSE: ${nth+1}`)
            this.recurseHalf(amount, nth + 1)
        }
        return
    }
    
    render() {

        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout
