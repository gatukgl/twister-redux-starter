import React from 'react'
import { push as redirect } from 'connected-react-router'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { login } from '../actions/auth'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitLogin = this.submitLogin.bind(this)
  }

  submitLogin = values => {
    this.props.login(values.username, values.password)
  }

  componentWillMount() {
    if (this.props.token) {
      this.props.redirect('/')
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.token) {
      this.props.redirect('/')
    }
  }

  render() {
    return (
    <div className="login-form">
      <form onSubmit={this.props.handleSubmit(this.submitLogin)}>
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
}

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  login: React.PropTypes.func,
  redirect: React.PropTypes.func.isRequired,
  token: React.PropTypes.string,
}

const mapStateToProps = state => ({
  token: state.auth.token,
})

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

// export default connect(null, mapDispatchToProps)(LoginReduxForm)
export default connect(mapStateToProps, { login, redirect })(LoginReduxForm)
