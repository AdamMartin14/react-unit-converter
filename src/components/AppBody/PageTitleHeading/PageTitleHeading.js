// FUNCTIONAL COMPONENT - NO STATE MANAGEMENT (STATELESS COMPONENT)
import React from 'react';
import classes from './PageTitleHeading.css'

const pageTitleHeading = (props) => (

    <div className={classes.PageTitleHeadingContainer}>
        <h1>{props.title}</h1>
    </div>

);

export default pageTitleHeading;