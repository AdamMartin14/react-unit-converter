// FUNCTIONAL COMPONENT - NO STATE MANAGEMENT (STATELESS COMPONENT)
import React from 'react';
import classes from './MobileNavModal.css';


const mobileNavModal = (props) => {

    // MOBILE NAV MODAL OPEN/ CLOSE LOGIC
    let attachedClasses = [classes.MobileNavModal, classes.Close];

    if (props.open) {
        attachedClasses = [classes.MobileNavModal, classes.Open];
    }

    return(

        <div className={attachedClasses.join(' ')}>
        
        </div>

    );

}

export default mobileNavModal;