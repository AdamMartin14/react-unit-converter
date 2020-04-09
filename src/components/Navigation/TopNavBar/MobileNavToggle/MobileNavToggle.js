// FUNCTIONAL COMPONENT - NO STATE MANAGEMENT (STATELESS COMPONENT)
import React from 'react';
import classes from './MobileNavToggle.css';


/* OPTIONAL: IMPLEMENT BURGER ICON ANIMATION OPEN/ CLOSE LOGIC IN HERE FOR BURGER ICON OPEN/ CLOSE 
ANIMATION LOGIC - COMMENTED-OUT CODE HERE IS A START (TOPNAVBAR + MOBILENAVTOGGLE IS THE SAME AS 
NAVIGATIONCONTAINER + MOBILENAVMODAL FOR THIS) */

const mobileNavToggle = (props) => {

    // BURGER BUTTON OPEN/ CLOSE ANIMATION LOGIC
    // let attachedClasses = [classes.ToggleBar];

    // if (props.animated) {
    //     attachedClasses = [classes.ToggleBar, classes.Red];
    //     console.log('animated true');

    // } else {
    //     console.log('animated false');
    // }

    return (

        <div className={classes.MobileNavToggle} onClick={props.clicked}>
            <div className={attachedClasses.join(' ')}></div>
            <div className={attachedClasses.join(' ')}></div>
            <div className={attachedClasses.join(' ')}></div>
        </div>
    )
    
}


export default mobileNavToggle;