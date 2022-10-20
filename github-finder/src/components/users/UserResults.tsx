import { useContext } from 'react'
import GithubContext, { GithubContextType } from '../../context/github/GithubContext';
import { UsersArrayProps } from '../../context/github/GithubReducer';
import Spinner from '../shared/Spinner';
import UserItem from './UserItem';


const UserResults = () => {
//@ts-ignore
const { users, isLoading } = useContext(GithubContext) as GithubContextType


  if(!isLoading) {
    return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {users.map((user:UsersArrayProps) => (
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
 
