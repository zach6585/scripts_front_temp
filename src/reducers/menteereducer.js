
const initialState = {
    mentees: null,
    current_mentee_id: -1
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
                current_mentee_id: action.payload
            }
        case 'CREATE_MENTEE':
            if (state.mentees === null){
                return{
                    ...state,
                    mentees: action.payload,
                    current_mentee_id: action.payload.id
                }
            }
            else{
                return{
                    ...state,
                    mentees: [...state.mentees, action.payload],
                    current_mentee_id: action.payload.id
                }
            }
            
        case 'FLUSH_MENTEE_LIST':
            return {
                ...state,
                mentees: null
            }
        default: 
            return state 
    }
}