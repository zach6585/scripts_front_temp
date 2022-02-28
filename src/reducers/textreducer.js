import { TEXTS_LOADING, TEXTS_SUCCESS } from '../actions/text';
const initialState = {
  texts_loading: false,
  error: "",
  curatedTextsFromCurrentScript: null,
  currentScript: ""
}

export function textReducer(state = initialState, action) {
    /*
    This reducer will do two things: 
    1) Will update the text values saved to the store so that we don't have to make multiple axios calls and 
    2) Will get the initial texts needed in store so that we only have to look through texts with the same script so the time checking isn't as long
    Initial state will be all of the texts that are gotten through axios.
    */
    switch (action.type) {
      //Number 2 from above are accomplished through LOADING and SUCCESS
      case TEXTS_LOADING:
        return {
          ...state,
          texts_loading: true,
          err: '',
          curatedTextsFromCurrentScript: null

        }
      case TEXTS_SUCCESS:
        return {
          ...state,
          texts_loading: false,
          err: '',
          curatedTextsFromCurrentScript: action.payload.texts,
          currentScript: action.payload.script_number
        }

      case 'TEXT_UPDATED': //Number 1 from above
        return {
          ...state,
          curatedTextsFromCurrentScript: state.curatedTextsFromCurrentScript.map(element => 
            element.id_tag === action.payload.id_tag ? {...element, value: action.payload.value} : element)
         } //Here we will have to have given the action a new text value which would be easy to get
      
        case 'TEXT_CREATED': //Also number 1 from above but for posting instead of patching
        return {
          ...state, 
          curatedTextsFromCurrentScript: [...state.curatedTextsFromCurrentScript, action.payload]
        }
      
        case 'CHANGE_SCRIPT':
        return{
          ...state,
          curatedTextsFromCurrentScript: null,
          currentScript: ""
        }
      
      default:
        // If the reducer doesn't care about this action type,
        // return the existing state unchanged
        return state
    }
  }

