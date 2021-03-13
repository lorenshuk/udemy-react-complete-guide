import React from 'react'
// (b.) Import the CSS file from the Course Material
import classes from './Modal.css'
import Aux from '../../../hoc/Auxiliary'
import Backdrop from './../Backdrop/Backdrop'

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-1000vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
)

    // New Modal component wrap elements with an <Aux>
export default modal
