import { createContext, useReducer } from 'react';
import { FaWindows } from 'react-icons/fa';
import githubReducer, { ReposUserProps, UserProps, UsersArrayProps, User_LoaderState } from './GithubReducer';

export type GithubContextType = {
  users: UsersArrayProps[];
  user: UserProps;
  repos: ReposUserProps;
  isLoading: boolean;
  searchUsers: Function;
  handleClearUsers: Function;
  getUser: Function;
  getUserRepos: Function;
}
const GithubContext = createContext<GithubContextType | null>(null)

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubContextProvider = ({children}:any) => {
  const initialState:User_LoaderState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState) 

  // Get search results
  const searchUsers = async(text:string) => {
    setLoading()
    const params = new URLSearchParams({
      q: text
    })
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      // headers: {
      //   Authorization: `token ${GITHUB_TOKEN}`
      // }
    })
    const {items} = await response.json()
    dispatch({
      type: 'GET_USERS', 
      payload: items,
    })
  }

    // Get single user
    const getUser = async(login:string) => {
      console.log('this is login', login)
      setLoading()
      const response = await fetch(`${GITHUB_URL}/users/${login}`, {
        // headers: {
        //   Authorization: `token ${GITHUB_TOKEN}`
        // }
      })

      if(response.status === 404) {
        const win: Window = window;
        win.location = ('/notfound')
      } else {
        const data = await response.json()
        console.log('hello', data)

        dispatch({
          type: 'GET_USER', 
          payload: data,
        })
      }
    }

  //Get user repos
  const getUserRepos = async(login:string) => {
    setLoading()

    // @ts-ignore
    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    }) 

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
      // headers: {
      //   Authorization: `token ${GITHUB_TOKEN}`
      // }
    })
    const data = await response.json()
    dispatch({
      type: 'GET_REPOS', 
      payload: data,
    })
  }

  const handleClearUsers = () => {
    dispatch({
      type: 'CLEAR_USERS',
      payload: []
    })
  }

    // Set loading
    const setLoading = () => dispatch({
      type: 'SET_LOADING',
      payload: []
    })

  return (
      <GithubContext.Provider value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        isLoading: state.isLoading,
        getUser,
        searchUsers,
        handleClearUsers,
        getUserRepos,
        }}>
          {children}
      </GithubContext.Provider>
  )
}

export default GithubContext