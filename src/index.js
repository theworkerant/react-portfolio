import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import Favicon from 'react-favicon'

import favicon from './public/favicon.ico'

const store = createStore(
    rootReducer,
    {},
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Favicon url={favicon} />
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)
