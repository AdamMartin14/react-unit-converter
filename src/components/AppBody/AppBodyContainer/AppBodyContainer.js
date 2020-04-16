// CLASS-BASED COMPONENT - STATE MANAGEMENT (STATEFUL COMPONENT)
import React, {Component} from 'react';
import PageTitleHeading from '../PageTitleHeading/PageTitleHeading';
import UnitName from '../UnitName/UnitName';

const appTitle = 'React Unit Converter';


class AppBodyContainer extends Component {

    render() {

        return (
                <div>
                    <PageTitleHeading title={appTitle} />
                    <UnitName />
                </div>    
        )
    }   
};

export default AppBodyContainer;