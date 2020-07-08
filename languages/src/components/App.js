import React, { Component } from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../context/LanguageContext'
import ColourContext from '../context/ColourContext'

export default class App extends Component {
  state = { lang: 'english' };

  onLanguageChange = (lang) => {
    this.setState({ lang });
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language: 
          <i className="flag uk" onClick={() => this.onLanguageChange('english')} />
          <i className="flag es" onClick={() => this.onLanguageChange('spanish')} />
        </div>
        <LanguageContext.Provider value={ this.state.lang }>
          <ColourContext.Provider value='primary'>
            <UserCreate />
          </ColourContext.Provider>
        </LanguageContext.Provider>
      </div>
    )
  }
}