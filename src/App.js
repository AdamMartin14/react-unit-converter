import React, { Component } from 'react';
import TopNavBar from './components/Navigation/TopNavBar/TopNavBar';
import MobileNavModal from './components/Navigation/TopNavBar/MobileNavModal/MobileNavModal';

class App extends Component {

  // SIDEDRAWER OPEN/ CLOSE LOGIC
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
    return (
      <div style={{height: 0}}>

        <TopNavBar hamburgerIconClicked={this.mobileNavModalOpenHandler} />

        <MobileNavModal
            open={this.state.showMobileNavModal}
            closed={this.mobileNavModalClosedHandler} 
        />
        
      </div>
    );
  }
}

export default App;
