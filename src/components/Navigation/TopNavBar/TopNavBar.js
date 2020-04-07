// FUNCTIONAL COMPONENT - NO STATE MANAGEMENT (STATELESS COMPONENT)
import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import MobileNavToggle from './MobileNavToggle/MobileNavToggle';
import classes from './TopNavBar.css';

const topNavBar = (props) => (

    <header className={classes.TopNavBar}>

        <nav>
            <NavigationItems />
        </nav>

        <MobileNavToggle />

    </header>

);

export default topNavBar;