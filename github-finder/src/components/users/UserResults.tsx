import { useContext, useEffect} from 'react'
import GithubContext, { GithubContextType } from '../../context/github/GithubContext';
import Spinner from '../shared/Spinner';
import UserItem from './UserItem';


const UserResults = () => {
const { users, isLoading, fetchUsers } = useContext(GithubContext) as GithubContextType

useEffect(() => {
  fetchUsers()
}, [])

  if(!isLoading) {
    return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {users.map((user) => (
        <UserItem key={user.id} user={user}/>
      ))}
    </div>
  )} else {
    return (
    <>
      {isLoading ? <Spinner /> : null}
    </>)
  }
}
  export default UserResults
 
