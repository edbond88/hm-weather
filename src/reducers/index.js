import { combineReducers } from 'redux'

import appData from './appData'
import weather from './weather'

export default combineReducers({
  appData,
  weather
})