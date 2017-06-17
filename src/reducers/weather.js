import {
  FORECAST_START,
  FORECAST_SUCCESS,
  FORECAST_FAIL,
  CHANGE_CITY_INPUT
} from '../constants/weather'

const initialState = {
  cityInput: '',
  weatherFetching: false,
  list: [],
  city: {}
}

export default function weather (state = initialState, action) {
  switch (action.type) {
    case CHANGE_CITY_INPUT:
      return { ...state, cityInput: action.payload }

    case FORECAST_START:
      return { ...state, weatherFetching: true }

    case FORECAST_FAIL:
      return { ...state, weatherFetching: false }

    case FORECAST_SUCCESS:
      return {
        ...state,
        list: action.payload.list,
        city: action.payload.city
      }

    default:
      return state
  }
}
