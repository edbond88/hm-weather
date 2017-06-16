import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App'
import store from './store'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const target = document.querySelector('#root')

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  target
)


registerServiceWorker()