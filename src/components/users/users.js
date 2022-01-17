import {Component} from 'react';
import { connect } from 'react-redux';
import './users.css';

import Signup from './signup';
import Login from './login';

import {changeUserPage} from '../../actions/user';

class Users extends Component{

    state = {
        current_component_being_rendered: <Login  />, 
        current_component_name: 'login',
        button_under_form_text: "Don't have an account yet? Sign up here"
    }

    handleClick = (event) => {
        event.preventDefault();
        this.props.changeUserPage();
        if (this.state.current_component_name === "login"){
            this.setState({
                current_component_being_rendered: <Signup />,
                current_component_name: 'signup',
                button_under_form_text: "Already have an account? Log in here"
            })
        }
        else if (this.state.current_component_name === "signup"){
            this.setState({
                current_component_being_rendered: <Login />,
                current_component_name: 'login',
                button_under_form_text: "Don't have an account yet? Sign up here"
            })
        }
        console.log(this.state)
    }


    render(){
        return(
            <div>
                {this.state.current_component_being_rendered}
                <h3 id="fake_link_text" onClick={event => this.handleClick(event)}>{this.state.button_under_form_text}</h3>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        changeUserPage: () => dispatch(changeUserPage())
    }
}

export default connect(null, mapDispatchToProps)(Users);