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


let temperatureConversionOutput = ''


class FromTo extends Component {

    state = {
        // WILL EVENTUALLY BE ONE STATE VALUE FOR ALL CONVERSIONS
        fahrenheitToCelsius: '',
        celsiusToFahrenheit: ''
    }


    celsiusToFahrenheitHandler = (event) => {
        console.log('c to f handler fired');
        const value = event.target.value;
        console.log('Initial value:' + ' ' + value);

        let celsiusToFahrenheitResult = value * 9 / 5 + 32;
        temperatureConversionOutput = celsiusToFahrenheitResult.toFixed(1);
        console.log('Output:' + ' ' + temperatureConversionOutput);

        // PASS RESULT TO OTHER BOX
        this.setState({celsiusToFahrenheit: temperatureConversionOutput});
        console.log('c to f state:' + ' ' + this.state.celsiusToFahrenheit);
    }


    fahrenheitToCelsiusHandler = (event) => {
        console.log('f to c handler fired');
        const value = event.target.value;
        console.log('Initial value:' + ' ' + value);

        let fahrenheitToCelsiusResult = (value - 32) * 5 / 9;
        temperatureConversionOutput = fahrenheitToCelsiusResult.toFixed(1);
        console.log('Output:' + ' ' + temperatureConversionOutput);

        // PASS RESULT TO OTHER BOX
        this.setState({fahrenheitToCelsius: temperatureConversionOutput});
        console.log('f to c state:' + ' ' + this.state.fahrenheitToCelsius);
    }

    
    render() {
        
        return (
            <div>
                
                <h2>From:</h2>

                    <DropDownMenu 
                        dropDownListOptions={temperatureMeasurementUnitsArray} 
                    />

                    <ResultBox
                        inputHandler={this.celsiusToFahrenheitHandler}
                        temperatureConversionValue={this.state.fahrenheitToCelsius}
                    />

                <h2>To:</h2>

                    <DropDownMenu 
                        dropDownListOptions={temperatureMeasurementUnitsArray} 
                    />

                    <ResultBox
                        inputHandler={this.fahrenheitToCelsiusHandler}
                        temperatureConversionValue={this.state.celsiusToFahrenheit} 
                    />

            </div>
        )
    }
};


export default FromTo;