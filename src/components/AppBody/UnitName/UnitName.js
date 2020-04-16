// FUNCTIONAL COMPONENT - NO STATE MANAGEMENT (STATELESS COMPONENT)
import React, {Component} from 'react';
import DropDownMenu from '../../UI/DropDownMenu/DropDownMenu';


const unitNameValues = [
    { value: 'temperature', label: 'Temperature' },
    { value: 'weight', label: 'Weight' },
    { value: 'distance', label: 'Distance' },
    { value: 'speed', label: 'Speed' },
 ];

const unitNameValuesArray = unitNameValues.map(ctrl => (
    <option value={ctrl.value}>{ctrl.label}</option>
));


class UnitName extends Component {

    render() {
        
        return (
            <DropDownMenu dropDownListOptions={unitNameValuesArray} />
        )
    }
};


export default UnitName;