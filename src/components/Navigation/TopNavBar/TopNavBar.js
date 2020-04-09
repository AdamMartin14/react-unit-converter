// CLASS-BASED COMPONENT - STATE MANAGEMENT (STATEFUL COMPONENT)
import React, {Component} from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import MobileNavToggle from './MobileNavToggle/MobileNavToggle';
import classes from './TopNavBar.css';


/* OPTIONAL: IMPLEMENT BURGER ICON ANIMATION OPEN/ CLOSE LOGIC IN HERE FOR BURGER ICON OPEN/ CLOSE 
ANIMATION LOGIC - COMMENTED-OUT CODE HERE IS A START (TOPNAVBAR + MOBILENAVTOGGLE IS THE SAME AS 
NAVIGATIONCONTAINER + MOBILENAVMODAL FOR THIS) */

class TopNavBar extends Component {

    // BURGER ICON ANIMATION OPEN/ CLOSE LOGIC
    // state = {
    //     animateBurgerIcon: false
    // }

    // mobileNavModalToggleHandler = () => {
    //     if (this.state.animateBurgerIcon === false) {
    //         this.setState({animateBurgerIcon: true});
    //     }
    //     console.log(this.state.animateBurgerIcon) 
    // }

    
    render() {

        return (

            <div className={classes.TopNavBarContainer}>

                <header className={classes.TopNavBar}>
    
                    <nav>
                        <NavigationItems />
                    </nav>
                    
                    {/* Need to somehow bind burger icon animation here */}
                    <MobileNavToggle 
                        clicked={this.props.hamburgerIconClicked} 
                        // animated={this.state.animateBurgerIcon}
                    />
    
            </header>     
    
        </div>

        )
    }   

};

export default TopNavBar;