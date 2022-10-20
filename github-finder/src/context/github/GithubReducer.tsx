
export type Action = {
  type: string;
  payload: any;
}

export interface UserProps{
  name?: string;
  type?: string;
  avatar_url?: string;
  location?: string;
  bio?: string;
  blog?: string;
  twitter_username?: string;
  login?: string;
  html_url?: string;
  followers?: string;
  following?: string;
  public_repos?: string;
  public_gists?: string;
  hireable?: boolean;
} 

export interface UsersArrayProps {
  id: number | null;
  login: string;
  avatar_url: string;
}

export interface ReposUserProps {
  id:number;
  name: string;
  description: string;
  html_url: string;
  forks: string;
  open_issues: string;
  watchers_count: string;
  stargazers_count: string;
}

export interface User_LoaderState {
  users: UsersArrayProps[];
  user: UserProps | object;
  repos: ReposUserProps[];
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
      case 'GET_REPOS':
        return{
          ...state,
          repos: action.payload,
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
          users: [], 
        }
    default: 
      return state
  }
}

export default githubReducer