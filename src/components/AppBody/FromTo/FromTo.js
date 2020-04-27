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

let resultBox1 = (
    <ResultBox
        // inputHandler={this.fahrenheitToCelsiusHandler}
        // temperatureConversionValue={this.state.celsiusToFahrenheit}
        customPlaceholder={"Enter a Celsius Value"}
    /> 
);

let resultBox2 = (
    <ResultBox
        // inputHandler={this.fahrenheitToCelsiusHandler}
        // temperatureConversionValue={this.state.celsiusToFahrenheit}
        customPlaceholder={"Enter a Fahrenheit Value"}
    /> 
); 



class FromTo extends Component {

    state = {
        celsiusToFahrenheit: '',
        fahrenheitToCelsius: '',
        topSelectedDropDownValue: 'celsius',
        bottomSelectedDropDownValue: 'fahrenheit',
        dropDownId: 'test-id'
    }

    celsiusToFahrenheitHandler = (event) => {
        console.log('c to f handler fired')
        let value = event.target.value;
        console.log('c to f input: ' + value);

        let celsiusToFahrenheitResult = value * 9 / 5 + 32;
        temperatureConversionOutput = celsiusToFahrenheitResult.toFixed(0);
        this.setState({fahrenheitToCelsius: value})
        this.setState({celsiusToFahrenheit: temperatureConversionOutput});

        console.log('c to f result: ' + temperatureConversionOutput)
    }

    fahrenheitToCelsiusHandler = (event) => {
        console.log('f to c handler fired')
        let value = event.target.value;
        console.log('f to c input: ' + value);

        let fahrenheitToCelsiusResult = (value - 32) * 5 / 9;
        temperatureConversionOutput = fahrenheitToCelsiusResult.toFixed(0);
        this.setState({celsiusToFahrenheit: value})
        this.setState({fahrenheitToCelsius: temperatureConversionOutput});

        console.log('f to c result: ' + temperatureConversionOutput)
    }
    

    unitDropDownValueHandler = (event) => {
       
        if (this.state.topSelectedDropDownValue === 'celsius' && event.target.id === 'drop-down-1') {
            console.log(this.state.topSelectedDropDownValue)
            this.setState({topSelectedDropDownValue: 'fahrenheit'})

            console.log('Selected: Fahrenheit in Box 1');
            console.log('Box 1 State: ' + this.state.topSelectedDropDownValue + ' (first (if) condition)')

            resultBox1 = (
                <ResultBox
                    inputHandler={this.fahrenheitToCelsiusHandler}
                    temperatureConversionValue={this.state.fahrenheitToCelsius}
                    customPlaceholder={"Enter a Fahrenheit Value"}
                /> 
            );
        }
        
        if (this.state.topSelectedDropDownValue === 'fahrenheit' && event.target.id === 'drop-down-1') {
            this.setState({topSelectedDropDownValue: 'celsius'})

            console.log('Selected: Celsius in Box 1');
            console.log('Box 1 State: ' + this.state.topSelectedDropDownValue + ' (second (if) condition)')

            resultBox1 = (
                <ResultBox
                    inputHandler={this.celsiusToFahrenheitHandler}
                    temperatureConversionValue={this.state.celsiusToFahrenheit}
                    customPlaceholder={"Enter a Celsius Value"}
                /> 
            );
        }
        
        if (this.state.bottomSelectedDropDownValue === 'fahrenheit' && event.target.id === 'drop-down-2') {
            this.setState({bottomSelectedDropDownValue: 'celsius'})

            console.log('Selected: Celsius in Box 2');
            console.log('Box 2 State: ' + this.state.bottomSelectedDropDownValue + ' (first (if) condition)')

            resultBox2 = (
                <ResultBox
                    inputHandler={this.celsiusToFahrenheitHandler}
                    temperatureConversionValue={this.state.celsiusToFahrenheit}
                    customPlaceholder={"Enter a Celsius Value"}
                /> 
            );
        }
        
        if (this.state.bottomSelectedDropDownValue === 'celsius' && event.target.id === 'drop-down-2') {
            this.setState({bottomSelectedDropDownValue: 'fahrenheit'})

            console.log('Selected: Fahrenheit in Box 2');
            console.log('Box 2 State: ' + this.state.bottomSelectedDropDownValue + ' (second (if) condition)')

            resultBox2 = (
                <ResultBox
                    inputHandler={this.fahrenheitToCelsiusHandler}
                    temperatureConversionValue={this.state.fahrenheitToCelsius}
                    customPlaceholder={"Enter a Fahrenheit Value"}
                />
            );
        } 

    }

            

    render() {
        
        return (
            <div className={classes.FromToContainer}>

                <h3 className={classes.FromToTitle}>Select UNIT NAME Units to Convert From/ To:</h3>

                <h3>From:</h3>

                <DropDownMenuSelect 
                    changed={this.unitDropDownValueHandler}
                    id={'drop-down-1'}
                >

                    <DropDownMenuOptions 
                        dropDownListOptions={temperatureMeasurementUnitsArray}
                    />
                </DropDownMenuSelect>

                {resultBox1}


                <h3>To:</h3>

                <DropDownMenuSelect
                    defaultValue={temperatureMeasurementUnitsArray[1].props.value}
                    changed={this.unitDropDownValueHandler}
                    id={'drop-down-2'}
                >

                    <DropDownMenuOptions 
                        dropDownListOptions={temperatureMeasurementUnitsArray}
                    />
                </DropDownMenuSelect>
                
                {resultBox2}

            </div>
        )
    }
};


export default FromTo;