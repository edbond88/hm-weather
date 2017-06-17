import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import './ForecastList.css'

class ForecastList extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
      dt_txt: PropTypes.string,
      weather: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string,
        main: PropTypes.string
      })),
      main: PropTypes.shape({
        temp: PropTypes.number
      })
    })))
  }

  render() {
    const { list } = this.props

    return (
      <div className="weather-list-items">
        {list.map( (day, dayIdx) => {
          const dateDay = moment(day[0].dt_txt).format('dddd')
          return (
            <div className="weather-list-item" key={dayIdx}>
              <h3>{dateDay}</h3>
              {day.map( (hour, hourIdx) => {
                const iconUrl = process.env.PUBLIC_URL + '/icons/' + hour.weather[0].icon + '.png'
                return (
                  <div className="weather-list-hour" key={hourIdx}>
                    <span className="weather-list-time">{moment(hour.dt_txt).format('HH:mm')}</span>
                    <span className="weather-list-temp">{Math.round(hour.main.temp)}°C</span>
                    <span className="weather-list-img"><img src={iconUrl} alt={hour.weather[0].main}/></span>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

export default ForecastList
