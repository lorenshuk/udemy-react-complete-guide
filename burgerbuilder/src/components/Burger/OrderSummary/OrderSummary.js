import React, { Component } from 'react'
import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    // Add a hook to see when this class is re-rendering
    componentDidUpdate() {
        console.log('OrderSummary updated')
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}><span sytle={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
            })
    
        return (
            < Aux >
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Proceed to checkout?</p>
                <Button btnType={'Success'} clicked={this.props.purchaseContinued}>Proceed</Button>
                <Button btnType={'Danger'} clicked={this.props.purchaseCancelled}>Cancel</Button>
            </Aux >
        )
    }
}

export default OrderSummary
