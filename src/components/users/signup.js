import {useState, useEffect} from 'react';
import { connect } from 'react-redux';

// import axios from 'axios';
import {userSignupAndCheck} from '../../actions/user';


function Signup(props){

    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setPasswordConfirmation] = useState("")

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

    const handlePasswordConfirmationChange = (evt) => {
      setPasswordConfirmation(evt.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.userSignupAndCheck({username: username, password: password, password_confirmation: password_confirmation})
    }
    
    return(
      <div id="userDiv">
        <h1 className="center">Signup</h1>
        <div id="formDiv">
            <form id="loginForm">
                <label htmlFor='username'>Username: </label>
                <input onChange={handleUsernameChange} type="text" className="login_form_input_box" name="username" autoComplete='username'></input>
                <br/><br/>
                <label htmlFor='password'>Password: </label>
                <input onChange={handlePasswordChange} type="password" className="login_form_input_box" name="password" autoComplete='password'></input>
                <br/><br/>
                <label htmlFor='password_confirmation'>Password Confirmation: </label>
                <input onChange={handlePasswordConfirmationChange} type="password" className="login_form_input_box" name="password_confirmation" autoComplete='password_confirmation'></input>
                <br/><br/>
                <input name="submit" value="Submit" type="submit" id="submit" onClick={event => handleSubmit(event)}></input>
            </form>
            <p id="error_text">{props.user.err[0]}</p>
        </div>
      </div>
    )
} 



const mapDispatchToProps = (dispatch) => {
    return{
        userSignupAndCheck: (user_details) => dispatch(userSignupAndCheck(user_details))
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)