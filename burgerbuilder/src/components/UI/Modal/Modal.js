import React from 'react'
// (b.) Import the CSS file from the Course Material
import classes from './Modal.css'

const Modal = (props) => (
    // (b) Wrap the child elements in a <div>
    <div className={classes.Modal}>
        {props.children}
    </div>
)

export default Modal
