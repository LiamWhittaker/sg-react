import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  // Always the first function called when a component is initiialized
  // Not necessary to call this if we don't need any custom setup.
  constructor(props) {
    // Allow parent (React.Component) to do it's constructory things. (First thing in constructor)
    super(props);
    
    // We don't know the latitude at this point so set it to null.
    // This is the only time we directly manipulate state. Otherwise use setState().
    this.state = {lat: null, errorMsg: ''};
    
    // Get the user's location.
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({lat: position.coords.latitude})
      }, //success callback
      (err) => {
        this.setState({errorMsg: err.message})
      }//failure
    );
  };

  // All components require render
  render() {
    if(this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    };

    if(!this.state.errorMsg && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    };

    return <div>Loading...</div>
  };
};

ReactDOM.render(<App />, document.querySelector('#root'));