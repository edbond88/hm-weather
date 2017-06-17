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

export const getForecast = (location) => {
  return dispatch => {
    dispatch({
      type: FORECAST_START
    })

    const reqUrl = `${URL.forecast}?q=${location}&APPID=${API_KEY}&units=metric`
    // const reqUrl = process.env.PUBLIC_URL + '/forecast.json'

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
