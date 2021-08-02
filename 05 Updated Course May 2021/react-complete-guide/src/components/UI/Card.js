import React from "react";
import './Card.css';

function Card(props) {
  // Enable passing extra classes from the props("className") of the child component
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;