import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './WeatherWidget.css'

import WeatherView from './WeatherView'

class WeatherWidget extends Component {
  static propTypes = {
    weatherWidgetActions: PropTypes.shape({
      getForecast: PropTypes.func.isRequired,
      changeCity: PropTypes.func.isRequired
    }),
    forecast: PropTypes.shape({
      cityInput: PropTypes.string.isRequired,
      list: PropTypes.array.isRequired,
      city: PropTypes.object.isRequired
    }).isRequired
  }

  componentDidMount() {
    const {
      weatherWidgetActions: {
        getForecast
      }
    } = this.props

    navigator.geolocation.getCurrentPosition(function(position) {
      getForecast({
        coords: {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }
      })
    })

  }

  changeCityInput = e => {
    const {
      weatherWidgetActions: {
        changeCity
      }
    } = this.props
    const val = e.target.value

    changeCity(val)
  }

  submitForm = e => {
    e.preventDefault()
    const {
      weatherWidgetActions: {
        getForecast
      }
    } = this.props
    const FD = new FormData(e.target)
    const val = FD.get('city')

    getForecast({
      city: val
    })
  }

  render() {
    const {
      forecast: {
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

export default WeatherWidget
