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
    { value: 'yard', label: 'Yard' },
    { value: 'foot', label: 'Foot' },
    { value: 'kilometer', label: 'Kilometer' },
    { value: 'mile', label: 'Mile' },
 ];

const lengthMeasurementUnitsArray = lengthMeasurementUnits.map(ctrl => (
    <option value={ctrl.value}>{ctrl.label}</option>
));

let resultBox1 = '';
let resultBox2 = '';
let inputValue = '';


var convert = require('convert-units')




class FromToLength extends Component {

    state = { 
        millimeterToCentimeter: '',
        centimeterToMillimeter: '',
        topSelectedDropDownValue: 'millimeter',
        bottomSelectedDropDownValue: 'centimeter'
    }


    /* HANDLERS FOR THE CONVERSION OF EACH VALUE TO EACH VALUE 
    (E.G. MM > OTHER VALUES, CM > OTHER VALUES) */

    millimeterConversionHandler = (event) => {

        // MM to CM
        if (event.target.id === 'result-box-1') {
            inputValue = event.target.value;
            this.setState({centimeterToMillimeter: inputValue})

            let millimeterToCentimeterResult = convert(inputValue).from('mm').to('cm');
            this.setState({millimeterToCentimeter: millimeterToCentimeterResult});
        }

        // CM to MM
        if (event.target.id === 'result-box-2') {
            inputValue = event.target.value;
            this.setState({millimeterToCentimeter: inputValue})

            let centimeterToMillimeterResult = convert(inputValue).from('cm').to('mm');
            this.setState({centimeterToMillimeter: centimeterToMillimeterResult});
        }

    }

    centimeterConversionHandler = (event) => {

    }


    unitDropDownValueHandler = (event) => {

        // TOP DROP-DOWN
        if (event.target.id === 'drop-down-1' && event.target.value === 'centimeter') {
            this.setState({topSelectedDropDownValue: 'centimeter'})
            console.log('Selected: Centimeter in Box 1');
        }
        
        if (event.target.id === 'drop-down-1' && event.target.value === 'millimeter') {
            this.setState({topSelectedDropDownValue: 'millimeter'})
            console.log('Selected: Millimeter in Box 1');
        }
        
        if (event.target.id === 'drop-down-1' && event.target.value === 'inch') {
            this.setState({topSelectedDropDownValue: 'inch'})
            console.log('Selected: Inch in Box 1');
        }
        
        if (event.target.id === 'drop-down-1' && event.target.value === 'meter') {
            this.setState({topSelectedDropDownValue: 'meter'})
            console.log('Selected: Meter in Box 1');
        }
        
        if (event.target.id === 'drop-down-1' && event.target.value === 'yard') {
            this.setState({topSelectedDropDownValue: 'yard'})
            console.log('Selected: Yard in Box 1');
        }
        
        if (event.target.id === 'drop-down-1' && event.target.value === 'foot') {
            this.setState({topSelectedDropDownValue: 'foot'})
            console.log('Selected: Foot in Box 1');
        }
        
        if (event.target.id === 'drop-down-1' && event.target.value === 'kilometer') {
            this.setState({topSelectedDropDownValue: 'kilometer'})
            console.log('Selected: Kilometer in Box 1');
        }

        if (event.target.id === 'drop-down-1' && event.target.value === 'mile') {
            this.setState({topSelectedDropDownValue: 'mile'})
            console.log('Selected: Mile in Box 1');
        }


        // BOTTOM DROP-DOWN
        if (event.target.id === 'drop-down-2' && event.target.value === 'millimeter') {
            this.setState({bottomSelectedDropDownValue: 'millimeter'})
            console.log('Selected: Millimeter in Box 2');
        }

        if (event.target.id === 'drop-down-2' && event.target.value === 'centimeter') {
            this.setState({bottomSelectedDropDownValue: 'centimeter'})
            console.log('Selected: Centimeter in Box 2');
        }

        if (event.target.id === 'drop-down-2' && event.target.value === 'inch') {
            this.setState({bottomSelectedDropDownValue: 'inch'})
            console.log('Selected: Inch in Box 2');
        }
        
        if (event.target.id === 'drop-down-2' && event.target.value === 'meter') {
            this.setState({bottomSelectedDropDownValue: 'meter'})
            console.log('Selected: Meter in Box 2');
        }
        
        if (event.target.id === 'drop-down-2' && event.target.value === 'yard') {
            this.setState({bottomSelectedDropDownValue: 'yard'})
            console.log('Selected: Yard in Box 2');
        }
        
        if (event.target.id === 'drop-down-2' && event.target.value === 'foot') {
            this.setState({bottomSelectedDropDownValue: 'foot'})
            console.log('Selected: Foot in Box 2');
        }
        
        if (event.target.id === 'drop-down-2' && event.target.value === 'kilometer') {
            this.setState({bottomSelectedDropDownValue: 'kilometer'})
            console.log('Selected: Kilometer in Box 2');
        }

        if (event.target.id === 'drop-down-2' && event.target.value === 'mile') {
            this.setState({bottomSelectedDropDownValue: 'mile'})
            console.log('Selected: Mile in Box 2');
        }
        
    }



    
    render() {

        // TOP RESULT BOX
        switch (this.state.topSelectedDropDownValue) {

            case('millimeter'):
                resultBox1 = (
                    <ResultBox
                        inputHandler={this.millimeterConversionHandler}
                        conversionValue={this.state.centimeterToMillimeter}
                        customID={'result-box-1'}
                        customPlaceholder={"Enter a Millimeter Value"}
                    /> 
                );   
                break;

            case('centimeter'):
                resultBox1 = (
                    <ResultBox
                        //inputHandler={this.millimeterConversionHandler}
                        //conversionValue={this.state.centimeterToMillimeter}
                        //customID={'result-box-1'}
                        customPlaceholder={"Enter a Centimeter Value"}
                    /> 
                );
                break;

            case('inch'):
                resultBox1 = (
                    <ResultBox
                        //inputHandler={this.millimeterConversionHandler}
                        //conversionValue={this.state.centimeterToMillimeter}
                        //customID={'result-box-1'}
                        customPlaceholder={"Enter a Inch Value"}
                    /> 
                );
                break;

            case('meter'):
                resultBox1 = (
                    <ResultBox
                        //inputHandler={this.millimeterConversionHandler}
                        //conversionValue={this.state.centimeterToMillimeter}
                        //customID={'result-box-1'}
                        customPlaceholder={"Enter a Meter Value"}
                    /> 
                );
                break;

            case('yard'):
                resultBox1 = (
                    <ResultBox
                        //inputHandler={this.millimeterConversionHandler}
                        //conversionValue={this.state.centimeterToMillimeter}
                        //customID={'result-box-1'}
                        customPlaceholder={"Enter a Yard Value"}
                    /> 
                ); 
                break;

            case('foot'):
                resultBox1 = (
                    <ResultBox
                        //inputHandler={this.millimeterConversionHandler}
                        //conversionValue={this.state.centimeterToMillimeter}
                        //customID={'result-box-1'}
                        customPlaceholder={"Enter a Foot Value"}
                    /> 
                );
                break;

            case('kilometer'):
                resultBox1 = (
                    <ResultBox
                        //inputHandler={this.millimeterConversionHandler}
                        //conversionValue={this.state.centimeterToMillimeter}
                        //customID={'result-box-1'}
                        customPlaceholder={"Enter a Kilometer Value"}
                    /> 
                ); 
                break;

            case('mile'):
                resultBox1 = (
                    <ResultBox
                        //inputHandler={this.millimeterConversionHandler}
                        //conversionValue={this.state.centimeterToMillimeter}
                        //customID={'result-box-1'}
                        customPlaceholder={"Enter a Mile Value"}
                    /> 
                );     
                break;
        }


        // BOTTOM RESULT BOX
        switch (this.state.bottomSelectedDropDownValue) {

            case('millimeter'):
                resultBox2 = (
                    <ResultBox
                        //inputHandler={this.millimeterConversionHandler}
                        //conversionValue={this.state.centimeterToMillimeter}
                        //customID={'result-box-1'}
                        customPlaceholder={"Enter a Millimeter Value"}
                    /> 
                );
                break;

            case('centimeter'):
                resultBox2 = (
                    <ResultBox
                        inputHandler={this.millimeterConversionHandler}
                        conversionValue={this.state.millimeterToCentimeter}
                        customID={'result-box-2'}
                        customPlaceholder={"Enter a Centimeter Value"}
                    /> 
                );
                break;

            case('inch'):
                resultBox2 = (
                    <ResultBox
                        //inputHandler={this.millimeterConversionHandler}
                        //conversionValue={this.state.centimeterToMillimeter}
                        //customID={'result-box-1'}
                        customPlaceholder={"Enter a Inch Value"}
                    /> 
                );
                break;

            case('meter'):
                resultBox2 = (
                    <ResultBox
                        //inputHandler={this.millimeterConversionHandler}
                        //conversionValue={this.state.centimeterToMillimeter}
                        //customID={'result-box-1'}
                        customPlaceholder={"Enter a Meter Value"}
                    /> 
                );
                break;

            case('yard'):
                resultBox2 = (
                    <ResultBox
                        //inputHandler={this.millimeterConversionHandler}
                        //conversionValue={this.state.centimeterToMillimeter}
                        //customID={'result-box-1'}
                        customPlaceholder={"Enter a Yard Value"}
                    /> 
                ); 
                break;

            case('foot'):
                resultBox2 = (
                    <ResultBox
                        //inputHandler={this.millimeterConversionHandler}
                        //conversionValue={this.state.centimeterToMillimeter}
                        //customID={'result-box-1'}
                        customPlaceholder={"Enter a Foot Value"}
                    /> 
                );
                break;

            case('kilometer'):
                resultBox2 = (
                    <ResultBox
                        //inputHandler={this.millimeterConversionHandler}
                        //conversionValue={this.state.centimeterToMillimeter}
                        //customID={'result-box-1'}
                        customPlaceholder={"Enter a Kilometer Value"}
                    /> 
                ); 
                break;

            case('mile'):
                resultBox2 = (
                    <ResultBox
                        //inputHandler={this.millimeterConversionHandler}
                        //conversionValue={this.state.centimeterToMillimeter}
                        //customID={'result-box-1'}
                        customPlaceholder={"Enter a Mile Value"}
                    /> 
                );     
                break;
        }


        
        

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