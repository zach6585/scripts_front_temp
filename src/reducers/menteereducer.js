
const initialState = {
    mentees: null,
    current_mentee_id: -1,
    lastScript: -1,
    lastPage: -1,
    current_mentee_name: "",
    err: ''
}

export default function menteeReducer(state = initialState, action){
    switch(action.type){
        case 'GET_MENTEES':
            return {
                ...state, 
                mentees: action.payload
            }
        case 'MENTEE_CHOSEN':
            return{
                ...state,
                current_mentee_id: action.payload.id,
                current_mentee_name: action.payload.name

            }
        case 'CREATE_MENTEE':
            if (state.mentees === null){
                return{
                    ...state,
                    mentees: action.payload,
                    current_mentee_id: action.payload.id,
                    current_mentee_name: action.payload.name,
                    err: ''
                }
            }
            else{
                return{
                    ...state,
                    mentees: [...state.mentees, action.payload],
                    current_mentee_id: action.payload.id,
                    err: ''
                }
            }
            
        case 'CHANGE_PAGE':
            return {
                ...state,
                lastPage: action.payload
            }
        
        case 'CHANGE_SCRIPT':
            return {
                ...state,
                lastScript: action.payload
            }
            
        case 'FLUSH_MENTEE_LIST':
            return {
                ...state,
                mentees: null,
                current_mentee_id: -1,
                lastPage: -1,
                lastScript: -1,
                err: ''
            }
        case 'CHANGE_MENTEE':
            return{
                ...state,
                current_mentee_id: -1,
                lastPage: -1,
                lastScript: -1,
                err: ''
            }
        case 'ERRORS_FOUND':
            return{
                ...state,
                current_mentee_id: -1,
                lastPage: -1,
                lastScript: -1,
                err: action.payload
            }
        default: 
            return state 
    }
}