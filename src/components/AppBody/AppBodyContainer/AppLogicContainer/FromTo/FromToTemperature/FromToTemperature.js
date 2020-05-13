// CLASS-BASED COMPONENT - STATE MANAGEMENT (STATEFUL COMPONENT)
import React, {Component} from 'react';
import DropDownMenuSelect from '../../../../../UI/DropDownMenu/DropDownMenuSelect/DropDownMenuSelect';
import DropDownMenuOptions from '../../../../../UI/DropDownMenu/DropDownMenuOptions/DropDownMenuOptions';
import ResultBox from '../../../../ResultBox/ResultBox';
import PageTertiaryHeading from '../../../../PageTertiaryHeading/PageTertiaryHeading';
import classes from '../../FromTo/FromTo.css';


const temperatureMeasurementUnits = [
    { value: 'celsius', label: 'Celsius' },
    { value: 'fahrenheit', label: 'Fahrenheit' },
 ];

const temperatureMeasurementUnitsArray = temperatureMeasurementUnits.map(ctrl => (
    <option value={ctrl.value}>{ctrl.label}</option>
));

let temperatureConversionOutput = '';

let resultBox1 = '';
let resultBox2 = '';
let inputValue = '';

var convert = require('convert-units')




class FromToTemperature extends Component {

    state = {
        celsiusToFahrenheit: '',
        fahrenheitToCelsius: '',
        topSelectedDropDownValue: 'celsius',
        bottomSelectedDropDownValue: 'fahrenheit',
    }

    
    temperatureConversionHandler = (event) => {

        if (event.target.name === 'result-box-celsius') {
            console.log('c to f handler fired')
            inputValue = event.target.value;
            console.log('c to f input: ' + inputValue);

            let celsiusToFahrenheitResult = convert(inputValue).from('C').to('F');
            temperatureConversionOutput = celsiusToFahrenheitResult.toFixed(0);
            this.setState({fahrenheitToCelsius: inputValue})
            this.setState({celsiusToFahrenheit: temperatureConversionOutput});

            console.log('c to f result: ' + temperatureConversionOutput);
        }

        if (event.target.name === 'result-box-fahrenheit' ) {
            console.log('f to c handler fired');
            inputValue = event.target.value;
            console.log('f to c input: ' + inputValue);

            let fahrenheitToCelsiusResult = convert(inputValue).from('F').to('C');
            temperatureConversionOutput = fahrenheitToCelsiusResult.toFixed(0);
            this.setState({celsiusToFahrenheit: inputValue})
            this.setState({fahrenheitToCelsius: temperatureConversionOutput});

            console.log('f to c result: ' + temperatureConversionOutput)   
        }
    }


    unitDropDownValueHandler = (event) => {

        // BOX 1 STARTS AS CELSIUS

        // SET BOX 1 TO FAHRENHEIT
        if (event.target.id === 'drop-down-1' && event.target.value === 'fahrenheit') {
            this.setState({topSelectedDropDownValue: 'fahrenheit'})

            console.log('Selected: Fahrenheit in Box 1');
            console.log('Box 1 State: ' + this.state.topSelectedDropDownValue + ' (first (if) condition)')
        } 
        
        // SET BOX 1 BACK TO CELSIUS
        if (event.target.id === 'drop-down-1' && event.target.value === 'celsius') {
            this.setState({topSelectedDropDownValue: 'celsius'})

            console.log('Selected: Celsius in Box 1');
            console.log('Box 1 State: ' + this.state.topSelectedDropDownValue + ' (second (if) condition)');

        }

        
        // BOX 2 STARTS AS FAHRENHEIT

        // SET BOX 2 TO CELSIUS
        if (event.target.id === 'drop-down-2' && event.target.value === 'celsius') {
            this.setState({bottomSelectedDropDownValue: 'celsius'})

            console.log('Selected: Celsius in Box 2');
            console.log('Box 2 State: ' + this.state.bottomSelectedDropDownValue + ' (first (if) condition)');
        }
        
        // SET BOX 2 BACK TO FAHRENHEIT
        if (event.target.id === 'drop-down-2' && event.target.value === 'fahrenheit') {
            this.setState({bottomSelectedDropDownValue: 'fahrenheit'})

            console.log('Selected: Fahrenheit in Box 2');
            console.log('Box 2 State: ' + this.state.bottomSelectedDropDownValue + ' (second (if) condition)');
        } 

    }

    
    
    render() {
        
        if (this.state.topSelectedDropDownValue === 'celsius') {

            resultBox1 = (
                <ResultBox
                    inputHandler={this.temperatureConversionHandler}
                    conversionValue={this.state.fahrenheitToCelsius}
                    customID={'result-box-1'}
                    customName={'result-box-celsius'}
                    customPlaceholder={"Enter a Celsius Value"}
                /> 
            );
        } 
        
        else {
            
            resultBox1 = (
                <ResultBox
                    inputHandler={this.temperatureConversionHandler}
                    conversionValue={this.state.celsiusToFahrenheit}
                    customID={'result-box-1'}
                    customName={'result-box-fahrenheit'}
                    customPlaceholder={"Enter a Fahrenheit Value"}
                /> 
            );
        }


        if (this.state.bottomSelectedDropDownValue === 'fahrenheit') {
            resultBox2 = (
                <ResultBox
                    inputHandler={this.temperatureConversionHandler}
                    conversionValue={this.state.celsiusToFahrenheit}
                    customID={'result-box-2'}
                    customName={'result-box-fahrenheit'}
                    customPlaceholder={"Enter a Fahrenheit Value"}
                /> 
            ); 
        } 
        
        else {
            
            resultBox2 = (
                <ResultBox
                    inputHandler={this.temperatureConversionHandler}
                    conversionValue={this.state.fahrenheitToCelsius}
                    customID={'result-box-2'}
                    customName={'result-box-celsius'}
                    customPlaceholder={"Enter a Celsius Value"}
                /> 
            ); 
        }
    


        return (
            
            <div className={classes.FromToContainer}>

                <PageTertiaryHeading headingText={'From:'} />

                <DropDownMenuSelect 
                    changed={this.unitDropDownValueHandler}
                    id={'drop-down-1'}
                >

                    <DropDownMenuOptions 
                        dropDownListOptions={temperatureMeasurementUnitsArray}
                    />
                </DropDownMenuSelect>

                {resultBox1}


                <PageTertiaryHeading headingText={'To:'} />

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


export default FromToTemperature;