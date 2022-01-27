import axios from "axios";

export const userLoginAndCheck = (user_data) => dispatch => {
    console.log(user_data);
    axios.post("https://cors-for-all.herokuapp.com/https://scripts-app-backend.herokuapp.com/login", {username: user_data.username, password: user_data.password})
    .then(response => {
        if (response.data.errors){
            dispatch({ type: 'ERRORS_FOUND', payload: response.data.errors});
        }
        else {
            localStorage.setItem("token", response.data.jwt)
            dispatch({type: 'USER_SUCCESS', payload: {user: response.data.user, id: response.data.id} })
            dispatch({type: "GET_MENTEES", payload: response.data.mentees})
        }
    })
} 

export const userSignupAndCheck = (user_data) => dispatch => {
    axios.post("https://cors-for-all.herokuapp.com/https://scripts-app-backend.herokuapp.com/users", {username: user_data.username, email: user_data.email, password: user_data.password, password_confirmation: user_data.password_confirmation})
    .then(response => {
        console.log(response.data)
        if (response.data.errors){
            dispatch({ type: 'ERRORS_FOUND', payload: response.data.errors});
        }
        else {
            localStorage.setItem("token", response.data.jwt)
            dispatch({type: 'USER_SUCCESS', payload: response.data.id })
            dispatch({type: "GET_MENTEES", payload: response.data.mentees})
        }
    })
} 

export const changeUserPage = () => dispatch => {
    dispatch({type: 'CHANGE_PAGE'})
}

export const autoLogin = () => dispatch => {
    axios.get("https://cors-for-all.herokuapp.com/https://scripts-app-backend.herokuapp.com/auto_login", {headers: {"Authenticate": localStorage.token}})
    .then(resp => {
        dispatch({type: 'USER_SUCCESS', payload: {user: response.data.user, id: response.data.id}})
        dispatch({type: "GET_MENTEES", payload: resp.data.mentees})
    })
}

export const userLogout = (user_data) => dispatch => {
    localStorage.removeItem("token");
    dispatch({ type: 'LOGOUT' });
} 



