// CLASS-BASED COMPONENT - STATE MANAGEMENT (STATEFUL COMPONENT)
import React, {Component} from 'react';
import DropDownMenuSelect from '../../../../../UI/DropDownMenu/DropDownMenuSelect/DropDownMenuSelect';
import DropDownMenuOptions from '../../../../../UI/DropDownMenu/DropDownMenuOptions/DropDownMenuOptions';
//import ResultBox from '../../../../ResultBox/ResultBox';
import PageTertiaryHeading from '../../../../PageTertiaryHeading/PageTertiaryHeading';
import classes from '../../FromTo/FromTo.css';


const weightMeasurementUnits = [
    { value: 'kilogram', label: 'Kilogram' },
    { value: 'gram', label: 'Gram' },
    { value: 'milligram', label: 'Milligram' },
    { value: 'pound', label: 'Pound' },
    { value: 'ounce', label: 'Ounce' },
    { value: 'stone', label: 'Stone' },
    { value: 'us-ton', label: 'US Ton' },
    { value: 'metric-ton', label: 'Metric Ton' },
 ];

const weightMeasurementUnitsArray = weightMeasurementUnits.map(ctrl => (
    <option value={ctrl.value}>{ctrl.label}</option>
));

//let weightConversionOutput = '';

let resultBox1 = '';
let resultBox2 = '';
//let inputValue = '';



class FromToWeight extends Component {

    state = {
        
    }

    
    render() {
        

        return (
            
            <div className={classes.FromToContainer}>

                <PageTertiaryHeading headingText={'From:'} />

                <DropDownMenuSelect 
                    id={'drop-down-1'}
                >

                    <DropDownMenuOptions 
                        dropDownListOptions={weightMeasurementUnitsArray}
                    />
                </DropDownMenuSelect>

                {resultBox1}


                <PageTertiaryHeading headingText={'To:'} />

                <DropDownMenuSelect
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