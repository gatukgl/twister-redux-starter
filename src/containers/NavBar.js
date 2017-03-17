import React from 'react'
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import { logout } from '../actions/auth'

const mapStateToProps = state => ({
  token: state.auth.token
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
