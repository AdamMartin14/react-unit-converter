// FUNCTIONAL COMPONENT - NO STATE MANAGEMENT (STATELESS COMPONENT)
import React from 'react';
import FromToTemperature from '../FromToController/FromToTemperature/FromToTemperature';


{/* Add conditional to render different unit FromTo Components on selection of 
UnitName dropdown */}

const fromToController = (props) => {

        return (
            <div>
                <FromToTemperature />  
            </div>  
        );
}


export default fromToController;