// FUNCTIONAL COMPONENT - NO STATE MANAGEMENT (STATELESS COMPONENT)
import React from 'react';
import classes from '../ResultBox/ResultBox.css';


const resultBox = (props) => {

        return (
            <input
                className ={classes.ResultInputBox}
                id={props.customID}
                name={props.customName} 
                type="number" 
                placeholder={props.customPlaceholder}
                value={props.conversionValue}
                onChange={props.inputHandler}
            >
            </input>             
        );
}




export default resultBox;