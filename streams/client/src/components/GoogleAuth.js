import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions'

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    // const clientId = '565511184607-mbjtla75jg45feb9l622fb1t9fa4qtv0.apps.googleusercontent.com';

    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '565511184607-mbjtla75jg45feb9l622fb1t9fa4qtv0.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
        this.auth.isSignedIn.listen(this.onAuthChange)
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    if(isSignedIn) {
      this.props.signIn()
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if(this.state.isSignedIn === null) {
      return null
    } else if(this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon"></i>
          Sign Out
        </button>
      )
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon"></i>
          Sign in with Google
        </button>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()} 
      </div>
    )
  }
}

export default connect(
  null,
  {signIn, signOut}
)(GoogleAuth);