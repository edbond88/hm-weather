import React, { Component } from 'react'
import './App.css'
import WeatherWidget from '../../containers/WeatherWidget'

class App extends Component {
  render() {
    return (
      <div className="l-app">
        <WeatherWidget />
      </div>
    )
  }
}

export default App
