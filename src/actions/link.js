import axios from "axios";

export const getLinks = () => dispatch => {
    axios.get('https://cors-for-all.herokuapp.com/https://scripts-app-backend.herokuapp.com/links')
      .then(res => dispatch({ type: 'GET_LINKS', payload: res.data}))
}