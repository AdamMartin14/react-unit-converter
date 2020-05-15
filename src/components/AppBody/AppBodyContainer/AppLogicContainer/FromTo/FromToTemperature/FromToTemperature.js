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
    <option value={ctrl.value}>{ctrl.label}</option>
));

let resultBox1 = '';
let resultBox2 = '';
let resultBoxId = '';
let topSelectedDropDownValue = '';
let bottomSelectedDropDownValue = '';
let inputValue = '';
let conversionResult = '';
let celsiusToFahrenheitConversion = '';
let fahrenheitToCelsiusConversion = '';
let capitalizedTopPlaceholder = '';
let capitalizedBottomPlaceholder = '';




class FromToTemperature extends Component {

    state = {
        resultBoxOneState: '',
        resultBoxTwoState: '',
        topSelectedDropDownValueState: 'celsius',
        bottomSelectedDropDownValueState: 'fahrenheit',
    }

    

    temperatureConversionHandler = (event) => {

        inputValue = event.target.value;      
        resultBoxId = event.target.id;
        celsiusToFahrenheitConversion = convert(inputValue).from('C').to('F').toFixed(1);
        fahrenheitToCelsiusConversion = convert(inputValue).from('F').to('C').toFixed(1);  

        if (resultBoxId === 'result-box-celsius') {
            console.log('c to f handler fired')
            console.log('c to f input: ' + inputValue);
            conversionResult = celsiusToFahrenheitConversion;

            if (this.state.bottomSelectedDropDownValueState === 'fahrenheit') {
                this.setState({resultBoxOneState: inputValue});
                this.setState({resultBoxTwoState: conversionResult});

            } else {
                this.setState({resultBoxTwoState: inputValue});
                this.setState({resultBoxOneState: conversionResult});
            }
            console.log('c to f result: ' + conversionResult);
        }


        if (resultBoxId === 'result-box-fahrenheit') {
            console.log('f to c handler fired')
            console.log('f to c input: ' + inputValue);
            conversionResult = fahrenheitToCelsiusConversion;

            if (this.state.bottomSelectedDropDownValueState === 'fahrenheit') {
                this.setState({resultBoxTwoState: inputValue});
                this.setState({resultBoxOneState: conversionResult});

            } else {
                this.setState({resultBoxOneState: inputValue});
                this.setState({resultBoxTwoState: conversionResult});
            }  
            console.log('f to c result: ' + conversionResult);
        }


        if (this.state.topSelectedDropDownValueState === this.state.bottomSelectedDropDownValueState) {
            this.setState({resultBoxOneState: inputValue})
            this.setState({resultBoxTwoState: inputValue})
        }
    }



    unitDropDownValueHandler = (event) => {

        topSelectedDropDownValue = event.target.value;
        bottomSelectedDropDownValue = event.target.value;

         if (event.target.id === 'drop-down-1') {
            this.setState({topSelectedDropDownValueState: topSelectedDropDownValue})
            console.log('Selected: ' + topSelectedDropDownValue + ' in Box 1');

                if (topSelectedDropDownValue === 'celsius' && this.state.bottomSelectedDropDownValueState === 'fahrenheit') {
                    this.setState({resultBoxOneState: Number((this.state.resultBoxTwoState - 32) * 5/9).toFixed(1)});
                }

                else if (topSelectedDropDownValue === 'fahrenheit' && this.state.bottomSelectedDropDownValueState === 'celsius') {
                    this.setState({resultBoxOneState: Number((this.state.resultBoxTwoState * 9/5) + 32).toFixed(1)});           
                }

                else {
                    this.setState({resultBoxOneState: this.state.resultBoxTwoState})
                }
        }
        

        if (event.target.id === 'drop-down-2') {
            this.setState({bottomSelectedDropDownValueState: bottomSelectedDropDownValue})
            console.log('Selected: ' + bottomSelectedDropDownValue + ' in Box 2');

                if (bottomSelectedDropDownValue === 'fahrenheit' && this.state.topSelectedDropDownValueState === 'celsius') {
                    this.setState({resultBoxTwoState: Number((this.state.resultBoxOneState * 9/5) + 32).toFixed(1)});
                }

                else if (bottomSelectedDropDownValue === 'celsius' && this.state.topSelectedDropDownValueState === 'fahrenheit') {
                    this.setState({resultBoxTwoState: Number((this.state.resultBoxOneState - 32) * 5/9).toFixed(1)});
                }

                else {
                    this.setState({resultBoxTwoState: this.state.resultBoxOneState})
                }
        }  

    }


    
    
    render() {

        capitalizedTopPlaceholder = this.state.topSelectedDropDownValueState.charAt(0).toUpperCase() + this.state.topSelectedDropDownValueState.slice(1);
        capitalizedBottomPlaceholder = this.state.bottomSelectedDropDownValueState.charAt(0).toUpperCase() + this.state.bottomSelectedDropDownValueState.slice(1)

        resultBox1 = (
            <ResultBox
                inputHandler={this.temperatureConversionHandler}
                conversionValue={this.state.resultBoxOneState}
                customID={'result-box-' + this.state.topSelectedDropDownValueState}
                customPlaceholder={'Enter a ' + capitalizedTopPlaceholder + ' Value'}
            /> 
        );

        resultBox2 = (
            <ResultBox
                inputHandler={this.temperatureConversionHandler}
                conversionValue={this.state.resultBoxTwoState}
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