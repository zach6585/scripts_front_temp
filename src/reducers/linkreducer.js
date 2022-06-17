
const initialState = {
    links: null
}

export default function linkReducer(state = initialState, action){
    switch(action.type){
        case 'GET_LINKS':
            return {
                ...state, 
                links: action.payload
            }
        default: 
            return state 
    }
}