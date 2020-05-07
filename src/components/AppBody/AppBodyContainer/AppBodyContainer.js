// CLASS-BASED COMPONENT - STATE MANAGEMENT (STATEFUL COMPONENT)
import React, {Component} from 'react';
import PagePrimaryHeading from '../PagePrimaryHeading/PagePrimaryHeading';
import AppLogicContainer from './AppLogicContainer/AppLogicContainer';
import classes from '../AppBodyContainer/AppBodyContainer.css';


const appTitle = 'React Unit Converter';

class AppBodyContainer extends Component {

    render() {

        return (
                <div className={classes.AppBodyContainer}>

                    <PagePrimaryHeading headingText={appTitle} />

                    <AppLogicContainer />

                </div>    
        )
    }   
};

export default AppBodyContainer;