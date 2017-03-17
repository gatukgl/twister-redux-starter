import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import MainLayout from '../layouts/MainLayout'
import BodyContainer from './BodyContainer'
import LoginForm from '../containers/LoginForm'
import SignupForm from '../containers/SignupForm'
import WithAuth from '../hoc/withAuth'

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={WithAuth(BodyContainer)} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/:ownerUsername" component={BodyContainer} />
      </Switch>
    </MainLayout>
  </ConnectedRouter>
)

App.propTypes = {
  history: React.PropTypes.object.isRequired,
}

export default App
