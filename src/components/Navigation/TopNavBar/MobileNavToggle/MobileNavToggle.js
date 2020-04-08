// FUNCTIONAL COMPONENT - NO STATE MANAGEMENT (STATELESS COMPONENT)
import React from 'react';
import classes from './MobileNavToggle.css';


const mobileNavToggle = (props) => (

    <div className={classes.MobileNavToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
    
);


export default mobileNavToggle;