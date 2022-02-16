import axios from "axios"

export const toggleCommentMode = () => dispatch => {
    dispatch({type: 'TOGGLE_COMMENT_MODE'})
}

export const postComments = (comment_info) => dispatch => {
    dispatch({type: 'SENDING_COMMENT'})
    axios.post('https://cors-for-all.herokuapp.com/https://scripts-app-backend.herokuapp.com/comments', {content: comment_info.content, id_tag: comment_info.id_tag, script: comment_info.script, page_number: comment_info.page_number})
}

