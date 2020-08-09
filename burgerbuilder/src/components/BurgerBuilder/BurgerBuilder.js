import React, { Component } from 'react';
import Aux from "../../hocs/Auxiliary";

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                {/* Visual representation of the Burger */}
                <div>Burger</div>
                {/* Add/Remove condiments controll buttons */}
                <div>Build Controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;