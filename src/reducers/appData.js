import {
  APP_INIT
} from '../constants/appData'

const initialState = {
  isInit: false
}

export default function appData (state = initialState, action) {
  switch (action.type) {
    case APP_INIT:
      return { ...state, isInit: true }

    default:
      return state
  }
}
