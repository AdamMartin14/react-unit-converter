import React from 'react';
import '../DropDownMenuSelect/DropDownMenuSelect.css';

const dropDownMenuSelect = (props) => {

    return (

        <select onChange={props.changed} defaultValue={props.defaultValue} id={props.id}>
            {props.children}
        </select>
        
    );

}


export default dropDownMenuSelect;