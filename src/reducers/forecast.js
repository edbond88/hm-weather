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
  item: {}
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
    console.log('action.payload', action.payload)
      return {
        ...state,
        list: action.payload.list,
        item: action.payload.item,
        isForecastFetching: false
      }

    default:
      return state
  }
}
