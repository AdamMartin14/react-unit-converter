// FUNCTIONAL COMPONENT - NO STATE MANAGEMENT (STATELESS COMPONENT)
import React from 'react';
import classes from './PagePrimaryHeading.css'

const pagePrimaryHeading = (props) => (

    <div className={classes.PagePrimaryHeadingContainer}>
        <h1>
            {props.headingText}
        </h1>
    </div>

);

export default pagePrimaryHeading;