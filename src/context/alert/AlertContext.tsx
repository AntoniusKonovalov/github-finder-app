import { createContext, useReducer } from 'react'
import alertReducer from './AlertReducer';

export type AlertContextType = {
  alert: {
    type:string,
    msg:string,
  };
  setAlert: Function;
}

const AlertContext = createContext<AlertContextType | null>(null)

export const AlertContextProvider = ({children}:any) => {


  const initialState = null

  const [state, dispatch] = useReducer(alertReducer, initialState)

  
  const setAlert = (msg:string, type:string) => {
    dispatch({
      type: 'SET_ALERT',
      payload: {msg, type}
    })

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT', payload: {}}), 3000)
  }


  return (<AlertContext.Provider value= {{
    alert: state,
    setAlert
  }}>
    {children}
    </AlertContext.Provider>
  )
}

export default AlertContext

