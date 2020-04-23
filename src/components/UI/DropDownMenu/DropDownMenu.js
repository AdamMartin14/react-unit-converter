// FUNCTIONAL COMPONENT - NO STATE MANAGEMENT (STATELESS COMPONENT)
import React from 'react';
import '../DropDownMenu/DropDownMenu.css';


const dropDownMenu = (props) => {

        return (
            <select onChange={props.unitNameSelected} value={props.defaultSelected}>
                {props.dropDownListOptions}
            </select>
        );
}


export default dropDownMenu;