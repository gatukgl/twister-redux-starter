import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from '../actions/types'

const initState = {
  name: '',
  username: '',
  token: ''
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS: {
      const { username, name, token } = action.payload //easy to read after
      return {
        username,
        name,
        token,
      }
    }
    case AUTH_LOGOUT: {
      return { ...initState }
    }
    default: {
      return state
    }
  }
}

export default authReducer
