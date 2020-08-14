import React from 'react';
/* 8/13/20 L128 */
import classes from './Burger.css';
/* 8/13/20 L128 - Add BurgerIngredient components */
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'


const burger = (props) => {
    /* 8/13/20 Convert the object into an array ~ Lesson 129  */
    let convertedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (convertedIngredients.length === 0) {
        convertedIngredients = <p>Please add ingredients here!</p>
    }
    /* Return JSX code
        (1) Wrap burger sub-elements in a <div>. 
        (2) Assign the className for the CSS file styling
        (3) Added BurgerIngredients within the Burger <div>
    */ 
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {convertedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );

};

export default burger