import {
  FORECAST_START,
  FORECAST_SUCCESS,
  FORECAST_FAIL,
  CHANGE_CITY_INPUT
} from '../constants/forecast'

const initialState = {
  cityInput: '',
  isForecastFetching: false,
  list: [],
  city: {}
}

export default function forecast (state = initialState, action) {
  switch (action.type) {
    case CHANGE_CITY_INPUT:
      return { ...state, cityInput: action.payload }

    case FORECAST_START:
      return { ...state, isForecastFetching: true }

    case FORECAST_FAIL:
      return { ...state, isForecastFetching: false }

    case FORECAST_SUCCESS:
      return {
        ...state,
        list: action.payload.list,
        city: action.payload.city,
        isForecastFetching: false
      }

    default:
      return state
  }
}
