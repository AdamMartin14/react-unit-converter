import React from 'react';
import classes from './MobileNavToggle.css';


const mobileNavToggle = (props) => {

    return (

        <div className={classes.MobileNavToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
    
}


export default mobileNavToggle;