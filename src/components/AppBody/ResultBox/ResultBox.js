// FUNCTIONAL COMPONENT - NO STATE MANAGEMENT (STATELESS COMPONENT)
import React from 'react';
import classes from '../ResultBox/ResultBox.css';


const resultBox = (props) => {

        return (
            <input
                className ={classes.ResultInputBox} 
                type="number" 
                placeholder={props.customPlaceholder}
                value={props.temperatureConversionValue}
                onChange={props.inputHandler}
            >
            </input>             
        );
}




export default resultBox;