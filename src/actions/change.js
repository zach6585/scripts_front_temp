import axios from 'axios';

export const switchChangesList = () => dispatch => {
    //When the user changes scripts we need to change which Changes we're looking at
    dispatch({ type: 'SWITCH_CHANGE_LIST' })
  }


export const postChange = (change_info) => dispatch => {
    //Setting up the defaults for the pages so we can then just change it to content editables
    axios.post("https://cors-for-all.herokuapp.com/https://scripts-app-backend.herokuapp.com/changes", {id_tag: change_info.name, content: change_info.content, mentee_id: change_info.mentee_id, script: change_info.script })
    .then(resp => {
        dispatch({type: 'CREATE_CHANGE', payload: resp.data})
    })
}

export const patchChange = (change_info) => dispatch => {
      axios.patch(`https://cors-for-all.herokuapp.com/https://scripts-app-backend.herokuapp.com/changes/${change_info.id}`, {id_tag: change_info.name, content: change_info.content, mentee_id: change_info.mentee_id, script: change_info.script})
      .then(resp => dispatch({type: 'CHANGE_UPDATED', payload: resp.data}))
}

export const CHANGES_LOADING = "LOADING";
export const CHANGES_SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const getChanges = (script_number_and_mentee_id) => dispatch => {
    dispatch({ type: CHANGES_LOADING })
    axios.get('https://cors-for-all.herokuapp.com/https://scripts-app-backend.herokuapp.com/changes')
      .then(res => dispatch({ type: CHANGES_SUCCESS, payload: {changes: res.data.filter(change_data => change_data.script === script_number_and_mentee_id.script_number.toString() && change_data.mentee_id === script_number_and_mentee_id.mentee_id), script_number: script_number_and_mentee_id.script_number.toString()}}))
      .catch(err => dispatch({ type: FAILURE, payload: err}))
}


