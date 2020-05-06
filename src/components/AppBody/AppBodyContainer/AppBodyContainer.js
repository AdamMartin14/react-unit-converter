// CLASS-BASED COMPONENT - STATE MANAGEMENT (STATEFUL COMPONENT)
import React, {Component} from 'react';
import PagePrimaryHeading from '../PagePrimaryHeading/PagePrimaryHeading';
import UnitName from '../UnitName/UnitName';
import FromToController from '../AppBodyContainer/FromTo/FromToController/FromToController';
import classes from '../AppBodyContainer/AppBodyContainer.css';

const appTitle = 'React Unit Converter';


class AppBodyContainer extends Component {

    render() {

        return (
                <div className={classes.AppBodyContainer}>

                    <PagePrimaryHeading headingText={appTitle} />

                    <UnitName />

                    <FromToController />

                </div>    
        )
    }   
};

export default AppBodyContainer;