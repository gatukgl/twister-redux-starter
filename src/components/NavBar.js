import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ token, logout, redirect }) => {
  const signup = () => {
    console.log('sign up')
    redirect('/signup')
  }

  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand">Twister</Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          { token ?
              (
                <div className="navbar-form navbar-right" role="logout">
                  <button className="btn btn-default" onClick={() => logout()}>Logout</button>
                </div>
              )
              : (
                <div className="navbar-form navbar-right">
                  <button className="btn btn-primary" onClick={signup}>Sign up</button>
                </div>
              )
          }
        </div>
      </div>
    </nav>
  )
}

export default NavBar
