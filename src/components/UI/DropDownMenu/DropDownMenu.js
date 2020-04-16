// FUNCTIONAL COMPONENT - NO STATE MANAGEMENT (STATELESS COMPONENT)
import React from 'react';


const dropDownMenu = (props) => {

        return (
            <select>
                {props.dropDownListOptions}
            </select>
        );
}


export default dropDownMenu;