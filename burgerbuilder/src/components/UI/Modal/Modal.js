import React, { Component } from 'react'
// (b.) Import the CSS file from the Course Material
import classes from './Modal.css'
import Aux from '../../../hoc/Auxiliary'
import Backdrop from './../Backdrop/Backdrop'

class Modal extends Component {
    // Add a test to see when the Modal is refreshing
    // Doesn't have to be used for Class Components
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show
    }

    componentWillUpdate() {
        console.log('[Modal] WillUpdate')
    }

    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-1000vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }    
}


    // New Modal component wrap elements with an <Aux>
export default Modal
