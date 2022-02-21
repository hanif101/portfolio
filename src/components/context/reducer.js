/* eslint-disable */
import { SIGNEDIN_USER } from './action-type'

const reducer = (store, action) => {
  switch (action.type) {
  /*  */
  case SIGNEDIN_USER: {
    return action.payload === null ? { ...store } : { ...store, signedin_user: action.payload }
  }

  default: {
    return store
  }
  }
}

export default reducer
