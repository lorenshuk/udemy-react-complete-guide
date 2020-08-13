import React from 'react';

const burgerIngredient = (props) => {
    // Create an ingredient variable to hold the ingredient list
    let ingredient = null;

    // Apply the stylings in the burgerIngredient.css file:
    // 1. Bottom Bread\Bun
    // 2. Top Bun
    // 3. Meat
    // 4. Salad
    // 5. Cheese
    // 6. Bacon
    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case ('bread-top'):
            // Top bun contains seeds, so create a <div> with multiple elements within
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className={classes.Meat}></div>;
            break;
        case ('cheese'):
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case ('salad'):
            ingredient = <div className={classes.Salad}></div>;
            break;
        case ('bacon'):
            ingredient = <div className={classes.Bacon}></div>;
            break;
        default:
            ingredient = null
    }
};

export default burgerIngredient;

