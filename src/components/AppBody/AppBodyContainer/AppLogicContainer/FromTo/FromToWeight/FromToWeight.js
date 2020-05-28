// CLASS-BASED COMPONENT - STATE MANAGEMENT (STATEFUL COMPONENT)
import React, {Component} from 'react';
import DropDownMenuSelect from '../../../../../UI/DropDownMenu/DropDownMenuSelect/DropDownMenuSelect';
import DropDownMenuOptions from '../../../../../UI/DropDownMenu/DropDownMenuOptions/DropDownMenuOptions';
import ResultBox from '../../../../ResultBox/ResultBox';
import PageTertiaryHeading from '../../../../PageTertiaryHeading/PageTertiaryHeading';
import classes from '../../FromTo/FromTo.css';

var convert = require('convert-units');


const weightMeasurementUnits = [
    { value: 'milligram', label: 'Milligram' },
    { value: 'gram', label: 'Gram' },
    { value: 'kilogram', label: 'Kilogram' },
    { value: 'ounce', label: 'Ounce' },
    { value: 'pound', label: 'Pound' },
    { value: 'ton', label: 'US Ton' },
 ];

const weightMeasurementUnitsArray = weightMeasurementUnits.map(ctrl => (
    <option value={ctrl.value} key={ctrl.value}>{ctrl.label}</option>
));

let resultBox1 = '';
let resultBox2 = '';
let resultBoxId = '';
let unitDropDownId = '';
let topSelectedUnitDropDownValue = '';
let bottomSelectedUnitDropDownValue = '';
let inputValue = '';
let milligramToGramConversion = '';
let milligramToKilogramConversion = '';
let milligramToOunceConversion = '';
let milligramToPoundConversion = '';
let milligramToTonConversion = '';
let gramToMilligramConversion = '';
let gramToKilogramConversion = '';
let gramToOunceConversion = '';
let gramToPoundConversion = '';
let gramToTonConversion = '';
let kilogramToGramConversion = '';
let kilogramToMilligramConversion = '';
let kilogramToOunceConversion = '';
let kilogramToPoundConversion = '';
let kilogramToTonConversion = '';
let ounceToKilogramConversion = '';
let ounceToGramConversion = '';
let ounceToMilligramConversion = '';
let ounceToPoundConversion = '';
let ounceToTonConversion = '';
let poundToOunceConversion = '';
let poundToKilogramConversion = '';
let poundToGramConversion = '';
let poundToMilligramConversion = '';
let poundToTonConversion = '';
let tonToPoundConversion = '';
let tonToOunceConversion = '';
let tonToKilogramConversion = '';
let tonToGramConversion = '';
let tonToMilligramConversion = '';
let conversionResult = '';
let capitalizedTopPlaceholder = '';
let capitalizedBottomPlaceholder = '';



class FromToWeight extends Component {

    state = { 
        resultBoxOneValueState: '',
        resultBoxTwoValueState: '',
        topSelectedDropDownValueState: 'milligram',
        bottomSelectedDropDownValueState: 'gram'
    }


    weightConversionHandler = (event) => {

        inputValue = event.target.value;
        resultBoxId = event.target.id;

        milligramToGramConversion = convert(inputValue).from('mg').to('g').toFixed(1);
        milligramToKilogramConversion = convert(inputValue).from('mg').to('kg').toFixed(1);
        milligramToOunceConversion = convert(inputValue).from('mg').to('oz').toFixed(1);
        milligramToPoundConversion = convert(inputValue).from('mg').to('lb').toFixed(1);
        milligramToTonConversion = convert(inputValue).from('mg').to('t').toFixed(1);

        gramToMilligramConversion = convert(inputValue).from('g').to('mg').toFixed(1);
        gramToKilogramConversion = convert(inputValue).from('g').to('kg').toFixed(1);
        gramToOunceConversion = convert(inputValue).from('g').to('oz').toFixed(1);
        gramToPoundConversion = convert(inputValue).from('g').to('lb').toFixed(1);
        gramToTonConversion = convert(inputValue).from('g').to('t').toFixed(1);

        kilogramToGramConversion = convert(inputValue).from('kg').to('g').toFixed(1);
        kilogramToMilligramConversion = convert(inputValue).from('kg').to('mg').toFixed(1);
        kilogramToOunceConversion = convert(inputValue).from('kg').to('oz').toFixed(1);
        kilogramToPoundConversion = convert(inputValue).from('kg').to('lb').toFixed(1);
        kilogramToTonConversion = convert(inputValue).from('kg').to('t').toFixed(1);

        ounceToKilogramConversion = convert(inputValue).from('oz').to('kg').toFixed(1);
        ounceToGramConversion = convert(inputValue).from('oz').to('g').toFixed(1);
        ounceToMilligramConversion = convert(inputValue).from('oz').to('mg').toFixed(1);
        ounceToPoundConversion = convert(inputValue).from('oz').to('lb').toFixed(1);
        ounceToTonConversion = convert(inputValue).from('oz').to('t').toFixed(1);

        poundToOunceConversion = convert(inputValue).from('lb').to('oz').toFixed(1);
        poundToKilogramConversion = convert(inputValue).from('lb').to('kg').toFixed(1);
        poundToGramConversion = convert(inputValue).from('lb').to('g').toFixed(1);
        poundToMilligramConversion = convert(inputValue).from('lb').to('mg').toFixed(1);
        poundToTonConversion = convert(inputValue).from('lb').to('t').toFixed(1);

        tonToPoundConversion = convert(inputValue).from('t').to('lb').toFixed(1);
        tonToOunceConversion = convert(inputValue).from('t').to('oz').toFixed(1);
        tonToKilogramConversion = convert(inputValue).from('t').to('kg').toFixed(1);
        tonToGramConversion = convert(inputValue).from('t').to('g').toFixed(1);
        tonToMilligramConversion = convert(inputValue).from('t').to('mg').toFixed(1);
        

        if (this.state.topSelectedDropDownValueState === this.state.bottomSelectedDropDownValueState) {
            this.setState({resultBoxOneValueState: inputValue})
            this.setState({resultBoxTwoValueState: inputValue})
        }

        if (resultBoxId === 'result-box-milligram') {

            // TOP MG TO BOTTOM G/ BOTTOM MG TO TOP G
            if (this.state.topSelectedDropDownValueState === 'gram' || this.state.bottomSelectedDropDownValueState === 'gram') {

                conversionResult = milligramToGramConversion;

                if (this.state.topSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
        
            // TOP MG TO BOTTOM KG/ BOTTOM MG TO TOP KG
            if (this.state.topSelectedDropDownValueState === 'kilogram' || this.state.bottomSelectedDropDownValueState === 'kilogram') {

                conversionResult = milligramToKilogramConversion;

                if (this.state.topSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP MG TO BOTTOM OZ/ BOTTOM MG TO TOP OZ
            if (this.state.topSelectedDropDownValueState === 'ounce' || this.state.bottomSelectedDropDownValueState === 'ounce') {

                conversionResult = milligramToOunceConversion;

                if (this.state.topSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP MG TO BOTTOM LB/ BOTTOM MG TO TOP LB
            if (this.state.topSelectedDropDownValueState === 'pound' || this.state.bottomSelectedDropDownValueState === 'pound') {

                conversionResult = milligramToPoundConversion;

                if (this.state.topSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP MG TO BOTTOM T/ BOTTOM MG TO TOP T
            if (this.state.topSelectedDropDownValueState === 'ton' || this.state.bottomSelectedDropDownValueState === 'ton') {

                conversionResult = milligramToTonConversion;

                if (this.state.topSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
        }


        if (resultBoxId === 'result-box-gram') {

            // TOP G TO BOTTOM MG/ BOTTOM G TO TOP MG
            if (this.state.topSelectedDropDownValueState === 'milligram' || this.state.bottomSelectedDropDownValueState === 'milligram') {

                conversionResult = gramToMilligramConversion;

                if (this.state.topSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP G TO BOTTOM KG/ BOTTOM G TO TOP KG
            if (this.state.topSelectedDropDownValueState === 'kilogram' || this.state.bottomSelectedDropDownValueState === 'kilogram') {

                conversionResult = gramToKilogramConversion;

                if (this.state.topSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP G TO BOTTOM OZ/ BOTTOM G TO TOP OZ
            if (this.state.topSelectedDropDownValueState === 'ounce' || this.state.bottomSelectedDropDownValueState === 'ounce') {

                conversionResult = gramToOunceConversion;

                if (this.state.topSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP G TO BOTTOM LB/ BOTTOM G TO TOP LB
            if (this.state.topSelectedDropDownValueState === 'pound' || this.state.bottomSelectedDropDownValueState === 'pound') {

                conversionResult = gramToPoundConversion;

                if (this.state.topSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP G TO BOTTOM T/ BOTTOM G TO TOP T
            if (this.state.topSelectedDropDownValueState === 'ton' || this.state.bottomSelectedDropDownValueState === 'ton') {

                conversionResult = gramToTonConversion;

                if (this.state.topSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
        }


        if (resultBoxId === 'result-box-kilogram') {

            // TOP KG TO BOTTOM G/ BOTTOM KG TO TOP G
            if (this.state.topSelectedDropDownValueState === 'gram' || this.state.bottomSelectedDropDownValueState === 'gram') {

                conversionResult = kilogramToGramConversion;

                if (this.state.topSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP KG TO BOTTOM MG/ BOTTOM KG TO TOP MG
            if (this.state.topSelectedDropDownValueState === 'milligram' || this.state.bottomSelectedDropDownValueState === 'milligram') {

                conversionResult = kilogramToMilligramConversion;

                if (this.state.topSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP KG TO BOTTOM OZ/ BOTTOM KG TO TOP OZ
            if (this.state.topSelectedDropDownValueState === 'ounce' || this.state.bottomSelectedDropDownValueState === 'ounce') {

                conversionResult = kilogramToOunceConversion;

                if (this.state.topSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP KG TO BOTTOM LB/ BOTTOM KG TO TOP LB
            if (this.state.topSelectedDropDownValueState === 'pound' || this.state.bottomSelectedDropDownValueState === 'pound') {

                conversionResult = kilogramToPoundConversion;

                if (this.state.topSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP KG TO BOTTOM T/ BOTTOM KG TO TOP T
            if (this.state.topSelectedDropDownValueState === 'ton' || this.state.bottomSelectedDropDownValueState === 'ton') {

                conversionResult = kilogramToTonConversion;

                if (this.state.topSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
        }


        if (resultBoxId === 'result-box-ounce') {

            // TOP OZ TO BOTTOM KG/ BOTTOM OZ TO TOP KG
            if (this.state.topSelectedDropDownValueState === 'kilogram' || this.state.bottomSelectedDropDownValueState === 'kilogram') {

                conversionResult = ounceToKilogramConversion;

                if (this.state.topSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP OZ TO BOTTOM G/ BOTTOM OZ TO TOP G
            if (this.state.topSelectedDropDownValueState === 'gram' || this.state.bottomSelectedDropDownValueState === 'gram') {

                conversionResult = ounceToGramConversion;

                if (this.state.topSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP OZ TO BOTTOM MG/ BOTTOM OZ TO TOP MG
            if (this.state.topSelectedDropDownValueState === 'milligram' || this.state.bottomSelectedDropDownValueState === 'milligram') {

                conversionResult = ounceToMilligramConversion;

                if (this.state.topSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP OZ TO BOTTOM LB/ BOTTOM OZ TO TOP LB
            if (this.state.topSelectedDropDownValueState === 'pound' || this.state.bottomSelectedDropDownValueState === 'pound') {

                conversionResult = ounceToPoundConversion;

                if (this.state.topSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
            
            // TOP OZ TO BOTTOM T/ BOTTOM OZ TO TOP T
            if (this.state.topSelectedDropDownValueState === 'ton' || this.state.bottomSelectedDropDownValueState === 'ton') {

                conversionResult = ounceToTonConversion;

                if (this.state.topSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
        }


        if (resultBoxId === 'result-box-pound') {

            // TOP LB TO BOTTOM OZ/ BOTTOM LB TO TOP OZ
            if (this.state.topSelectedDropDownValueState === 'ounce' || this.state.bottomSelectedDropDownValueState === 'ounce') {

                conversionResult = poundToOunceConversion

                if (this.state.topSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            // TOP LB TO BOTTOM KG/ BOTTOM LB TO TOP KG
            if (this.state.topSelectedDropDownValueState === 'kilogram' || this.state.bottomSelectedDropDownValueState === 'kilogram') {

                conversionResult = poundToKilogramConversion;

                if (this.state.topSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            // TOP LB TO BOTTOM G/ BOTTOM LB TO TOP G
            if (this.state.topSelectedDropDownValueState === 'gram' || this.state.bottomSelectedDropDownValueState === 'gram') {

                conversionResult = poundToGramConversion;

                if (this.state.topSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            // TOP LB TO BOTTOM MG/ BOTTOM LB TO TOP MG
            if (this.state.topSelectedDropDownValueState === 'milligram' || this.state.bottomSelectedDropDownValueState === 'milligram') {

                conversionResult = poundToMilligramConversion;

                if (this.state.topSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            // TOP LB TO BOTTOM T/ BOTTOM LB TO TOP T
            if (this.state.topSelectedDropDownValueState === 'ton' || this.state.bottomSelectedDropDownValueState === 'ton') {

                conversionResult = poundToTonConversion;

                if (this.state.topSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }          
        }


        if (resultBoxId === 'result-box-ton') {

            // TOP T TO BOTTOM LB/ BOTTOM T TO TOP LB
            if (this.state.topSelectedDropDownValueState === 'pound' || this.state.bottomSelectedDropDownValueState === 'pound') {

                conversionResult = tonToPoundConversion;

                if (this.state.topSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            // TOP T TO BOTTOM OZ/ BOTTOM T TO TOP OZ
            if (this.state.topSelectedDropDownValueState === 'ounce' || this.state.bottomSelectedDropDownValueState === 'ounce') {

                conversionResult = tonToOunceConversion;

                if (this.state.topSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            // TOP T TO BOTTOM KG/ BOTTOM T TO TOP KG
            if (this.state.topSelectedDropDownValueState === 'kilogram' || this.state.bottomSelectedDropDownValueState === 'kilogram') {

                conversionResult = tonToKilogramConversion;

                if (this.state.topSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            // TOP T TO BOTTOM G/ BOTTOM T TO TOP G
            if (this.state.topSelectedDropDownValueState === 'gram' || this.state.bottomSelectedDropDownValueState === 'gram') {

                conversionResult = tonToGramConversion;

                if (this.state.topSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            // TOP T TO BOTTOM MG/ BOTTOM T TO TOP MG
            if (this.state.topSelectedDropDownValueState === 'milligram' || this.state.bottomSelectedDropDownValueState === 'milligram') {

                conversionResult = tonToMilligramConversion;

                if (this.state.topSelectedDropDownValueState === 'ton') {
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

        // TOP DROP-DOWN
        if (unitDropDownId === 'drop-down-1') {
            this.setState({topSelectedDropDownValueState: topSelectedUnitDropDownValue})
            console.log('Selected: ' + topSelectedUnitDropDownValue + ' in Box 1');

            if (topSelectedUnitDropDownValue === this.state.bottomSelectedDropDownValueState) {
                this.setState({resultBoxOneValueState: this.state.resultBoxTwoValueState})
            }

            if (topSelectedUnitDropDownValue === 'milligram') {

                if (this.state.bottomSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1000)).toFixed(1)});
                }

                if (this.state.bottomSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1e+6)).toFixed(1)});
                }

                if (this.state.bottomSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 28350)).toFixed(1)});                    
                }

                if (this.state.bottomSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 453592)).toFixed(1)});                         
                }

                if (this.state.bottomSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 9.072e+8))});                                             
                }
            }

            if (topSelectedUnitDropDownValue === 'gram') {

                if (this.state.bottomSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1000)).toFixed(1)});
                }

                if (this.state.bottomSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1000)).toFixed(1)});
                }

                if (this.state.bottomSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 28.35)).toFixed(1)});                                        
                }

                if (this.state.bottomSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 454)).toFixed(1)});                                             
                }

                if (this.state.bottomSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1e+6))});                                                                 
                }
            }

            if (topSelectedUnitDropDownValue === 'kilogram') {

                if (this.state.bottomSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1000)).toFixed(1)});                                                                                     
                }

                if (this.state.bottomSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1e+6)).toFixed(1)});                                                                 
                }

                if (this.state.bottomSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 35.274)).toFixed(1)});                                                                                     
                }

                if (this.state.bottomSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 2.205)).toFixed(1)});                                                                                                         
                }

                if (this.state.bottomSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1000))});                                                                                                                             
                }
            }

            if (topSelectedUnitDropDownValue === 'ounce') {

                if (this.state.bottomSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 35.274)).toFixed(1)});                                                                                                                                                 
                }

                if (this.state.bottomSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 28.35)).toFixed(1)});                                                                                                                                                 
                }

                if (this.state.bottomSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 28350)).toFixed(1)});                                                                                                                                                                     
                }

                if (this.state.bottomSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 16)).toFixed(1)});                                                                                                                                                                       
                }

                if (this.state.bottomSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 32000))});                                                                                                                                                                                           
                }
            }

            if (topSelectedUnitDropDownValue === 'pound') {

                if (this.state.bottomSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 16)).toFixed(1)});                                                                                                                                                                                                               
                }

                if (this.state.bottomSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 2.205)).toFixed(1)});                                                                                                                                                                                           
                }

                if (this.state.bottomSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 454)).toFixed(1)});                                                                                                                                                                                                               
                }

                if (this.state.bottomSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 453592)).toFixed(1)});                                                                                                                                                                                                               
                }

                if (this.state.bottomSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 2000))});                                                                                                                                                                                                               
                }
            }

            if (topSelectedUnitDropDownValue === 'ton') {

                if (this.state.bottomSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 2000)).toFixed(1)});                                                                                                                                                                                                                                   
                }

                if (this.state.bottomSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 32000)).toFixed(1)});                                                                                                                                                                                                               
                }

                if (this.state.bottomSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 907)).toFixed(1)});                                                                                                                                                                                                                                   
                }

                if (this.state.bottomSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 907185)).toFixed(1)});                                                                                                                                                                                                                                   
                }

                if (this.state.bottomSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 9.072e+8)).toFixed(1)});                                                                                                                                                                                                                                   
                }
            }
        }


        // BOTTOM DROP-DOWN
        if (unitDropDownId === 'drop-down-2') {
            this.setState({bottomSelectedDropDownValueState: bottomSelectedUnitDropDownValue})
            console.log('Selected: ' + bottomSelectedUnitDropDownValue + ' in Box 2');

            if (bottomSelectedUnitDropDownValue === this.state.topSelectedDropDownValueState) {
                this.setState({resultBoxTwoValueState: this.state.resultBoxOneValueState})
            }

            if (bottomSelectedUnitDropDownValue === 'milligram') {

                if (this.state.topSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1000)).toFixed(1)});
                }

                if (this.state.topSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1e+6)).toFixed(1)});
                }

                if (this.state.topSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 28350)).toFixed(1)});                    
                }

                if (this.state.topSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 453592)).toFixed(1)});                         
                }

                if (this.state.topSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 9.072e+8))});                                             
                }
            }

            if (bottomSelectedUnitDropDownValue === 'gram') {

                if (this.state.topSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1000)).toFixed(1)});
                }

                if (this.state.topSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1000)).toFixed(1)});
                }

                if (this.state.topSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 28.35)).toFixed(1)});                                        
                }

                if (this.state.topSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 454)).toFixed(1)});                                             
                }

                if (this.state.topSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1e+6))});                                                                 
                }
            }

            if (bottomSelectedUnitDropDownValue === 'kilogram') {

                if (this.state.topSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1000)).toFixed(1)});                                                                                     
                }

                if (this.state.topSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1e+6)).toFixed(1)});                                                                 
                }

                if (this.state.topSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 35.274)).toFixed(1)});                                                                                     
                }

                if (this.state.topSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 2.205)).toFixed(1)});                                                                                                         
                }

                if (this.state.topSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1000))});                                                                                                                             
                }
            }

            if (bottomSelectedUnitDropDownValue === 'ounce') {

                if (this.state.topSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 35.274)).toFixed(1)});                                                                                                                                                 
                }

                if (this.state.topSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 28.35)).toFixed(1)});                                                                                                                                                 
                }

                if (this.state.topSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 28350)).toFixed(1)});                                                                                                                                                                     
                }

                if (this.state.topSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 16)).toFixed(1)});                                                                                                                                                                       
                }

                if (this.state.topSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 32000))});                                                                                                                                                                                           
                }
            }

            if (bottomSelectedUnitDropDownValue === 'pound') {

                if (this.state.topSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 16)).toFixed(1)});                                                                                                                                                                                                               
                }

                if (this.state.topSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 2.205)).toFixed(1)});                                                                                                                                                                                           
                }

                if (this.state.topSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 454)).toFixed(1)});                                                                                                                                                                                                               
                }

                if (this.state.topSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 453592)).toFixed(1)});                                                                                                                                                                                                               
                }

                if (this.state.topSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 2000))});                                                                                                                                                                                                               
                }
            }

            if (bottomSelectedUnitDropDownValue === 'ton') {

                if (this.state.topSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 2000)).toFixed(1)});                                                                                                                                                                                                                                   
                }

                if (this.state.topSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 32000)).toFixed(1)});                                                                                                                                                                                                               
                }

                if (this.state.topSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 907)).toFixed(1)});                                                                                                                                                                                                                                   
                }

                if (this.state.topSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 907185)).toFixed(1)});                                                                                                                                                                                                                                   
                }

                if (this.state.topSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 9.072e+8)).toFixed(1)});                                                                                                                                                                                                                                   
                }
            }
        }      
    }


    render() {

        capitalizedTopPlaceholder = this.state.topSelectedDropDownValueState.charAt(0).toUpperCase() + this.state.topSelectedDropDownValueState.slice(1);
        capitalizedBottomPlaceholder = this.state.bottomSelectedDropDownValueState.charAt(0).toUpperCase() + this.state.bottomSelectedDropDownValueState.slice(1);
        
        resultBox1 = (
            <ResultBox
                inputHandler={this.weightConversionHandler}
                conversionValue={this.state.resultBoxOneValueState}
                customID={'result-box-' + this.state.topSelectedDropDownValueState}
                customPlaceholder={'Enter a ' + capitalizedTopPlaceholder + ' Value'}
            /> 
        );
                
        resultBox2 = (
            <ResultBox
                inputHandler={this.weightConversionHandler}
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
                        dropDownListOptions={weightMeasurementUnitsArray}
                    />
                </DropDownMenuSelect>

                {resultBox1}


                <PageTertiaryHeading headingText={'To:'} />

                <DropDownMenuSelect
                    changed={this.unitDropDownValueHandler}
                    defaultValue={weightMeasurementUnitsArray[1].props.value}
                    id={'drop-down-2'}
                >

                    <DropDownMenuOptions 
                        dropDownListOptions={weightMeasurementUnitsArray}
                    />
                </DropDownMenuSelect>
                
                {resultBox2}

            </div>
        )
    }
};

export default FromToWeight;
