export const goToSpecificPage = (page_number_to_go_to) => dispatch => {
    //Tells the reducer to change page number to a specific page
    dispatch({type: 'GO_TO_CERTAIN_PAGE', payload: page_number_to_go_to})
}

export const goForward = () => dispatch => {
    //Tells the reducer to increment page by 1
    dispatch({type: 'PAGE_FORWARD'})
}

export const goBack = () => dispatch => {
    //Tells the reducer to deccrement page by 1
    dispatch({type: 'PAGE_BACK'})
}