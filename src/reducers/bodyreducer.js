const initialState = {
    imageClicked: false,

}

export default function commentReducer(state = initialState, action){
    switch(action.type){

        case 'TOGGLE_BODY':
            return {
                ...state,
                imageClicked: !state.imageClicked
            }
        
    
        default: 
            return state 
    }
}