import React, { Component } from 'react'
import LanguageContext from '../context/LanguageContext'

export default class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context)
    return (
      <div>
        Select a language: 
        <i className="flag uk" onClick={() => this.context.onLanguageChange('english')} />
        <i className="flag es" onClick={() => this.context.onLanguageChange('spanish')} />
      </div>
    )
  }
}
