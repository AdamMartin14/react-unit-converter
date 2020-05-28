// CLASS-BASED COMPONENT - STATE MANAGEMENT (STATEFUL COMPONENT)
import React, {Component} from 'react';
import DropDownMenuSelect from '../../../../../UI/DropDownMenu/DropDownMenuSelect/DropDownMenuSelect';
import DropDownMenuOptions from '../../../../../UI/DropDownMenu/DropDownMenuOptions/DropDownMenuOptions';
import ResultBox from '../../../../ResultBox/ResultBox';
import PageTertiaryHeading from '../../../../PageTertiaryHeading/PageTertiaryHeading';
import classes from '../../FromTo/FromTo.css';

var convert = require('convert-units');


const temperatureMeasurementUnits = [
    { value: 'celsius', label: 'Celsius' },
    { value: 'fahrenheit', label: 'Fahrenheit' },
 ];

const temperatureMeasurementUnitsArray = temperatureMeasurementUnits.map(ctrl => (
    <option value={ctrl.value} key={ctrl.value}>{ctrl.label}</option>
));

let resultBox1 = '';
let resultBox2 = '';
let resultBoxId = '';
let unitDropDownId = '';
let topSelectedUnitDropDownValue = '';
let bottomSelectedUnitDropDownValue = '';
let inputValue = '';
let conversionResult = '';
let rawCelsiusToFahrenheitConversion = '';
let rawFahrenheitToCelsiusConversion = '';
let roundedCelsiusToFahrenheitConversion = '';
let roundedFahrenheitToCelsiusConversion = '';
let capitalizedTopPlaceholder = '';
let capitalizedBottomPlaceholder = '';



class FromToTemperature extends Component {

    state = {
        resultBoxOneValueState: '',
        resultBoxTwoValueState: '',
        topSelectedDropDownValueState: 'celsius',
        bottomSelectedDropDownValueState: 'fahrenheit',
    }

    
    temperatureConversionHandler = (event) => {

        inputValue = event.target.value;      
        resultBoxId = event.target.id;
        rawCelsiusToFahrenheitConversion = convert(inputValue).from('C').to('F');
        rawFahrenheitToCelsiusConversion = convert(inputValue).from('F').to('C');

        roundedCelsiusToFahrenheitConversion = Math.round(rawCelsiusToFahrenheitConversion);
        roundedFahrenheitToCelsiusConversion = Math.round(rawFahrenheitToCelsiusConversion);


        if (this.state.topSelectedDropDownValueState === this.state.bottomSelectedDropDownValueState) {
            this.setState({resultBoxOneValueState: inputValue})
            this.setState({resultBoxTwoValueState: inputValue})
        }

        if (resultBoxId === 'result-box-celsius') {

            // TOP C TO BOTTOM F/ BOTTOM C TO TOP F
            if (this.state.topSelectedDropDownValueState === 'fahrenheit' || this.state.bottomSelectedDropDownValueState === 'fahrenheit') {

                conversionResult = roundedCelsiusToFahrenheitConversion;

                if (this.state.topSelectedDropDownValueState === 'celsius') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
        }

        if (resultBoxId === 'result-box-fahrenheit') {

            // TOP F TO BOTTOM C/ BOTTOM F TO TOP C
            if (this.state.topSelectedDropDownValueState === 'celsius' || this.state.bottomSelectedDropDownValueState === 'celsius') {

                conversionResult = roundedFahrenheitToCelsiusConversion;

                if (this.state.topSelectedDropDownValueState === 'fahrenheit') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
        }
    }


    unitDropDownValueHandler = (event) => {

        unitDropDownId = event.target.id;
        topSelectedUnitDropDownValue = event.target.value;
        bottomSelectedUnitDropDownValue = event.target.value;
        
        if (unitDropDownId === 'drop-down-1') {
            this.setState({topSelectedDropDownValueState: topSelectedUnitDropDownValue})
            console.log('Selected: ' + topSelectedUnitDropDownValue + ' in Box 1');

                if (topSelectedUnitDropDownValue === 'celsius' && this.state.bottomSelectedDropDownValueState === 'fahrenheit') {
                    this.setState({resultBoxOneValueState: Math.round(Number((this.state.resultBoxTwoValueState - 32) * 5/9))});
                }

                else if (topSelectedUnitDropDownValue === 'fahrenheit' && this.state.bottomSelectedDropDownValueState === 'celsius') {
                    this.setState({resultBoxOneValueState: Math.round(Number((this.state.resultBoxTwoValueState * 9/5) + 32))});           
                }

                else {
                    this.setState({resultBoxOneValueState: this.state.resultBoxTwoValueState})
                }
        }
        
        if (unitDropDownId === 'drop-down-2') {
            this.setState({bottomSelectedDropDownValueState: bottomSelectedUnitDropDownValue})
            console.log('Selected: ' + bottomSelectedUnitDropDownValue + ' in Box 2');

                if (bottomSelectedUnitDropDownValue === 'fahrenheit' && this.state.topSelectedDropDownValueState === 'celsius') {
                    this.setState({resultBoxTwoValueState: Math.round(Number((this.state.resultBoxOneValueState * 9/5) + 32))});
                }

                else if (bottomSelectedUnitDropDownValue === 'celsius' && this.state.topSelectedDropDownValueState === 'fahrenheit') {
                    this.setState({resultBoxTwoValueState: Math.round(Number((this.state.resultBoxOneValueState - 32) * 5/9))});
                }

                else {
                    this.setState({resultBoxTwoValueState: this.state.resultBoxOneValueState})
                }
        }  
    }


    render() {

        capitalizedTopPlaceholder = this.state.topSelectedDropDownValueState.charAt(0).toUpperCase() + this.state.topSelectedDropDownValueState.slice(1);
        capitalizedBottomPlaceholder = this.state.bottomSelectedDropDownValueState.charAt(0).toUpperCase() + this.state.bottomSelectedDropDownValueState.slice(1);

        resultBox1 = (
            <ResultBox
                inputHandler={this.temperatureConversionHandler}
                conversionValue={this.state.resultBoxOneValueState}
                customID={'result-box-' + this.state.topSelectedDropDownValueState}
                customPlaceholder={'Enter a ' + capitalizedTopPlaceholder + ' Value'}
            /> 
        );

        resultBox2 = (
            <ResultBox
                inputHandler={this.temperatureConversionHandler}
                conversionValue={this.state.resultBoxTwoValueState}
                customID={'result-box-' + this.state.bottomSelectedDropDownValueState}
                customPlaceholder={'Enter a ' + capitalizedBottomPlaceholder + ' Value'}
            /> 
        ); 
        
      
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