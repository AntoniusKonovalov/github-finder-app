import { UsersArrayProps } from "../../components/props/props";

export type Action = {
  type: string;
  payload: UsersArrayProps[];
}

export interface User_LoaderState {
  users: UsersArrayProps[];
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