

export type Action = {
  type: string;
  payload: UsersArrayProps[];
}

export interface UserProps{
  login?: string;
}

export interface UsersArrayProps {
  id: number | null;
  login: string;
  avatar_url: string;
}
export interface User_LoaderState {
  users: UsersArrayProps[];
  user: UserProps | object;
  isLoading: boolean;
}

const githubReducer = (state:User_LoaderState, action:Action) => {
  switch(action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        isLoading: false
      }
      case 'GET_USER':
        return {
          ...state,
          user: action.payload,
          isLoading: false
        }
      case 'SET_LOADING':
        return {
          ...state,
          isLoading: true
        }
      case 'CLEAR_USERS':
        return {
          ...state,
          users: action.payload, 
        }
    default: 
      return state
  }
}

export default githubReducer