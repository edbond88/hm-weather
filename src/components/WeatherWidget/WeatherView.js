import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import ForecastList from './ForecastList/ForecastList'
import ForecastCurrentDay from './ForecastCurrentDay/ForecastCurrentDay'

class WeatherView extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    item: PropTypes.object.isRequired
  }

  render() {
    const { list, item } = this.props

    return (
      <div className="weather-view">
        <ForecastCurrentDay item={item}/>
        <ForecastList list={list} />
      </div>
    )
  }
}

export default WeatherView
