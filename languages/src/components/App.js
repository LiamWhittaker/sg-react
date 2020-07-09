import React, { Component } from 'react'
import UserCreate from './UserCreate'
import {LanguageStore} from '../context/LanguageContext'
import ColourContext from '../context/ColourContext'
import LanguageSelector from './LanguageSelector';

export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColourContext.Provider value='primary'>
            <UserCreate />
          </ColourContext.Provider>
        </LanguageStore>
      </div>
    )
  }
}