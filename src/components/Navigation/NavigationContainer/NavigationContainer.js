// CLASS-BASED COMPONENT - STATE MANAGEMENT (STATEFUL COMPONENT)
import React, {Component} from 'react';
import TopNavBar from '../TopNavBar/TopNavBar';
import MobileNavModal from '../TopNavBar/MobileNavModal/MobileNavModal';


class NavigationContainer extends Component {

  // MOBILE NAV MODAL OPEN/ CLOSE LOGIC
  state = {
    showMobileNavModal: false
  }

  mobileNavModalToggleHandler = () => {
    if (this.state.showMobileNavModal === false) {
      this.setState({showMobileNavModal: true});
    }

    else {
      this.setState({showMobileNavModal: false});
    }
  }

    
    render() {

        return (

            <div>

                <TopNavBar 
                  hamburgerIconClicked={this.mobileNavModalToggleHandler} 
                />

                <MobileNavModal
                  open={this.state.showMobileNavModal}
                />
        
            </div>               
        )
    }   
};

export default NavigationContainer;