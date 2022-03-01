import React, { createContext, useReducer } from 'react'
import reducer from './reducer'

const StoreContext = createContext()

// Store
const initialStore = { signedin_user: null, all_rooms: [], active_room: [], active_users: [] }

export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialStore)

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContext
