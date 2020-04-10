// CLASS-BASED COMPONENT - STATE MANAGEMENT (STATEFUL COMPONENT)
import React, {Component} from 'react';
import AppTitleHeading from '../AppTitleHeading/AppTitleHeading';

const appTitle = 'React Unit Converter';


class AppBodyContainer extends Component {

    render() {

        return (

            <AppTitleHeading title={appTitle} />

        )
    }   
};

export default AppBodyContainer;