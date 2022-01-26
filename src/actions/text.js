import axios from 'axios';


export const postTexts = (data) => dispatch => {
  axios.post("https://cors-for-all.herokuapp.com/https://scripts-app-backend.herokuapp.com/texts", {value: data.value, id_tag: data.id_tag, script: data.script, mentee_id: data.mentee_id })
  .then(resp => dispatch({type: 'TEXT_CREATED', payload: resp.data}))
}

export const patchTexts = (data) => dispatch => {
      axios.patch(`https://cors-for-all.herokuapp.com/https://scripts-app-backend.herokuapp.com/texts/${data.id}`, {value: data.value, id_tag: data.id_tag, script: data.script, mentee_id: data.mentee_id})
      .then(resp => dispatch({type: 'TEXT_UPDATED', payload: resp.data}))
}

export const TEXTS_LOADING = "LOADING";
export const TEXTS_SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const getTexts = (script_number_and_mentee_id) => dispatch => {
    dispatch({ type: TEXTS_LOADING })
    axios.get('https://cors-for-all.herokuapp.com/https://scripts-app-backend.herokuapp.com/texts')
      .then(res => dispatch({ type: TEXTS_SUCCESS, payload: {texts: res.data.filter(text_data => text_data.script === script_number_and_mentee_id.script_number.toString() && text_data.mentee_id === script_number_and_mentee_id.mentee_id), script_number: script_number_and_mentee_id.script_number.toString()}}))
      .catch(err => dispatch({ type: FAILURE, payload: err}))
}

export const changeTexts = () => dispatch => {
    dispatch({ type: 'CHANGE_SCRIPT' })
  }
