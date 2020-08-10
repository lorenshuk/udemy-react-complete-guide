import React from 'react';
import Aux from "../../hocs/Auxiliary";
import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        <div>Toolbar, Sidedrawer, Backdrop Up Here</div>

        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout
