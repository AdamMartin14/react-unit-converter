// FUNCTIONAL COMPONENT - NO STATE MANAGEMENT (STATELESS COMPONENT)
import React from 'react';
import classes from './PageSecondaryHeading.css'


const pageSecondaryHeading = (props) => (

    <div className={classes.PageSecondaryHeadingContainer}>

        <h2>
            {props.unitNameSelected}
        </h2>

    </div>

);

export default pageSecondaryHeading;