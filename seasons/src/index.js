import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

  state = {lat: null, errorMsg: ''}; // Babel will do the constructor stuff for us.

  componentDidMount() {
    // Get the user's location.
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({lat: position.coords.latitude}), //success callback
      (err) => this.setState({errorMsg: err.message}) //failure
    );
  }
  
  // avoid conditionals in render method -- extract to helper method
  renderContent(){
    if(this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    };

    if(!this.state.errorMsg && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>;
    };

    return <Spinner message="Please accept location request!"/>
  }

  render() {
    return(
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  };
};

ReactDOM.render(<App />, document.querySelector('#root'));