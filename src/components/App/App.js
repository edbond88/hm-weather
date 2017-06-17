import React, { Component } from 'react'
import './App.css'
import Weather from '../../containers/Weather'

class App extends Component {
  _appInit () {
    const {
      appDataActions: {
        appInit
      }
    } = this.props

    appInit()
  }

  componentWillMount() {
    if (!this.props.appDataProps.isInit) {
      this._appInit()
    }
  }

  render() {
    return (
      <div className="l-app">
        <Weather />
      </div>
    )
  }
}

export default App
