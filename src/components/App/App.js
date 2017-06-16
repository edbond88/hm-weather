import React, { Component } from 'react'

import './App.css'

import Header from '../Header/Header'

const defautlState = {
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = defautlState
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
