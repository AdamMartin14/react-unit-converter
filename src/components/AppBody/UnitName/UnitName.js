// CLASS-BASED COMPONENT - STATE MANAGEMENT (STATEFUL COMPONENT)
import React, {Component} from 'react';
import DropDownMenuOptions from '../../UI/DropDownMenuOptions/DropDownMenuOptions';
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

                <select onChange={this.unitNameTitleChangedHandler}>
                    <DropDownMenuOptions 
                        dropDownListOptions={unitNameValuesArray} 
                    />
                </select>
                
                <PageSecondaryHeading unitNameSelected={this.state.unitNameSelectValue} />
            </div>
        )
    }
};


export default UnitName;