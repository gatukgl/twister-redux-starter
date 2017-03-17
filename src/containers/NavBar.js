import React from 'react'
import { connect } from 'react-redux'
import { push as redirect } from 'connected-react-router'
import NavBar from '../components/NavBar'
import { logout } from '../actions/auth'

const mapStateToProps = state => ({
  token: state.auth.token
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  redirect: url => dispatch(redirect(url)),

})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
