import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import ForecastList from './ForecastList/ForecastList'
import ForecastCurrentDay from './ForecastCurrentDay/ForecastCurrentDay'

/**
 * Creating array of days, that contain
 * items with forecast for every 3 hours
 * @param  {array} list
 * @return {array}
 */
const createSeveralDaysForecast = list => {
  const currentDay = moment().date()
  let newForecast = []
  let i = 0

  list.forEach( (item, idx) => {
    const day = moment(item.dt_txt).date()
    const newForecastLength = newForecast.length
    let lastItemInDay
    let dayOfLastItem

    if (day === currentDay) return false

    if (!newForecastLength) {
      newForecast.push([item])
    } else {
      lastItemInDay = newForecast[i][newForecast[i].length - 1]
      dayOfLastItem = moment(lastItemInDay.dt_txt).date()

      if (day > dayOfLastItem) {
        newForecast.push([item])
        i++
      } else {
        newForecast[i].push(item)
      }
    }
  })

  return newForecast
}

class WeatherView extends Component {
  static propTypes = {
    weatherList: PropTypes.array.isRequired,
    city: PropTypes.object.isRequired
  }

  render() {
    const { weatherList, city } = this.props

    // First item in array - current day and current time
    const currentItem = weatherList[0]

    return (
      <div className="weather-view">
        <ForecastCurrentDay currentItem={currentItem} city={city}/>
        <ForecastList list={createSeveralDaysForecast(weatherList)} />
      </div>
    )
  }
}

export default WeatherView
