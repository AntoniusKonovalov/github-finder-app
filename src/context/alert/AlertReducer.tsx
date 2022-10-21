
export type Action = {
  type: string;
  payload: object | null;
}


const alertReducer = (state:any , action:Action ) => {
  switch(action.type) {
    case 'SET_ALERT':
      return action.payload
    case 'REMOVE_ALERT':
      return null 
      default:
        return state
  }
}

export default alertReducer