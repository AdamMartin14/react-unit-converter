// CLASS-BASED COMPONENT - STATE MANAGEMENT (STATEFUL COMPONENT)
import React, {Component} from 'react';
import DropDownMenuSelect from '../../../../../UI/DropDownMenu/DropDownMenuSelect/DropDownMenuSelect';
import DropDownMenuOptions from '../../../../../UI/DropDownMenu/DropDownMenuOptions/DropDownMenuOptions';
import ResultBox from '../../../../ResultBox/ResultBox';
import PageTertiaryHeading from '../../../../PageTertiaryHeading/PageTertiaryHeading';
import classes from '../../FromTo/FromTo.css';


const lengthMeasurementUnits = [
    { value: 'millimeter', label: 'Millimeter' },
    { value: 'centimeter', label: 'Centimeter' },
    { value: 'inch', label: 'Inch' },
    { value: 'meter', label: 'Meter' },
    { value: 'foot', label: 'Foot' },
    { value: 'mile', label: 'Mile' },
 ];

const lengthMeasurementUnitsArray = lengthMeasurementUnits.map(ctrl => (
    <option value={ctrl.value}>{ctrl.label}</option>
));

let resultBox1 = '';
let resultBox2 = '';
let resultBoxId = '';
let unitDropDownValue = '';
let inputValue = '';
let conversionResult = '';



var convert = require('convert-units')




class FromToLength extends Component {

    state = { 
        resultBoxOneState: '',
        resultBoxTwoState: '',
        topSelectedDropDownValue: 'millimeter',
        bottomSelectedDropDownValue: 'centimeter'
    }


    millimeterConversionHandler = (event) => {

        inputValue = event.target.value;
        resultBoxId = event.target.id;

        // MM to MM
        if (resultBoxId === 'result-box-1' || resultBoxId === 'result-box-2') {
            this.setState({resultBoxOneState: inputValue})
            this.setState({resultBoxTwoState: inputValue})
        }

        // MM to CM
        if (resultBoxId === 'result-box-1' && this.state.bottomSelectedDropDownValue === 'centimeter') {
            this.setState({resultBoxOneState: inputValue})

            conversionResult = convert(inputValue).from('mm').to('cm');
            this.setState({resultBoxTwoState: conversionResult});
        }

        if (resultBoxId === 'result-box-2' && this.state.topSelectedDropDownValue === 'centimeter') {
            this.setState({resultBoxTwoState: inputValue})

            conversionResult = convert(inputValue).from('mm').to('cm');
            this.setState({resultBoxOneState: conversionResult});
        }

        // MM to IN
        if (resultBoxId === 'result-box-1' && this.state.bottomSelectedDropDownValue === 'inch') {
            this.setState({resultBoxOneState: inputValue})

            conversionResult = convert(inputValue).from('mm').to('in');
            this.setState({resultBoxTwoState: conversionResult});
        }

        if (resultBoxId === 'result-box-2' && this.state.topSelectedDropDownValue === 'inch') {
            this.setState({resultBoxTwoState: inputValue})

            conversionResult = convert(inputValue).from('mm').to('in');
            this.setState({resultBoxOneState: conversionResult});
        }

        // MM to M
        if (resultBoxId === 'result-box-1' && this.state.bottomSelectedDropDownValue === 'meter') {
            this.setState({resultBoxOneState: inputValue})

            conversionResult = convert(inputValue).from('mm').to('m');
            this.setState({resultBoxTwoState: conversionResult});
        }

        if (resultBoxId === 'result-box-2' && this.state.topSelectedDropDownValue === 'meter') {
            this.setState({resultBoxTwoState: inputValue})

            conversionResult = convert(inputValue).from('mm').to('m');
            this.setState({resultBoxOneState: conversionResult});
        }

        // MM to F
        if (resultBoxId === 'result-box-1' && this.state.bottomSelectedDropDownValue === 'foot') {
            this.setState({resultBoxOneState: inputValue})

            conversionResult = convert(inputValue).from('mm').to('ft');
            this.setState({resultBoxTwoState: conversionResult});
        }

        if (resultBoxId === 'result-box-2' && this.state.topSelectedDropDownValue === 'foot') {
            this.setState({resultBoxTwoState: inputValue})

            conversionResult = convert(inputValue).from('mm').to('ft');
            this.setState({resultBoxOneState: conversionResult});
        }

        // MM to MI
        if (resultBoxId === 'result-box-1' && this.state.bottomSelectedDropDownValue === 'mile') {
            this.setState({resultBoxOneState: inputValue})

            conversionResult = convert(inputValue).from('mm').to('mi');
            this.setState({resultBoxTwoState: conversionResult});
        }

        if (resultBoxId === 'result-box-2' && this.state.topSelectedDropDownValue === 'mile') {
            this.setState({resultBoxTwoState: inputValue})

            conversionResult = convert(inputValue).from('mm').to('mi');
            this.setState({resultBoxOneState: conversionResult});
        }

    }


    centimeterConversionHandler = (event) => {

    }



    unitDropDownValueHandler = (event) => {

        unitDropDownValue = event.target.value;

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
                inputHandler={this.millimeterConversionHandler}
                conversionValue={this.state.resultBoxOneState}
                customID={'result-box-1'}
                customPlaceholder={'Enter a ' + this.state.topSelectedDropDownValue + ' Value'}
            /> 
        );
                
        resultBox2 = (
            <ResultBox
                inputHandler={this.millimeterConversionHandler}
                conversionValue={this.state.resultBoxTwoState}
                customID={'result-box-2'}
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
                        dropDownListOptions={lengthMeasurementUnitsArray}
                    />
                </DropDownMenuSelect>

                {resultBox1}


                <PageTertiaryHeading headingText={'To:'} />

                <DropDownMenuSelect
                    changed={this.unitDropDownValueHandler}
                    defaultValue={lengthMeasurementUnitsArray[1].props.value}
                    id={'drop-down-2'}
                >

                    <DropDownMenuOptions 
                        dropDownListOptions={lengthMeasurementUnitsArray}
                    />
                </DropDownMenuSelect>
                
                {resultBox2}

            </div>
        )
    }
};


export default FromToLength;