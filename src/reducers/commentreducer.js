
const initialState = {
    commentMode: '',
    comments: null 
}

export default function commentReducer(state = initialState, action){
    switch(action.type){
        case 'TOGGLE_COMMENT_MODE':
            if (state.commentMode === ''){
                return {
                    ...state, 
                    commentMode: 'commentModeOn'
                }
            }
            else {
                return {
                    ...state, 
                    commentMode: ''
                }
            }
            
        case 'GET_COMMENTS':
            return{
                ...state,
                comments: action.payload
            }

        case 'ADD_COMMENT':
            return {
                ...state, 
                comments: [...state.comments, action.payload]
              }
    
        default: 
            return state 
    }
}