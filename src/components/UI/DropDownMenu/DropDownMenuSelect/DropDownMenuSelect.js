// FUNCTIONAL COMPONENT - NO STATE MANAGEMENT (STATELESS COMPONENT)
import React from 'react';
import '../DropDownMenuSelect/DropDownMenuSelect.css';

const selectTest = (props) => {

    return (

        <select onChange={props.changed} value={props.defaultValue}>

            {/* 'props.children' enables this component to wrap the 'DropDownMenuOptions' component  */}
            {props.children}

        </select>
        
    );

}


export default selectTest;