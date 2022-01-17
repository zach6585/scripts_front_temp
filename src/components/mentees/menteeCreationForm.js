import { useState } from 'react';
import { connect } from 'react-redux';

import { createMentee } from '../../actions/mentee';

function MenteeCreationForm(props){
    
    const [menteeName, setMenteeName] = useState("")

    const handleMenteeNameChange = (event) => {
        //Handles changes in the mentee name input box
        setMenteeName(event.target.value)
    }

    const handleMenteeNameSubmit = (event) => {
        event.preventDefault();
        props.createMentee({name: menteeName, user_id: props.user.user_id})
    }

    return(
        <form id="mentee_creation_form">
            <label htmlFor='mentee_name'>Name: </label>
            <input name="mentee_name" type="text" onChange={event => handleMenteeNameChange(event)} id="mentee_form_name_input_box"></input>
            <input type="submit" value="Submit" id="mentee_form_submit_button" onClick={event => handleMenteeNameSubmit(event)}></input>
        </form>
    )
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createMentee: (mentee_name) => dispatch(createMentee(mentee_name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenteeCreationForm)