// CLASS-BASED COMPONENT - STATE MANAGEMENT (STATEFUL COMPONENT)
import React, {Component} from 'react';
import TopNavBar from '../TopNavBar/TopNavBar';
import MobileNavModal from '../TopNavBar/MobileNavModal/MobileNavModal';


class NavigationContainer extends Component {

  // MOBILE NAV MODAL OPEN/ CLOSE LOGIC
  state = {
    showMobileNavModal: false
  }

  mobileNavModalOpenHandler = () => {
    this.setState({showMobileNavModal: true});
  }

  mobileNavModalClosedHandler = () => {
    this.setState({showMobileNavModal: false});
  }

    
    render() {

        return(

            <div style={{height: 0}}>

                <TopNavBar hamburgerIconClicked={this.mobileNavModalOpenHandler} />

                <MobileNavModal
                    open={this.state.showMobileNavModal}
                    closed={this.mobileNavModalClosedHandler} 
                />
        
            </div>
                 
        )
    }   
};

export default NavigationContainer;