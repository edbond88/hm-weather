import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Weather.css'

import WeatherView from './WeatherView'

class Weather extends Component {
  static propTypes = {
    weatherActions: PropTypes.shape({
      getForecast: PropTypes.func.isRequired,
      changeCity: PropTypes.func.isRequired
    }),
    weather: PropTypes.shape({
      cityInput: PropTypes.string.isRequired,
      list: PropTypes.array.isRequired,
      city: PropTypes.object.isRequired
    }),
  }

  componentWillMount() {
    const {
      weatherActions: {
        getForecast
      }
    } = this.props

    // getForecast('London')
  }

  changeCityInput = e => {
    const {
      weatherActions: {
        changeCity
      }
    } = this.props
    const val = e.target.value

    changeCity(val)
  }

  submitForm = e => {
    e.preventDefault()
    const {
      weatherActions: {
        getForecast
      }
    } = this.props
    const FD = new FormData(e.target)
    const val = FD.get('city')

    getForecast(val)
  }

  render() {
    const {
      weather: {
        cityInput,
        list,
        city
      }
    } = this.props

    return (
      <div className="b-weather">
        <form className="b-weather__form" onSubmit={this.submitForm} method="POST">
          <div className="b-weather__form-row">
            <input
              className="b-weather__input"
              type="text"
              placeholder="Type your city"
              value={cityInput}
              name="city"
              onChange={this.changeCityInput}
              required/>
            <input
              className="b-weather__submit"
              type="submit"
              value="Show weather"/>
          </div>
        </form>

        <div className="b-weather__view">
          {list.length
            ? <WeatherView weatherList={list} city={city}/>
            : null
          }
        </div>

      </div>
    )
  }
}

export default Weather
