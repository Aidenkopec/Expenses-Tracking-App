import React from 'react';
import './Card.css'
function Card(props) {
    // Adds remaining class names
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;