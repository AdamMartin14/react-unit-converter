// FUNCTIONAL COMPONENT - NO STATE MANAGEMENT (STATELESS COMPONENT)
import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import MobileNavToggle from './MobileNavToggle/MobileNavToggle';
import classes from './TopNavBar.css';


const topNavBar = (props) => {

    return (

        <div className={classes.TopNavBarContainer}>

            <header className={classes.TopNavBar}>
    
                <nav className={classes.DesktopOnlyNavItems}>
                    <NavigationItems />
                </nav>
                    
                <MobileNavToggle 
                    clicked={props.hamburgerIconClicked} 
                />
    
            </header>     
    
        </div>
    )
};


export default topNavBar;