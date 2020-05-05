// CLASS-BASED COMPONENT - STATE MANAGEMENT (STATEFUL COMPONENT)
import React, {Component} from 'react';
import PagePrimaryHeading from '../PagePrimaryHeading/PagePrimaryHeading';
import UnitName from '../UnitName/UnitName';
import FromTo from '../FromTo/FromTo';
import classes from '../AppBodyContainer/AppBodyContainer.css';

const appTitle = 'React Unit Converter';


class AppBodyContainer extends Component {

    render() {

        return (
                <div className={classes.AppBodyContainer}>

                    <PagePrimaryHeading headingText={appTitle} />

                    <UnitName />

                    {/* Add conditional to render different unit FromTo Components on selection of 
                    UnitName dropdown */}

                    {/* FromToContainer component (props.children within the tags, and different unit 
                    converters + conditionals to display them within the actual component file - 
                    avoids having logig in here - keeps this as a container). */}

                    <FromTo />

                </div>    
        )
    }   
};

export default AppBodyContainer;