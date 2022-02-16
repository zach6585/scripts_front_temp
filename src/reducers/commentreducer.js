
const initialState = {
    commentMode: '',
    sendingComment: false
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
            
        case 'SENDING_COMMENT':
            return {
                ...state,
                sendingComment: true
            }
    
        default: 
            return state 
    }
}