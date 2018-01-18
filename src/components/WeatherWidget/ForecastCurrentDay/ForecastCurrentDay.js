import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import './ForecastCurrentDay.css'

class ForecastCurrentDay extends Component {
  static propTypes = {
    item: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
      temperature: PropTypes.string,
      text: PropTypes.string,
    })
  }

  render() {
    const { currentItem, item } = this.props
    // const iconUrl = process.env.PUBLIC_URL + '/icons/' + currentItem.weather[0].icon + '.png'
    const forecastDay = moment().format('dddd, HH:mm')

    return (
      <div className="weather-current-item">
        <div className="weather-current-item__head">
          <h2>{`${item.city}, ${item.country}`}</h2>
          <p>{item.text}</p>
        </div>
        <div className="weather-current-item__body">
          <div className="weather-current-item__body__left">
            <div className="weather-current-item__temp">
              <b>{item.temperature}</b> <span>°C</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ForecastCurrentDay
