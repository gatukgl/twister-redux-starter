import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import rootReducer from './reducers'

import './styles/custom.scss'
import './styles/main.scss'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const history = createBrowserHistory()
const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancers(
    applyMiddleware(routerMiddleware(history), thunk)
  )
)

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
