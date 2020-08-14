/* 
    - 8/13/20 3:36 PM - Add Burger Component created from Lesson 128
        -> Replace the <div>Burger</div> with the <Burger> Comp
*/
import React, { Component } from 'react';
import Aux from '../../hocs/Auxiliary';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    /* 8/13/20 Add state for the dynamic Ingredient build ~ Lesson 129 */
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
            return (
            <Aux>
                {/* Visual representation of the Burger 
                    <div>Burger</div> -> Replaced with the <Burger> Class-Component - 8/13/20
                */}
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;