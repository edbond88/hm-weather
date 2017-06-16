import React, { Component } from 'react'
import './App.css'
import Header from '../../components/Header/Header'

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
        <Header />
        <div className="l-body">
          weather start app
        </div>
      </div>
    )
  }
}

export default App
