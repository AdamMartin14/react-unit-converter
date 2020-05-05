// FUNCTIONAL COMPONENT - NO STATE MANAGEMENT (STATELESS COMPONENT)
import React from 'react';
import classes from './PageTertiaryHeading.css'


const pageTertiaryHeading = (props) => (

    <div className={classes.PageTertiaryHeadingContainer}>
        <h3>
            {props.headingText}
        </h3>
    </div>

);

export default pageTertiaryHeading;