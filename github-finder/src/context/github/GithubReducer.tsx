import { UsersArrayProps } from "../../components/props/props";

type Action = {
  type: string;
}

interface userState {
  user: UsersArrayProps;
  isLoading: boolean;
}

const githubReducer = (state:userState, action:Action) => {
  switch(action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        isLoading: false
      }
    default: 
      return state
  }
}

export default githubReducer