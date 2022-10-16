import { createContext, useState } from 'react'
import { UsersArrayProps } from '../../components/props/props'

export type GithubContextType = {
  users: UsersArrayProps[];
  isLoading: boolean;
  fetchUsers: Function;
}

const GithubContext = createContext<GithubContextType | null>(null)

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubContextProvider = ({children}:any) => {

  const [users, setUsers] = useState<UsersArrayProps[]>([{
    id: null,
    login: '',
    avatar_url: '',
  }])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchUsers = async() => {
    const response = await fetch(`${GITHUB_URL}/users`,{
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    })

    const data = await response.json()
    setUsers(data)
    setIsLoading(false)
  }


  return (<GithubContext.Provider value={{
    users,
    isLoading,
    fetchUsers,
  }}>
    {children}
  </GithubContext.Provider>
  )
}

export default GithubContext