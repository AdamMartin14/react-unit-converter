// CLASS-BASED COMPONENT - STATE MANAGEMENT (STATEFUL COMPONENT)
import React, {Component} from 'react';
import DropDownMenuSelect from '../../UI/DropDownMenu/DropDownMenuSelect/DropDownMenuSelect'
import DropDownMenuOptions from '../../UI/DropDownMenu/DropDownMenuOptions/DropDownMenuOptions';
import PageSecondaryHeading from '../PageSecondaryHeading/PageSecondaryHeading';
import PageTertiaryHeading from '../PageTertiaryHeading/PageTertiaryHeading';
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

                <h2>Select a Unit to Convert:</h2>

                <DropDownMenuSelect changed={this.unitNameTitleChangedHandler}>
                    <DropDownMenuOptions 
                        dropDownListOptions={unitNameValuesArray} 
                    />
                </DropDownMenuSelect>
                
                <div className={classes.UnitNameTertiaryHeadingContainer}>
                    <PageTertiaryHeading
                        headingText={this.state.unitNameSelectValue} />
                </div>

                <PageSecondaryHeading headingText={'Select ' + this.state.unitNameSelectValue + ' Values to Convert From/ To:'}/>

            </div>
        )
    }
};


export default UnitName;