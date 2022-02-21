const initialState = {
  user_id: -1,
  err: '',
  lastPage: null,
  lastScript: null,
  lastMentee: null
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
          user_id: action.payload.id,
          lastPage: action.payload.last_page_number,
          lastScript: action.payload.last_script_number,
          lastMentee: action.payload.last_mentee_id
        }
        
      case 'CHANGE_USER_PAGE':
        return{
          ...state,
          lastPage: action.payload
        }
      
      case 'CHANGE_USER_SCRIPT':
        return{
          ...state,
          lastScript: action.payload
        }

      case 'CHANGE_USER_MENTEE':
        console.log('here')
        return{
          ...state,
          lastMentee: action.payload
        }

      case 'LOGOUT':
        return{
          ...state,
          user_id: -1,
          err: '',
          lastPage: null,
          lastScript: null,
          lastMentee: null
        }
      default:
        // If the reducer doesn't care about this action type,
        // return the existing state unchanged
        return state
    }
  }