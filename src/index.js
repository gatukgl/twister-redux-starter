import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import rootReducer from './reducers'
import { loader } from './utils/localStorage'
import { loadState, saveState } from './utils/localStorage'
import throttle from 'lodash.throttle'

import './styles/custom.scss'
import './styles/main.scss'
import App from './components/App'

const preloadedState = loadState()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const history = createBrowserHistory()

const store = createStore(
  connectRouter(history)(rootReducer),
  preloadedState,
  composeEnhancers(
    applyMiddleware(routerMiddleware(history), thunk)
  )
)

store.subscribe(throttle(() => {
  saveState({
    auth: store.getState().auth,
  })
}), 1000)

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('react-root'))
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}
