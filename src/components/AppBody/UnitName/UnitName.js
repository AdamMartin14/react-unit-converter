// CLASS-BASED COMPONENT - STATE MANAGEMENT (STATEFUL COMPONENT)
import React, {Component} from 'react';
import DropDownMenu from '../../UI/DropDownMenu/DropDownMenu';
import PageSecondaryHeading from '../PageSecondaryHeading/PageSecondaryHeading';
import classes from '../UnitName/UnitName.css';


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

    state = {
        unitNameSelectValue: 'Temperature'
    }


    unitNameTitleChangedHandler = (event) => {
        this.setState( {
            unitNameSelectValue: event.target.options[event.target.selectedIndex].text
        })
    }


    render() {
        
        return (
            <div className={classes.UnitNameContainer}>
                <DropDownMenu 
                    dropDownListOptions={unitNameValuesArray} 
                    unitNameSelected={this.unitNameTitleChangedHandler} 
                />

                <PageSecondaryHeading unitNameSelected={this.state.unitNameSelectValue} />
            </div>
        )
    }
};


export default UnitName;