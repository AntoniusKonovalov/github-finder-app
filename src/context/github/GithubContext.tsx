import { createContext, useReducer } from 'react';
import githubReducer, { User_LoaderState } from './GithubReducer';

export type GithubContextType = {
  state?: any;
  dispatch: Function;
}
const GithubContext = createContext<GithubContextType | null>(null)

export const GithubContextProvider = ({children}:any) => {
  const initialState:User_LoaderState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState) 

  return (
      <GithubContext.Provider value={{
        ...state,
        dispatch,
        }}>
          {children}
      </GithubContext.Provider>
  )
}

export default GithubContext