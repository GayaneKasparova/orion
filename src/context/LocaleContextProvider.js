import React, { createContext, useReducer } from "react"

export const LocaleStateContext = createContext()
export const LocaleDispatchContext = createContext()

const initialState = {
  locale: "hy"
}

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LOCALE": {
      return {
        ...state,
        locale: action.value
      }
    }
    default:
      throw new Error("Bad Action Type")
  }
}

const LocaleContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <LocaleStateContext.Provider value={state}>
      <LocaleDispatchContext.Provider value={dispatch} >
        {children}
      </LocaleDispatchContext.Provider>
    </LocaleStateContext.Provider>
  )
}

export default LocaleContextProvider


