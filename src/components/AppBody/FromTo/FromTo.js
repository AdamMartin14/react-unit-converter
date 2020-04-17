// CLASS-BASED COMPONENT - STATE MANAGEMENT (STATEFUL COMPONENT)
import React, {Component} from 'react';
import DropDownMenu from '../../UI/DropDownMenu/DropDownMenu';
import ResultBox from '../ResultBox/ResultBox'

const temperatureMeasurementUnits = [
    { value: 'celsius', label: 'Celsius' },
    { value: 'fahrenheit', label: 'Fahrenheit' }
 ];

const temperatureMeasurementUnitsArray = temperatureMeasurementUnits.map(ctrl => (
    <option value={ctrl.value}>{ctrl.label}</option>
));


class FromTo extends Component {

    render() {
        
        return (
            <div>
                
                <h2>From:</h2>

                    <DropDownMenu 
                        dropDownListOptions={temperatureMeasurementUnitsArray} 
                    />

                    <ResultBox />

                <h2>To:</h2>

                    <DropDownMenu 
                        dropDownListOptions={temperatureMeasurementUnitsArray} 
                    />

                    <ResultBox />

            </div>
        )
    }
};


export default FromTo;