const initialState = {
  user_id: -1,
  err: '',
  admin: false,
  superUser: false
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
        if (action.payload.user.superUser === true){
          return{
            ...state,
            err: '',
            user_id: action.payload.id,
            admin: true,
            superUser: true
          }
        }
        else if (action.payload.user.admin === true){
          return{
            ...state,
            err: '',
            user_id: action.payload.id,
            admin: true
          }
        }
        else{
          return{
            ...state,
            err: '',
            user_id: action.payload.id
          }
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