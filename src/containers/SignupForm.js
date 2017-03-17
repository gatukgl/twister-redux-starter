import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { signup } from '../actions/signup'

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitSignup = this.submitSignup.bind(this)
  }

  submitSignup = values => {
    this.props.signup(
      values.username,
      values.name,
      values.email,
      values.password,
    )
  }

  render() {
    return (
      <div className="signup-form">
        <div className="logo text-center">Sign up</div>
        <form onSubmit={this.props.handleSubmit(this.submitSignup)}>
          <div className="form-group">
            <Field name="username" component="input" type="text" className="form-control" placeholder="Username" />
          </div>
          <div className="form-group">
            <Field name="name" component="input" type="text" className="form-control" placeholder="Firstname" />
          </div>
          <div className="form-group">
            <Field name="email" component="input" type="email" className="form-control" placeholder="youremail@email.com" />
          </div>
          <div className="form-group">
            <Field name="password" component="input" type="password" className="form-control" placeholder="Password" />
          </div>
          <div className="form-group text-right">
            <button type="submit" className="btn btn-default">Sign up!!!</button>
          </div>
        </form>
      </div>
    )
  }
}

const SignupReduxForm = reduxForm({
  form: 'signup'
})(SignupForm)

export default connect(null, { signup })(SignupReduxForm)
