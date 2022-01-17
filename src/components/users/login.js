import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { userLoginAndCheck } from '../../actions/user';


function Login(props){

    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleScroll = () => {
        window.scroll({top:0,behavior:'smooth'})
    }

    useEffect (() => {handleScroll()})

    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.userLoginAndCheck({username: username, password: password})

    }
    
    return(
      <div id="userDiv">
        <h1 className="center">Login</h1>
        <div id="formDiv">
            <form id="loginForm">
                <label htmlFor='username'>Username: </label>
                <input onChange={handleUsernameChange} type="text" className="login_form_input_box" name="username" autoComplete='username'></input>
                <br/><br/>
                <label htmlFor='password'>Password: </label>
                <input onChange={handlePasswordChange} type="password" className="login_form_input_box" name="password" autoComplete='password'></input>
                <br/><br/>
                <input name="submit" value="Submit" type="submit" id="submit" onClick={event => handleSubmit(event)}></input>
            </form>
            <p id="error_text">{props.user.err}</p>
        </div>
      </div>
    )
} 



const mapDispatchToProps = (dispatch) => {
    return{
        userLoginAndCheck: (user_details) => dispatch(userLoginAndCheck(user_details))
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
        mentees: state.mentees
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)