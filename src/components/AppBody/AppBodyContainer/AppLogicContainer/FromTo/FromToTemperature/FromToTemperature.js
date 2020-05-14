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


let resultBox1 = '';
let resultBox2 = '';
let resultBoxName = '';
let resultBoxId = '';
let unitDropDownValue = '';
let inputValue = '';
let conversionResult = '';

var convert = require('convert-units')




class FromToTemperature extends Component {

    state = {
        resultBoxOneState: '',
        resultBoxTwoState: '',
        topSelectedDropDownValue: 'celsius',
        bottomSelectedDropDownValue: 'fahrenheit',
    }

    
    temperatureConversionHandler = (event) => {

        inputValue = event.target.value;
        resultBoxName = event.target.name;
        resultBoxId = event.target.id;

        
        if (resultBoxId === 'result-box-celsius') {
            console.log('c to f handler fired')
            console.log('c to f input: ' + inputValue);
            conversionResult = convert(inputValue).from('C').to('F');

            if (this.state.bottomSelectedDropDownValue === 'fahrenheit') {
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
            conversionResult = convert(inputValue).from('F').to('C');

            if (this.state.bottomSelectedDropDownValue === 'fahrenheit') {
                this.setState({resultBoxTwoState: inputValue});
                this.setState({resultBoxOneState: conversionResult});

            } else {
                this.setState({resultBoxOneState: inputValue});
                this.setState({resultBoxTwoState: conversionResult});
            }
            
            console.log('f to c result: ' + conversionResult);
        }


        if (this.state.topSelectedDropDownValue === this.state.bottomSelectedDropDownValue) {
            this.setState({resultBoxOneState: inputValue})
            this.setState({resultBoxTwoState: inputValue})
        }

    }


    unitDropDownValueHandler = (event) => {

        unitDropDownValue = event.target.value;


        this.setState({resultBoxOneState: ''})
        this.setState({resultBoxTwoState: ''})

         // TOP DROP-DOWN
         if (event.target.id === 'drop-down-1') {
            this.setState({topSelectedDropDownValue: unitDropDownValue})
            console.log('Selected: ' + unitDropDownValue + ' in Box 1');
        }
        
        // BOTTOM DROP-DOWN
        if (event.target.id === 'drop-down-2') {
            this.setState({bottomSelectedDropDownValue: unitDropDownValue})
            console.log('Selected: ' + unitDropDownValue + ' in Box 2');
        }
    }

    
    
    render() {

        resultBox1 = (
            <ResultBox
                inputHandler={this.temperatureConversionHandler}
                conversionValue={this.state.resultBoxOneState}
                customID={'result-box-' + this.state.topSelectedDropDownValue}
                //customName={'result-box-' + this.state.topSelectedDropDownValue}
                customPlaceholder={'Enter a ' + this.state.topSelectedDropDownValue + ' Value'}
            /> 
        );

        resultBox2 = (
            <ResultBox
                inputHandler={this.temperatureConversionHandler}
                conversionValue={this.state.resultBoxTwoState}
                customID={'result-box-' + this.state.bottomSelectedDropDownValue}
                //customName={'result-box-' + this.state.bottomSelectedDropDownValue}
                customPlaceholder={'Enter a ' + this.state.bottomSelectedDropDownValue + ' Value'}
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