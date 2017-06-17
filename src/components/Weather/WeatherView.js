import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import WeatherList from './WeatherList'
import WeatherCurrentDay from './WeatherCurrentDay'

const createForecast = list => {
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

  constructor(props) {
    super(props)
    const { weatherList } = this.props

    this.state = {
      forecast: createForecast(weatherList)
    }
  }

  render() {
    const { weatherList, city } = this.props

    return (
      <div className="weather-view">
        <WeatherCurrentDay currentItem={weatherList[0]} city={city}/>
        <WeatherList list={this.state.forecast} />
      </div>
    )
  }
}

export default WeatherView
