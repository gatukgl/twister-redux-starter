import { AUTH_LOGIN_SUCCESS } from '../actions/types'

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
    default: {
      return state
    }
  }
}

export default authReducer
