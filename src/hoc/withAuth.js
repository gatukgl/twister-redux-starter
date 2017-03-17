import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { push as redirect } from 'connected-react-router'

const withAuth = NoAuthComponent => {
  class WithAuthComponent extends Component {
    componentWillMount() {
      if (!this.props.token) {
        this.props.redirect('/login')
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.token) {
        this.props.redirect('/login')
      }
    }

    render() {
      return (
        <NoAuthComponent {...this.props} />
      )
    }
  }

  WithAuthComponent.propTypes = {
    token: PropTypes.string,
    redirect: PropTypes.func.isRequired,
  }

  WithAuthComponent.defaultProps = {
    token: ''
  }

  const mapStateToProps = state => ({
    token: state.auth.token
  })
  return connect(mapStateToProps, { redirect })(WithAuthComponent)
}

export default withAuth
