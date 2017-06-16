import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <header className="l-header">
        <div className="l-in">
          <div className="l-header__left">
          </div>
          <div className="l-header__center">
            <span className="date-title">Weather</span>
          </div>
          <div className="l-header__right">
          </div>
        </div>
      </header>
    )
  }
}

export default Header
