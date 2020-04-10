// FUNCTIONAL COMPONENT - NO STATE MANAGEMENT (STATELESS COMPONENT)
import React from 'react';
import classes from './AppTitleHeading.css'

const appTitleHeading = (props) => (

    <div className={classes.AppTitleHeadingContainer}>
        <h1>{props.title}</h1>
    </div>

);

export default appTitleHeading;