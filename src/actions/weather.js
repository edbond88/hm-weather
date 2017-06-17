import {
  FORECAST_START,
  FORECAST_SUCCESS,
  FORECAST_FAIL,
  CHANGE_CITY_INPUT
} from '../constants/weather'

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
    let reqUrl
    // const reqUrl = process.env.PUBLIC_URL + '/forecast.json'
    if (opt.city) {
      reqUrl = `${URL.forecast}?q=${opt.city}&APPID=${API_KEY}&units=metric`
    } else if (opt.coords) {
      reqUrl = `${URL.forecast}?lat=${opt.coords.lat}&lon=${opt.coords.lon}&APPID=${API_KEY}&units=metric`
    }

    serverRequest({
      // test response
      // method: 'GET',
      url: reqUrl
    }).then((res) => {
      dispatch({
        type: FORECAST_SUCCESS,
        payload: res
      })
    })
    .catch((err) => {
      dispatch({
        type: FORECAST_FAIL
      })
      alert('Type valid city')
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
