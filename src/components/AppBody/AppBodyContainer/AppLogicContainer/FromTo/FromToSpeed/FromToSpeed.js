import React, {Component} from 'react';
import DropDownMenuSelect from '../../../../../UI/DropDownMenu/DropDownMenuSelect/DropDownMenuSelect';
import DropDownMenuOptions from '../../../../../UI/DropDownMenu/DropDownMenuOptions/DropDownMenuOptions';
import ResultBox from '../../../../ResultBox/ResultBox';
import PageTertiaryHeading from '../../../../PageTertiaryHeading/PageTertiaryHeading';
import classes from '../../FromTo/FromTo.css';

var convert = require('convert-units')


const speedMeasurementUnits = [
    { value: 'mile-per-hour', label: 'Mile Per Hour' },
    { value: 'kilometer-per-hour', label: 'Kilometer Per Hour' },
    { value: 'meter-per-second', label: 'Meter Per Second' },
    { value: 'foot-per-second', label: 'Foot Per Second' },
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
        topSelectedDropDownValueState: 'mile-per-hour',
        bottomSelectedDropDownValueState: 'kilometer-per-hour'
    }


    weightConversionHandler = (event) => {

        inputValue = event.target.value;
        resultBoxId = event.target.id;

        meterPerSecondToFootPerSecondConversion = convert(inputValue).from('m/s').to('ft/s').toFixed(2);
        meterPerSecondToKilometerPerHourConversion = convert(inputValue).from('m/s').to('km/h').toFixed(2);
        meterPerSecondToMilePerHourConversion = convert(inputValue).from('m/s').to('m/h').toFixed(2);
        meterPerSecondToKnotConversion = convert(inputValue).from('m/s').to('knot').toFixed(2);

        footPerSecondToMeterPerSecondConversion = convert(inputValue).from('ft/s').to('m/s').toFixed(2);
        footPerSecondToKilometerPerHourConversion = convert(inputValue).from('ft/s').to('km/h').toFixed(2);
        footPerSecondToMilePerHourConversion = convert(inputValue).from('ft/s').to('m/h').toFixed(2);
        footPerSecondToKnotConversion = convert(inputValue).from('ft/s').to('knot').toFixed(2);

        kilometerPerHourToFootPerSecondConversion = convert(inputValue).from('km/h').to('ft/s').toFixed(2);
        kilometerPerHourToMeterPerSecondConversion = convert(inputValue).from('km/h').to('m/s').toFixed(2);
        kilometerPerHourToMilePerHourConversion = convert(inputValue).from('km/h').to('m/h').toFixed(2);
        kilometerPerHourToKnotConversion = convert(inputValue).from('km/h').to('knot').toFixed(2);

        milePerHourToKilometerPerHourConversion = convert(inputValue).from('m/h').to('km/h').toFixed(2);
        milePerHourToFootPerSecondConversion = convert(inputValue).from('m/h').to('ft/s').toFixed(2);
        milePerHourToMeterPerSecondConversion = convert(inputValue).from('m/h').to('m/s').toFixed(2);
        milePerHourToKnotConversion = convert(inputValue).from('m/h').to('knot').toFixed(2);

        knotToMilePerHourConversion = convert(inputValue).from('knot').to('m/h').toFixed(2);
        knotToKilometerPerHourConversion = convert(inputValue).from('knot').to('km/h').toFixed(2);
        knotToFootPerSecondConversion = convert(inputValue).from('knot').to('ft/s').toFixed(2);
        knotToMeterPerSecondConversion = convert(inputValue).from('knot').to('m/s').toFixed(2);

        
        if (this.state.topSelectedDropDownValueState === this.state.bottomSelectedDropDownValueState) {
            this.setState({resultBoxOneValueState: inputValue})
            this.setState({resultBoxTwoValueState: inputValue})
        }

        if (resultBoxId === 'result-box-meter-per-second') {

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

        if (unitDropDownId === 'drop-down-1') {
            this.setState({topSelectedDropDownValueState: topSelectedUnitDropDownValue})

            if (topSelectedUnitDropDownValue === this.state.bottomSelectedDropDownValueState) {
                this.setState({resultBoxOneValueState: this.state.resultBoxTwoValueState})
            }

            if (topSelectedUnitDropDownValue === 'meter-per-second') {

                if (this.state.bottomSelectedDropDownValueState === 'foot-per-second') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 3.281)).toFixed(2)});
                }

                if (this.state.bottomSelectedDropDownValueState === 'kilometer-per-hour') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 3.6)).toFixed(2)});
                }

                if (this.state.bottomSelectedDropDownValueState === 'mile-per-hour') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 2.237)).toFixed(2)});                    
                }

                if (this.state.bottomSelectedDropDownValueState === 'knot') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1.944)).toFixed(2)});                         
                }
            }

            if (topSelectedUnitDropDownValue === 'foot-per-second') {

                if (this.state.bottomSelectedDropDownValueState === 'meter-per-second') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 3.281)).toFixed(2)});
                }

                if (this.state.bottomSelectedDropDownValueState === 'kilometer-per-hour') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1.097)).toFixed(2)});
                }

                if (this.state.bottomSelectedDropDownValueState === 'mile-per-hour') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1.467)).toFixed(2)});                                        
                }

                if (this.state.bottomSelectedDropDownValueState === 'knot') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1.688)).toFixed(2)});                                             
                }
            }

            if (topSelectedUnitDropDownValue === 'kilometer-per-hour') {

                if (this.state.bottomSelectedDropDownValueState === 'foot-per-second') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1.097)).toFixed(2)});                                                                                     
                }

                if (this.state.bottomSelectedDropDownValueState === 'meter-per-second') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 3.6)).toFixed(2)});                                                                 
                }

                if (this.state.bottomSelectedDropDownValueState === 'mile-per-hour') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1.609)).toFixed(2)});                                                                                     
                }

                if (this.state.bottomSelectedDropDownValueState === 'knot') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1.852)).toFixed(2)});                                                                                                         
                }
            }

            if (topSelectedUnitDropDownValue === 'mile-per-hour') {

                if (this.state.bottomSelectedDropDownValueState === 'kilometer-per-hour') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1.609)).toFixed(2)});                                                                                                                                                 
                }

                if (this.state.bottomSelectedDropDownValueState === 'foot-per-second') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1.467)).toFixed(2)});                                                                                                                                                 
                }

                if (this.state.bottomSelectedDropDownValueState === 'meter-per-second') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 2.237)).toFixed(2)});                                                                                                                                                                     
                }

                if (this.state.bottomSelectedDropDownValueState === 'knot') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1.151)).toFixed(2)});                                                                                                                                                                       
                }
            }

            if (topSelectedUnitDropDownValue === 'knot') {

                if (this.state.bottomSelectedDropDownValueState === 'mile-per-hour') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1.151)).toFixed(2)});                                                                                                                                                                                                               
                }

                if (this.state.bottomSelectedDropDownValueState === 'kilometer-per-hour') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1.852)).toFixed(2)});                                                                                                                                                                                           
                }

                if (this.state.bottomSelectedDropDownValueState === 'foot-per-second') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1.688)).toFixed(2)});                                                                                                                                                                                                               
                }

                if (this.state.bottomSelectedDropDownValueState === 'meter-per-second') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1.944)).toFixed(2)});                                                                                                                                                                                                               
                }
            }
        }


        if (unitDropDownId === 'drop-down-2') {
            this.setState({bottomSelectedDropDownValueState: bottomSelectedUnitDropDownValue})

            if (bottomSelectedUnitDropDownValue === this.state.topSelectedDropDownValueState) {
                this.setState({resultBoxTwoValueState: this.state.resultBoxOneValueState})
            }

            if (bottomSelectedUnitDropDownValue === 'meter-per-second') {

                if (this.state.topSelectedDropDownValueState === 'foot-per-second') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 3.281)).toFixed(2)});
                }

                if (this.state.topSelectedDropDownValueState === 'kilometer-per-hour') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 3.6)).toFixed(2)});
                }

                if (this.state.topSelectedDropDownValueState === 'mile-per-hour') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 2.237)).toFixed(2)});                    
                }

                if (this.state.topSelectedDropDownValueState === 'knot') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1.944)).toFixed(2)});                         
                }
            }

            if (bottomSelectedUnitDropDownValue === 'foot-per-second') {

                if (this.state.topSelectedDropDownValueState === 'meter-per-second') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 3.281)).toFixed(2)});
                }

                if (this.state.topSelectedDropDownValueState === 'kilometer-per-hour') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1.097)).toFixed(2)});
                }

                if (this.state.topSelectedDropDownValueState === 'mile-per-hour') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1.467)).toFixed(2)});                                        
                }

                if (this.state.topSelectedDropDownValueState === 'knot') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1.688)).toFixed(2)});                                             
                }
            }

            if (bottomSelectedUnitDropDownValue === 'kilometer-per-hour') {

                if (this.state.topSelectedDropDownValueState === 'foot-per-second') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1.097)).toFixed(2)});                                                                                     
                }

                if (this.state.topSelectedDropDownValueState === 'meter-per-second') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 3.6)).toFixed(2)});                                                                 
                }

                if (this.state.topSelectedDropDownValueState === 'mile-per-hour') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1.609)).toFixed(2)});                                                                                     
                }

                if (this.state.topSelectedDropDownValueState === 'knot') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1.852)).toFixed(2)});                                                                                                         
                }
            }

            if (bottomSelectedUnitDropDownValue === 'mile-per-hour') {

                if (this.state.topSelectedDropDownValueState === 'kilometer-per-hour') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1.609)).toFixed(2)});                                                                                                                                                 
                }

                if (this.state.topSelectedDropDownValueState === 'foot-per-second') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1.467)).toFixed(2)});                                                                                                                                                 
                }

                if (this.state.topSelectedDropDownValueState === 'meter-per-second') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 2.237)).toFixed(2)});                                                                                                                                                                     
                }

                if (this.state.topSelectedDropDownValueState === 'knot') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1.151)).toFixed(2)});                                                                                                                                                                       
                }
            }

            if (bottomSelectedUnitDropDownValue === 'knot') {

                if (this.state.topSelectedDropDownValueState === 'mile-per-hour') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1.151)).toFixed(2)});                                                                                                                                                                                                               
                }

                if (this.state.topSelectedDropDownValueState === 'kilometer-per-hour') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1.852)).toFixed(2)});                                                                                                                                                                                           
                }

                if (this.state.topSelectedDropDownValueState === 'foot-per-second') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1.688)).toFixed(2)});                                                                                                                                                                                                               
                }

                if (this.state.topSelectedDropDownValueState === 'meter-per-second') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1.944)).toFixed(2)});                                                                                                                                                                                                               
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
