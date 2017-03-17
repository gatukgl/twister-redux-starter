import { AUTH_LOGIN_SUCCESS } from './types'
import config from '../config'

const { host, port } = config.api
const loginSuccess = ({ username, name, token }) => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: {
    username,
    name,
    token
  }
})

const login = (username, password) => dispatch => {
  const url = `http://${host}:${port}/api/TwisterUsers/login`
  fetch(url, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then(response => {
      if(!response.ok) {
        console.log('Cannot login')
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then(authInfo => {
      console.log('Login successful')
      return dispatch(loginSuccess(authInfo))
    })
    .catch(e => console.log('Cannot login', e))
}

export { login }
