import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as weatherWidgetActions from '../actions/weatherWidgetActions'

import WeatherWidget from '../components/WeatherWidget/WeatherWidget'

const mapStateToProps = state => ({
  forecast: state.forecast
})

const mapDispatchToProps = dispatch => ({
  weatherWidgetActions: bindActionCreators(weatherWidgetActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherWidget)
