import { push as redirect } from 'connected-react-router'
import config from '../config/'

const { host, port } = config.api
const signup = (username, name, email, password) => dispatch => {
  console.log('signup', username, name, email, password)
  const url = `http://${host}:${port}/api/TwisterUsers`
  fetch(url, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify({
      username,
      name,
      password,
      email,
    }),
  })
    .then(response => {
      if(!response.ok) {
        throw Error(response.statusText)
      }
      console.log('signup success')
      return response.json()
    })
    .then(() => dispatch(redirect('/login')))
    .catch(e => console.log('signup error', e))
}

export { signup }
