import axios from "axios"

export const toggleCommentMode = () => dispatch => {
    dispatch({type: 'TOGGLE_COMMENT_MODE'})
}

export const getComments = (script_number) => dispatch => {
    axios.get('https://cors-for-all.herokuapp.com/https://scripts-app-backend.herokuapp.com/comments')
    .then(res => dispatch({type: 'GET_COMMENTS', payload: res.data.filter(comments => comments.script === script_number)}))
}

export const postComments = (comment_info) => dispatch => {
    dispatch({type: 'SENDING_COMMENT'})
    axios.post('https://cors-for-all.herokuapp.com/https://scripts-app-backend.herokuapp.com/comments', {content: comment_info.content, id_tag: comment_info.id_tag, script: comment_info.script, page_number: comment_info.page_number})
    .then(res => dispatch({type: 'ADD_COMMENT', payload: res.data}))
}

