import React from 'react';
import classes from './MobileNavModal.css';
import NavigationItems from '../../NavigationItems/NavigationItems';


const mobileNavModal = (props) => {

    let attachedClasses = [classes.MobileNavModal];

    if (props.open) {
        attachedClasses = [classes.MobileNavModal, classes.Open];
    }

    return(
        <div className={attachedClasses.join(' ')}>

            <nav className={classes.MobileOnlyNavItems}>
                <NavigationItems />
            </nav>
            
        </div>
    );

}

export default mobileNavModal;