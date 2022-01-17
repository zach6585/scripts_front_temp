const initialState = {
  user_id: -1,
  err: ''
}



export default function userReducer(state = initialState, action) {
    /*
    This reducer will do one thing (Based on two separate actions):
    1) Loads up only the pages pertaining to the script chosen
    
    */
    switch (action.type) {
      //Number 1 from above is accomplished through LOADING and SUCCESS
      case 'ERRORS_FOUND':
        return {
          ...state,
          err: action.payload,
          user_id: -1
        }
      case 'USER_SUCCESS':
        return{
          ...state,
          err: '',
          user_id: action.payload
        }
      case 'CHANGE_PAGE':
        return{
          ...state,
          err: ''
        }
      case 'LOGOUT':
        return{
          ...state,
          user_id: -1
        }
      default:
        // If the reducer doesn't care about this action type,
        // return the existing state unchanged
        return state
    }
  }