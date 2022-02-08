import { CHANGES_LOADING, CHANGES_SUCCESS } from '../actions/change';
const initialState = {
  loading: false,
  error: "",
  changesFromCurrentScript: null,
  currentScript: ""
}

export function changeReducer(state = initialState, action) {
    /*
    This reducer will do two things: 
    1) Will update the changed p/h1/etc. values saved to the store so that we don't have to make multiple axios calls and 
    2) Will get the initial changed p/h1/etc. needed in store so that we only have to look through texts with the same script so the time checking isn't as long
    Initial state will be all of the changed things that are gotten through axios.
    */
    switch (action.type) {
      //Number 2 from above are accomplished through LOADING and SUCCESS
      case CHANGES_LOADING:
        return {
          ...state,
          loading: true,
          err: '',
          changesFromCurrentScript: null

        }
      case CHANGES_SUCCESS:
        return {
          ...state,
          loading: false,
          err: '',
          changesFromCurrentScript: action.payload.changes,
          currentScript: action.payload.script_number
        }

      case 'CHANGE_UPDATED': //Number 1 from above
        return {
          ...state,
          changesFromCurrentScript: state.changesFromCurrentScript.map(element => 
            element.id_tag === action.payload.id_tag ? {...element, content: action.payload.content} : element)
         } //Here we will have to have given the action a new text value which would be easy to get
      
        case 'CHANGE_CREATED': //Also number 1 from above but for posting instead of patching
        return {
          ...state, 
          changesFromCurrentScript: [...state.changesFromCurrentScript, action.payload]
        }
      
        case 'SWITCH_CHANGE_LIST':
        return{
          ...state,
          changesFromCurrentScript: null,
          currentScript: ""
        }
      
      default:
        // If the reducer doesn't care about this action type,
        // return the existing state unchanged
        return state
    }
  }

