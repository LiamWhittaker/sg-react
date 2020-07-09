import React, { Component }  from 'react';

//default context is 'english'
const Context = React.createContext('english');

export class LanguageStore extends Component {
  state = {lang: 'english'};

  onLanguageChange = (lang) => {
    this.setState({lang});
  }

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context;