import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import './ForecastList.css'

class ForecastList extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string,
      day: PropTypes.string,
      high: PropTypes.string,
      low: PropTypes.string,
      text: PropTypes.string,
    }))
  }

  render() {
    const { list } = this.props

    return (
      <div className="weather-list-items">
        {list.map( (day, dayIdx) => {
          return (
            <div className="weather-list-item" key={dayIdx}>
              <h3>{`${day.date}, ${day.day}`}</h3>
              <h4>{day.text}</h4>
              <div className="weather-list-hour">
                <span className="weather-list-temp">{`Min: ${day.low}°C, Max:${day.high}°C`}</span>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ForecastList
