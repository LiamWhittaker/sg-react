import React, { Component } from 'react'
import LanguageContext from '../context/LanguageContext'
import ColourContext from '../context/ColourContext'

export default class Button extends Component {
  renderButton(colour) {
    return (
      <button className={`ui button ${colour}`}>
        <LanguageContext.Consumer>
          { (value) => value === 'english' ? 'Submit' : 'Enviar' }
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    return (
      <ColourContext.Consumer>
        { (colour) => this.renderButton(colour) }
      </ColourContext.Consumer>
    )
  }
}
