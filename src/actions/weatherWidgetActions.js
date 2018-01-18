import {
  FORECAST_START,
  FORECAST_SUCCESS,
  FORECAST_FAIL,
  CHANGE_CITY_INPUT
} from '../constants/forecast'

import {
  URL,
  API_KEY
} from '../constants/http'

import {
  serverRequest
} from '../helpers/'

export const getForecast = (opt) => {
  return dispatch => {
    dispatch({
      type: FORECAST_START
    })
    let locationQuery
    let reqUrl

    if (opt.city) {
      locationQuery = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${opt.city}") and u="c"`
      reqUrl = encodeURI(`https://query.yahooapis.com/v1/public/yql?q=${locationQuery}&format=json&env=store://datatables.org/alltableswithkeys`)
    } else if (opt.coords) {
      locationQuery = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="(${opt.coords.lat},${opt.coords.lon})") and u="c"`
      reqUrl = encodeURI(`https://query.yahooapis.com/v1/public/yql?q=${locationQuery}&format=json&env=store://datatables.org/alltableswithkeys`)
    }

    serverRequest({
      url: reqUrl
    }).then((res) => {
      console.log('res', res.query.results.channel)
      res = res.query.results.channel

      dispatch({
        type: FORECAST_SUCCESS,
        payload: {
          item: {
            city: res.location.city,
            country: res.location.country,
            temperature: res.item.condition.temp,
            text: res.item.condition.text,
          },
          list: res.item.forecast,
        }
      })
    })
    .catch((err) => {
      dispatch({
        type: FORECAST_FAIL
      })
      alert('Input valid city name')
    })

  }
}

export const changeCity = (newVal) => {
  return dispatch => {
    dispatch({
      type: CHANGE_CITY_INPUT,
      payload: newVal
    })
  }
}
