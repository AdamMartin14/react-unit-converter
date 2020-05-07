// FUNCTIONAL COMPONENT - NO STATE MANAGEMENT (STATELESS COMPONENT)
import React, {Component} from 'react';
import FromToTemperature from '../AppLogicContainer/FromTo/FromToTemperature/FromToTemperature';
import PageSecondaryHeading from '../../PageSecondaryHeading/PageSecondaryHeading';
import PageTertiaryHeading from '../../PageTertiaryHeading/PageTertiaryHeading'; 
import DropDownMenuSelect from '../../../UI/DropDownMenu/DropDownMenuSelect/DropDownMenuSelect';
import DropDownMenuOptions from '../../../UI/DropDownMenu/DropDownMenuOptions/DropDownMenuOptions';
import classes from '../AppLogicContainer/AppLogicContainer.css';


/* STEP 1 - Add conditional logic (switch statement?) to render different unit FromTo 
Components on selection of UnitName dropdown. */

// STEP 2 - Add conversion logic to each new FromTo Component.

const unitNameValues = [
    { value: 'temperature', label: 'Temperature' },
    { value: 'weight', label: 'Weight' },
    { value: 'distance', label: 'Distance' },
    { value: 'speed', label: 'Speed' },
 ];

const unitNameValuesArray = unitNameValues.map(ctrl => (
    <option value={ctrl.value}>{ctrl.label}</option>
));



class AppLogicContainer extends Component {

    state = {
        unitNameSelectValue: 'Temperature'
    }


    unitNameTitleChangedHandler = (event) => {
        this.setState( {
            unitNameSelectValue: event.target.options[event.target.selectedIndex].text,
        })
    }


    render() {

        let selectedFromToComponent = null

        switch(this.state.unitNameSelectValue) {

            case('Temperature'):
                selectedFromToComponent = <FromToTemperature />
                break;

            case('Weight'):
                selectedFromToComponent = (
                    <div>FromTo WEIGHT</div>  
                );
            break;

            case('Distance'):
                selectedFromToComponent = (
                    <div>FromTo DISTANCE</div>  
                );
            break;

            case('Speed'):
                selectedFromToComponent = (
                    <div>FromTo SPEED</div>  
                );
            break;

                default:
                    selectedFromToComponent = null;
        }

        return (

            <div>

                <div className={classes.UnitNameContainer}>
                    <PageSecondaryHeading headingText='Select a Unit to Convert:' />

                    <DropDownMenuSelect changed={this.unitNameTitleChangedHandler}>
                        <DropDownMenuOptions 
                            dropDownListOptions={unitNameValuesArray} 
                        />
                    </DropDownMenuSelect>
                    
                    <div className={classes.UnitNameTertiaryHeadingContainer}>
                        <PageTertiaryHeading
                            headingText={this.state.unitNameSelectValue} />
                    </div>

                    <div className={classes.UnitNameSecondaryHeadingContainer}>
                        <PageSecondaryHeading headingText={'Select ' + this.state.unitNameSelectValue + ' Values to Convert From/ To:'}/>
                    </div>

                </div>


                <div>
                    {selectedFromToComponent}
                </div>

            </div>  

        );

    }       
}


export default AppLogicContainer;