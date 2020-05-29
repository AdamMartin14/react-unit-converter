import React from 'react';
import PagePrimaryHeading from '../PagePrimaryHeading/PagePrimaryHeading';
import AppLogicContainer from './AppLogicContainer/AppLogicContainer';
import classes from '../AppBodyContainer/AppBodyContainer.css';

const appTitle = 'React nit Converter';


const appBodyContainer = (props) => (

    <div className={classes.AppBodyContainer}>
        <PagePrimaryHeading headingText={appTitle} />
        <AppLogicContainer />
    </div>    
       
);

export default appBodyContainer;



