import React from 'react'
import './Card.css'

function Card (props) {
    // Pass class name from the props of the child component
    const classes = "card "  + props.className;

    return <div className={classes}>{props.children}</div>
}

export default Card;