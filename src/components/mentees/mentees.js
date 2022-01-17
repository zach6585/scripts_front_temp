import {Component} from 'react';
import './mentees.css';

import DisplayMentees from './displayMentees';
import MenteeCreationForm from './menteeCreationForm';



class Mentees extends Component{

    state = {
        current_component_name: 'display mentees'
    }

    handleClick = (event) => {
        event.preventDefault();
        if (this.state.current_component_name === "display mentees"){
            this.setState({
                current_component_name: 'mentee form'
            })
        }
        else if (this.state.current_component_name === "mentee form"){
            this.setState({
                current_component_name: 'display mentees'
            })
        }
    }


    render(){
        if (this.state.current_component_name === "display mentees"){
            return(
                <div>
                    <DisplayMentees />
                    <button id="button_to_make_a_mentee" onClick={event => this.handleClick(event)}>Add a new mentee</button>
                </div>
            )
        }
        else{
            return(
                <MenteeCreationForm />
            )
        }
        
    }
}



export default Mentees;