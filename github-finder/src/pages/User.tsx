import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GithubContext, { GithubContextType } from '../context/github/GithubContext'


const User = () => {
  const {user, getUser} =useContext(GithubContext) as GithubContextType
  const params = useParams()
  console.log(params.login)

  useEffect(() => {
    getUser(params.login)
    // getUserRepos(params.login)
  }, [])

  return (
    <div> 
      {/* @ts-ignore */}
      <h1>{user.login}</h1>
    </div>
  )
}

export default User
