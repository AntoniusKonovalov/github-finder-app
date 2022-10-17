import { createContext, useReducer } from 'react'
import { UsersArrayProps } from '../../components/props/props'
import githubReducer from './GithubReducer';

export type GithubContextType = {
  users: UsersArrayProps[];
  isLoading: boolean;
  fetchUsers: Function;
}

const GithubContext = createContext<GithubContextType | null>(null)

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubContextProvider = ({children}:any) => {

  // const [users, setUsers] = useState<UsersArrayProps[]>([{
  //   id: null,
  //   login: '',
  //   avatar_url: '',
  // }])
  // const [isLoading, setIsLoading] = useState<boolean>(true)
  const initialState = {
    users: [],
    isLoading: true
  }

  const [state, dispatch] = useReducer(githubReducer, initialState) 

  const fetchUsers = async() => {
    const response = await fetch(`${GITHUB_URL}/users`,{
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    })

    const data = await response.json()
    // setUsers(data)
    // setIsLoading(false)
    dispatch({
      type: 'GET_USERS', 
      payload: data,
    })
  }


  return (<GithubContext.Provider value={{
    users: state.users,
    isLoading,
    fetchUsers,
  }}>
    {children}
  </GithubContext.Provider>
  )
}

export default GithubContext