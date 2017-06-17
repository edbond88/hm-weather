import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as appDataActions from '../actions/appData'

import App from '../components/App/App'

const mapStateToProps = state => ({
  appDataProps: state.appData
})

const mapDispatchToProps = dispatch => ({
  appDataActions: bindActionCreators(appDataActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
