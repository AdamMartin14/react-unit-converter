// CLASS-BASED COMPONENT - STATE MANAGEMENT (STATEFUL COMPONENT)
import React, {Component} from 'react';
import DropDownMenuSelect from '../../UI/DropDownMenu/DropDownMenuSelect/DropDownMenuSelect';
import DropDownMenuOptions from '../../UI/DropDownMenu/DropDownMenuOptions/DropDownMenuOptions';
import ResultBox from '../ResultBox/ResultBox'
import classes from '../FromTo/FromTo.css';


const temperatureMeasurementUnits = [
    { value: 'celsius', label: 'Celsius' },
    { value: 'fahrenheit', label: 'Fahrenheit' },
 ];

const temperatureMeasurementUnitsArray = temperatureMeasurementUnits.map(ctrl => (
    <option value={ctrl.value}>{ctrl.label}</option>
));

let temperatureConversionOutput = '';
let fToCResultBox = null;
let cToFResultBox = null;



class FromTo extends Component {

    state = {
        celsiusToFahrenheit: '',
        fahrenheitToCelsius: '',
    }

    celsiusToFahrenheitHandler = (event) => {
        let value = event.target.value;
        let celsiusToFahrenheitResult = value * 9 / 5 + 32;
        temperatureConversionOutput = celsiusToFahrenheitResult.toFixed(0);
        this.setState({fahrenheitToCelsius: value})
        this.setState({celsiusToFahrenheit: temperatureConversionOutput});
    }

    fahrenheitToCelsiusHandler = (event) => {
        let value = event.target.value;
        let fahrenheitToCelsiusResult = (value - 32) * 5 / 9;
        temperatureConversionOutput = fahrenheitToCelsiusResult.toFixed(0);
        this.setState({celsiusToFahrenheit: value})
        this.setState({fahrenheitToCelsius: temperatureConversionOutput});
    }    


    render() {

        /* NEED CONDITIONAL TO RENDER CORRECT RESULTBOX COMPONENT UPON DROPDOWN SELECTION 
        OF EITHER 'CELSIUS' OR 'FAHRENHEIT' */

        /* NEED TO EITHER CONDITIONALLY RE-RENDER ENTIRE COMPONENT, OR POSSIBLY JUST SWITCH OUT
        THE HANDLERS? */

        // MANIPULATE THE INPUT VALUE?  

        fToCResultBox = (
            <ResultBox
                inputHandler={this.celsiusToFahrenheitHandler}
                temperatureConversionValue={this.state.fahrenheitToCelsius}
                customPlaceholder={"Enter a Celsius Value"}
            /> 
        );

        cToFResultBox = (
            <ResultBox
                inputHandler={this.fahrenheitToCelsiusHandler}
                temperatureConversionValue={this.state.celsiusToFahrenheit}
                customPlaceholder={"Enter a Fahrenheit Value"}
            /> 
        );


        return (
            <div className={classes.FromToContainer}>

                <h3 className={classes.FromToTitle}>Select UNIT NAME Units to Convert From/ To:</h3>

                <h3>From:</h3>

                <DropDownMenuSelect>
                    <DropDownMenuOptions 
                        dropDownListOptions={temperatureMeasurementUnitsArray}
                    />
                </DropDownMenuSelect>

                {fToCResultBox}


                <h3>To:</h3>

                <DropDownMenuSelect defaultValue={temperatureMeasurementUnitsArray[1].props.value}>
                    <DropDownMenuOptions 
                        dropDownListOptions={temperatureMeasurementUnitsArray}
                    />
                </DropDownMenuSelect>
                
                {cToFResultBox}

            </div>
        )
    }
};


export default FromTo;