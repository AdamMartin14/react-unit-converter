// CLASS-BASED COMPONENT - STATE MANAGEMENT (STATEFUL COMPONENT)
import React, {Component} from 'react';
import DropDownMenuSelect from '../../../../../UI/DropDownMenu/DropDownMenuSelect/DropDownMenuSelect';
import DropDownMenuOptions from '../../../../../UI/DropDownMenu/DropDownMenuOptions/DropDownMenuOptions';
import ResultBox from '../../../../ResultBox/ResultBox';
import PageTertiaryHeading from '../../../../PageTertiaryHeading/PageTertiaryHeading';
import classes from '../../FromTo/FromTo.css';

var convert = require('convert-units')


const speedMeasurementUnits = [
    { value: 'meter-per-second', label: 'Meter Per Second' },
    { value: 'foot-per-second', label: 'Foot Per Second' },
    { value: 'kilometer-per-hour', label: 'Kilometer Per Hour' },
    { value: 'mile-per-hour', label: 'Mile Per Hour' },
    { value: 'knot', label: 'Knot' },
 ];

const speedMeasurementUnitsArray = speedMeasurementUnits.map(ctrl => (
    <option value={ctrl.value} key={ctrl.value}>{ctrl.label}</option>
));

let resultBox1 = '';
let resultBox2 = '';
let resultBoxId = '';
let unitDropDownId = '';
let topSelectedUnitDropDownValue = '';
let bottomSelectedUnitDropDownValue = '';
let inputValue = '';
let meterPerSecondToFootPerSecondConversion = '';
let meterPerSecondToKilometerPerHourConversion = '';
let meterPerSecondToMilePerHourConversion = '';
let meterPerSecondToKnotConversion = '';
let footPerSecondToMeterPerSecondConversion = '';
let footPerSecondToKilometerPerHourConversion = '';
let footPerSecondToMilePerHourConversion = '';
let footPerSecondToKnotConversion = '';
let kilometerPerHourToFootPerSecondConversion = '';
let kilometerPerHourToMeterPerSecondConversion = '';
let kilometerPerHourToMilePerHourConversion = '';
let kilometerPerHourToKnotConversion = '';
let milePerHourToKilometerPerHourConversion = '';
let milePerHourToFootPerSecondConversion = '';
let milePerHourToMeterPerSecondConversion = '';
let milePerHourToKnotConversion = '';
let knotToMilePerHourConversion = '';
let knotToKilometerPerHourConversion = '';
let knotToFootPerSecondConversion = '';
let knotToMeterPerSecondConversion = '';
let conversionResult = '';
let capitalizedTopPlaceholder = '';
let capitalizedBottomPlaceholder = '';



class FromToSpeed extends Component {

    state = { 
        resultBoxOneValueState: '',
        resultBoxTwoValueState: '',
        topSelectedDropDownValueState: 'meter-per-second',
        bottomSelectedDropDownValueState: 'foot-per-second'
    }


    weightConversionHandler = (event) => {

        inputValue = event.target.value;
        resultBoxId = event.target.id;

        meterPerSecondToFootPerSecondConversion = convert(inputValue).from('m/s').to('ft/s').toFixed(1);
        meterPerSecondToKilometerPerHourConversion = convert(inputValue).from('m/s').to('km/h').toFixed(1);
        meterPerSecondToMilePerHourConversion = convert(inputValue).from('m/s').to('m/h').toFixed(1);
        meterPerSecondToKnotConversion = convert(inputValue).from('m/s').to('knot').toFixed(1);

        footPerSecondToMeterPerSecondConversion = convert(inputValue).from('ft/s').to('m/s').toFixed(1);
        footPerSecondToKilometerPerHourConversion = convert(inputValue).from('ft/s').to('km/h').toFixed(1);
        footPerSecondToMilePerHourConversion = convert(inputValue).from('ft/s').to('m/h').toFixed(1);
        footPerSecondToKnotConversion = convert(inputValue).from('ft/s').to('knot').toFixed(1);

        kilometerPerHourToFootPerSecondConversion = convert(inputValue).from('km/h').to('ft/s').toFixed(1);
        kilometerPerHourToMeterPerSecondConversion = convert(inputValue).from('km/h').to('m/s').toFixed(1);
        kilometerPerHourToMilePerHourConversion = convert(inputValue).from('km/h').to('m/h').toFixed(1);
        kilometerPerHourToKnotConversion = convert(inputValue).from('km/h').to('knot').toFixed(1);

        milePerHourToKilometerPerHourConversion = convert(inputValue).from('m/h').to('km/h').toFixed(1);
        milePerHourToFootPerSecondConversion = convert(inputValue).from('m/h').to('ft/s').toFixed(1);
        milePerHourToMeterPerSecondConversion = convert(inputValue).from('m/h').to('m/s').toFixed(1);
        milePerHourToKnotConversion = convert(inputValue).from('m/h').to('knot').toFixed(1);

        knotToMilePerHourConversion = convert(inputValue).from('knot').to('m/h').toFixed(1);
        knotToKilometerPerHourConversion = convert(inputValue).from('knot').to('km/h').toFixed(1);
        knotToFootPerSecondConversion = convert(inputValue).from('knot').to('ft/s').toFixed(1);
        knotToMeterPerSecondConversion = convert(inputValue).from('knot').to('m/s').toFixed(1);

        
        if (this.state.topSelectedDropDownValueState === this.state.bottomSelectedDropDownValueState) {
            this.setState({resultBoxOneValueState: inputValue})
            this.setState({resultBoxTwoValueState: inputValue})
        }

        if (resultBoxId === 'result-box-meter-per-second') {

            // TOP MPS TO BOTTOM FPS/ BOTTOM MPS TO TOP FPS
            if (this.state.topSelectedDropDownValueState === 'foot-per-second' || this.state.bottomSelectedDropDownValueState === 'foot-per-second') {

                conversionResult = meterPerSecondToFootPerSecondConversion;

                if (this.state.topSelectedDropDownValueState === 'meter-per-second') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
        
            // TOP MPS TO BOTTOM KPH/ BOTTOM MPS TO TOP KPH
            if (this.state.topSelectedDropDownValueState === 'kilometer-per-hour' || this.state.bottomSelectedDropDownValueState === 'kilometer-per-hour') {

                conversionResult = meterPerSecondToKilometerPerHourConversion;

                if (this.state.topSelectedDropDownValueState === 'meter-per-second') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP MPS TO BOTTOM MPH/ BOTTOM MPS TO TOP MPH
            if (this.state.topSelectedDropDownValueState === 'mile-per-hour' || this.state.bottomSelectedDropDownValueState === 'mile-per-hour') {

                conversionResult = meterPerSecondToMilePerHourConversion;

                if (this.state.topSelectedDropDownValueState === 'meter-per-second') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP MPS TO BOTTOM KNOT/ BOTTOM MPS TO TOP KNOT
            if (this.state.topSelectedDropDownValueState === 'knot' || this.state.bottomSelectedDropDownValueState === 'knot') {

                conversionResult = meterPerSecondToKnotConversion;

                if (this.state.topSelectedDropDownValueState === 'meter-per-second') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
        }


        if (resultBoxId === 'result-box-foot-per-second') {

            // TOP FPS TO BOTTOM MPS/ BOTTOM FPS TO TOP MPS
            if (this.state.topSelectedDropDownValueState === 'meter-per-second' || this.state.bottomSelectedDropDownValueState === 'meter-per-second') {

                conversionResult = footPerSecondToMeterPerSecondConversion;

                if (this.state.topSelectedDropDownValueState === 'foot-per-second') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP FPS TO BOTTOM KPH/ BOTTOM FPS TO TOP KPH
            if (this.state.topSelectedDropDownValueState === 'kilometer-per-hour' || this.state.bottomSelectedDropDownValueState === 'kilometer-per-hour') {

                conversionResult = footPerSecondToKilometerPerHourConversion;

                if (this.state.topSelectedDropDownValueState === 'foot-per-second') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP FPS TO BOTTOM MPH/ BOTTOM FPS TO TOP MPH
            if (this.state.topSelectedDropDownValueState === 'mile-per-hour' || this.state.bottomSelectedDropDownValueState === 'mile-per-hour') {

                conversionResult = footPerSecondToMilePerHourConversion;

                if (this.state.topSelectedDropDownValueState === 'foot-per-second') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP FPS TO BOTTOM KNOT/ BOTTOM FPS TO TOP KNOT
            if (this.state.topSelectedDropDownValueState === 'knot' || this.state.bottomSelectedDropDownValueState === 'knot') {

                conversionResult = footPerSecondToKnotConversion;

                if (this.state.topSelectedDropDownValueState === 'foot-per-second') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
        }


        if (resultBoxId === 'result-box-kilometer-per-hour') {

            // TOP KMH TO BOTTOM FPS/ BOTTOM KMH TO TOP FPS
            if (this.state.topSelectedDropDownValueState === 'foot-per-second' || this.state.bottomSelectedDropDownValueState === 'foot-per-second') {

                conversionResult = kilometerPerHourToFootPerSecondConversion;

                if (this.state.topSelectedDropDownValueState === 'kilometer-per-hour') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP KMH TO BOTTOM MPS/ BOTTOM KMH TO TOP MPS
            if (this.state.topSelectedDropDownValueState === 'meter-per-second' || this.state.bottomSelectedDropDownValueState === 'meter-per-second') {

                conversionResult = kilometerPerHourToMeterPerSecondConversion;

                if (this.state.topSelectedDropDownValueState === 'kilometer-per-hour') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP KMH TO BOTTOM KMH/ BOTTOM KMH TO TOP KMH
            if (this.state.topSelectedDropDownValueState === 'mile-per-hour' || this.state.bottomSelectedDropDownValueState === 'mile-per-hour') {

                conversionResult = kilometerPerHourToMilePerHourConversion;

                if (this.state.topSelectedDropDownValueState === 'kilometer-per-hour') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP KMH TO BOTTOM KNOT/ BOTTOM KMH TO TOP KNOT
            if (this.state.topSelectedDropDownValueState === 'knot' || this.state.bottomSelectedDropDownValueState === 'knot') {

                conversionResult = kilometerPerHourToKnotConversion;

                if (this.state.topSelectedDropDownValueState === 'kilometer-per-hour') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
        }


        if (resultBoxId === 'result-box-mile-per-hour') {

            // TOP MPH TO BOTTOM KMH/ BOTTOM MPH TO TOP KMH
            if (this.state.topSelectedDropDownValueState === 'kilometer-per-hour' || this.state.bottomSelectedDropDownValueState === 'kilometer-per-hour') {

                conversionResult = milePerHourToKilometerPerHourConversion;

                if (this.state.topSelectedDropDownValueState === 'mile-per-hour') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP MPH TO BOTTOM FPS/ BOTTOM MPH TO TOP FPS
            if (this.state.topSelectedDropDownValueState === 'foot-per-second' || this.state.bottomSelectedDropDownValueState === 'foot-per-second') {

                conversionResult = milePerHourToFootPerSecondConversion;

                if (this.state.topSelectedDropDownValueState === 'mile-per-hour') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP MPH TO BOTTOM MPS/ BOTTOM MPH TO TOP MPS
            if (this.state.topSelectedDropDownValueState === 'meter-per-second' || this.state.bottomSelectedDropDownValueState === 'meter-per-second') {

                conversionResult = milePerHourToMeterPerSecondConversion;

                if (this.state.topSelectedDropDownValueState === 'mile-per-hour') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP MPH TO BOTTOM KNOT/ BOTTOM MPH TO TOP KNOT
            if (this.state.topSelectedDropDownValueState === 'knot' || this.state.bottomSelectedDropDownValueState === 'knot') {

                conversionResult = milePerHourToKnotConversion;

                if (this.state.topSelectedDropDownValueState === 'mile-per-hour') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
        }


        if (resultBoxId === 'result-box-knot') {

            // TOP KNOT TO BOTTOM MPH/ BOTTOM KNOT TO TOP MPH
            if (this.state.topSelectedDropDownValueState === 'mile-per-hour' || this.state.bottomSelectedDropDownValueState === 'mile-per-hour') {

                conversionResult = knotToMilePerHourConversion

                if (this.state.topSelectedDropDownValueState === 'knot') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            // TOP KNOT TO BOTTOM KMH/ BOTTOM KNOT TO TOP KMH
            if (this.state.topSelectedDropDownValueState === 'kilometer-per-hour' || this.state.bottomSelectedDropDownValueState === 'kilogram') {

                conversionResult = knotToKilometerPerHourConversion;

                if (this.state.topSelectedDropDownValueState === 'knot') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            // TOP KNOT TO BOTTOM FPS/ BOTTOM KNOT TO TOP FPS
            if (this.state.topSelectedDropDownValueState === 'foot-per-second' || this.state.bottomSelectedDropDownValueState === 'foot-per-second') {

                conversionResult = knotToFootPerSecondConversion;

                if (this.state.topSelectedDropDownValueState === 'knot') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            // TOP KNOT TO BOTTOM MPS/ BOTTOM KNOT TO TOP MPS
            if (this.state.topSelectedDropDownValueState === 'meter-per-second' || this.state.bottomSelectedDropDownValueState === 'meter-per-second') {

                conversionResult = knotToMeterPerSecondConversion;

                if (this.state.topSelectedDropDownValueState === 'knot') {
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

            if (topSelectedUnitDropDownValue === 'meter-per-second') {

                if (this.state.bottomSelectedDropDownValueState === 'foot-per-second') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 3.281)).toFixed(1)});
                }

                if (this.state.bottomSelectedDropDownValueState === 'kilometer-per-hour') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 3.6)).toFixed(1)});
                }

                if (this.state.bottomSelectedDropDownValueState === 'mile-per-hour') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 2.237)).toFixed(1)});                    
                }

                if (this.state.bottomSelectedDropDownValueState === 'knot') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1.944)).toFixed(1)});                         
                }
            }

            if (topSelectedUnitDropDownValue === 'foot-per-second') {

                if (this.state.bottomSelectedDropDownValueState === 'meter-per-second') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 3.281)).toFixed(1)});
                }

                if (this.state.bottomSelectedDropDownValueState === 'kilometer-per-hour') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1.097)).toFixed(1)});
                }

                if (this.state.bottomSelectedDropDownValueState === 'mile-per-hour') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1.467)).toFixed(1)});                                        
                }

                if (this.state.bottomSelectedDropDownValueState === 'knot') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1.688)).toFixed(1)});                                             
                }
            }

            if (topSelectedUnitDropDownValue === 'kilometer-per-hour') {

                if (this.state.bottomSelectedDropDownValueState === 'foot-per-second') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1.097)).toFixed(1)});                                                                                     
                }

                if (this.state.bottomSelectedDropDownValueState === 'meter-per-second') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 3.6)).toFixed(1)});                                                                 
                }

                if (this.state.bottomSelectedDropDownValueState === 'mile-per-hour') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1.609)).toFixed(1)});                                                                                     
                }

                if (this.state.bottomSelectedDropDownValueState === 'knot') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1.852)).toFixed(1)});                                                                                                         
                }
            }

            if (topSelectedUnitDropDownValue === 'mile-per-hour') {

                if (this.state.bottomSelectedDropDownValueState === 'kilometer-per-hour') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1.609)).toFixed(1)});                                                                                                                                                 
                }

                if (this.state.bottomSelectedDropDownValueState === 'foot-per-second') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1.467)).toFixed(1)});                                                                                                                                                 
                }

                if (this.state.bottomSelectedDropDownValueState === 'meter-per-second') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 2.237)).toFixed(1)});                                                                                                                                                                     
                }

                if (this.state.bottomSelectedDropDownValueState === 'knot') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1.151)).toFixed(1)});                                                                                                                                                                       
                }
            }

            if (topSelectedUnitDropDownValue === 'knot') {

                if (this.state.bottomSelectedDropDownValueState === 'mile-per-hour') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1.151)).toFixed(1)});                                                                                                                                                                                                               
                }

                if (this.state.bottomSelectedDropDownValueState === 'kilometer-per-hour') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1.852)).toFixed(1)});                                                                                                                                                                                           
                }

                if (this.state.bottomSelectedDropDownValueState === 'foot-per-second') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1.688)).toFixed(1)});                                                                                                                                                                                                               
                }

                if (this.state.bottomSelectedDropDownValueState === 'meter-per-second') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1.944)).toFixed(1)});                                                                                                                                                                                                               
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

            if (bottomSelectedUnitDropDownValue === 'meter-per-second') {

                if (this.state.topSelectedDropDownValueState === 'foot-per-second') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 3.281)).toFixed(1)});
                }

                if (this.state.topSelectedDropDownValueState === 'kilometer-per-hour') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 3.6)).toFixed(1)});
                }

                if (this.state.topSelectedDropDownValueState === 'mile-per-hour') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 2.237)).toFixed(1)});                    
                }

                if (this.state.topSelectedDropDownValueState === 'knot') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1.944)).toFixed(1)});                         
                }
            }

            if (bottomSelectedUnitDropDownValue === 'foot-per-second') {

                if (this.state.topSelectedDropDownValueState === 'meter-per-second') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 3.281)).toFixed(1)});
                }

                if (this.state.topSelectedDropDownValueState === 'kilometer-per-hour') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1.097)).toFixed(1)});
                }

                if (this.state.topSelectedDropDownValueState === 'mile-per-hour') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1.467)).toFixed(1)});                                        
                }

                if (this.state.topSelectedDropDownValueState === 'knot') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1.688)).toFixed(1)});                                             
                }
            }

            if (bottomSelectedUnitDropDownValue === 'kilometer-per-hour') {

                if (this.state.topSelectedDropDownValueState === 'foot-per-second') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1.097)).toFixed(1)});                                                                                     
                }

                if (this.state.topSelectedDropDownValueState === 'meter-per-second') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 3.6)).toFixed(1)});                                                                 
                }

                if (this.state.topSelectedDropDownValueState === 'mile-per-hour') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1.609)).toFixed(1)});                                                                                     
                }

                if (this.state.topSelectedDropDownValueState === 'knot') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1.852)).toFixed(1)});                                                                                                         
                }
            }

            if (bottomSelectedUnitDropDownValue === 'mile-per-hour') {

                if (this.state.topSelectedDropDownValueState === 'kilometer-per-hour') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1.609)).toFixed(1)});                                                                                                                                                 
                }

                if (this.state.topSelectedDropDownValueState === 'foot-per-second') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1.467)).toFixed(1)});                                                                                                                                                 
                }

                if (this.state.topSelectedDropDownValueState === 'meter-per-second') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 2.237)).toFixed(1)});                                                                                                                                                                     
                }

                if (this.state.topSelectedDropDownValueState === 'knot') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1.151)).toFixed(1)});                                                                                                                                                                       
                }
            }

            if (bottomSelectedUnitDropDownValue === 'knot') {

                if (this.state.topSelectedDropDownValueState === 'mile-per-hour') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1.151)).toFixed(1)});                                                                                                                                                                                                               
                }

                if (this.state.topSelectedDropDownValueState === 'kilometer-per-hour') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1.852)).toFixed(1)});                                                                                                                                                                                           
                }

                if (this.state.topSelectedDropDownValueState === 'foot-per-second') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1.688)).toFixed(1)});                                                                                                                                                                                                               
                }

                if (this.state.topSelectedDropDownValueState === 'meter-per-second') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1.944)).toFixed(1)});                                                                                                                                                                                                               
                }
            }
        }      
    }


    render() {

        capitalizedTopPlaceholder = this.state.topSelectedDropDownValueState.charAt(0).toUpperCase() + this.state.topSelectedDropDownValueState.slice(1).replace(/-/g, " ");
        capitalizedBottomPlaceholder = this.state.bottomSelectedDropDownValueState.charAt(0).toUpperCase() + this.state.bottomSelectedDropDownValueState.slice(1).replace(/-/g, " ");
        
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
                        dropDownListOptions={speedMeasurementUnitsArray}
                    />
                </DropDownMenuSelect>

                {resultBox1}


                <PageTertiaryHeading headingText={'To:'} />

                <DropDownMenuSelect
                    changed={this.unitDropDownValueHandler}
                    defaultValue={speedMeasurementUnitsArray[1].props.value}
                    id={'drop-down-2'}
                >

                    <DropDownMenuOptions 
                        dropDownListOptions={speedMeasurementUnitsArray}
                    />
                </DropDownMenuSelect>
                
                {resultBox2}

            </div>
        )
    }
};

export default FromToSpeed;
