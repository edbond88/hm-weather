import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as weatherActions from '../actions/weather'

import Weather from '../components/Weather/Weather'

const mapStateToProps = state => ({
  weather: state.weather
})

const mapDispatchToProps = dispatch => ({
  weatherActions: bindActionCreators(weatherActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather)
