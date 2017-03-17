import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { login } from '../actions/auth'

// LoginForm = (props)
const LoginForm = ({ handleSubmit, login }) => {
  const submitLogin = values => {
    login(values.username, values.password)
  }

  // const mapDispatchToProps = dispatch => ({
  //   login: (username, password) => dispatch(login(username, password)),
  // })

  return (
  <div className="login-form">
    <form onSubmit={handleSubmit(submitLogin)}>
      <div className="form-group">
        <a className="btn btn-primary form-control" href="feed.html">
          Log in with Facebook
        </a>
      </div>
      <div className="login-label">
        Log in with your username
      </div>
      <div className="form-group">
        <Field name="username" component="input" type="text" className="form-control" placeholder="Username" />
      </div>
      <div className="form-group">
        <Field name="password" component="input" type="password" className="form-control" placeholder="Password" />
      </div>
      <div className="form-group text-right">
        <button type="submit" className="btn btn-default">Log in</button>
      </div>
    </form>
  </div>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  login: React.PropTypes.func.isRequired,
}

// export default connect(null, mapDispatchToProps)(LoginReduxForm)
export default connect(null, { login })(LoginReduxForm)
