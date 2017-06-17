import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import './WeatherCurrentDay.css'

class WeatherCurrentDay extends Component {
  static propTypes = {
    currentItem: PropTypes.shape({
      weather: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string,
        main: PropTypes.string
      })),
      main: PropTypes.shape({
        temp: PropTypes.number,
        humidity: PropTypes.number,
        pressure: PropTypes.number,
      }),
      wind: PropTypes.shape({
        speed: PropTypes.number
      })
    }),
    city: PropTypes.shape({
      name: PropTypes.string
    })
  }

  render() {
    const { currentItem, city } = this.props
    const iconUrl = process.env.PUBLIC_URL + '/icons/' + currentItem.weather[0].icon + '.png'
    const forecastDay = moment().format('dddd, HH:mm')

    return (
      <div className="weather-current-item">
        <div className="weather-current-item__head">
          <h2>{city.name}</h2>
          <p>{forecastDay}</p>
          <p>{currentItem.weather[0].main}</p>
        </div>
        <div className="weather-current-item__body">
          <div className="weather-current-item__body__left">
            <div className="weather-current-item__img">
              <img src={iconUrl} alt={currentItem.weather[0].main}/>
            </div>
            <div className="weather-current-item__temp">
              <b>{Math.round(currentItem.main.temp)}</b> <span>°C</span>
            </div>
          </div>

          <div className="weather-current-item__body__right">
            <p><b>Pressure:</b> {Math.round(currentItem.main.pressure)}</p>
            <p><b>Humidity:</b> {currentItem.main.humidity}%</p>
            <p><b>Wind:</b> {Math.round(currentItem.wind.speed)} m/s</p>
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherCurrentDay
