import React, { Component } from 'react';
import NavigationContainer from './components/Navigation/NavigationContainer/NavigationContainer';
import AppBodyContainer from './components/AppBody/AppBodyContainer/AppBodyContainer';


class App extends Component {

  render() {
    return (

      <div>

        <NavigationContainer />

        <AppBodyContainer />
        
      </div>
      
    );
  }
}

export default App;
