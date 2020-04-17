// CLASS-BASED COMPONENT - STATE MANAGEMENT (STATEFUL COMPONENT)
import React, {Component} from 'react';
import PagePrimaryHeading from '../PagePrimaryHeading/PagePrimaryHeading';
import UnitName from '../UnitName/UnitName';

const appTitle = 'React Unit Converter';


class AppBodyContainer extends Component {

    render() {

        return (
                <div>
                    <PagePrimaryHeading title={appTitle} />
                    <UnitName />
                </div>    
        )
    }   
};

export default AppBodyContainer;