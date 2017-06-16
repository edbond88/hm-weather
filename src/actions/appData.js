import {
  APP_INIT
} from '../constants/appData'

export const appInit = () => {
  return dispatch => {
    dispatch({
      type: APP_INIT
    })
  }
}
