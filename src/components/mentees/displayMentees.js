import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { menteeChosen } from '../../actions/mentee';
import {changeLastUserMentee} from '../../actions/user';

function DisplayMentees(props){

    const [menteeButtonList, setMenteeList] = useState("")

    const menteeButtonMaker = () => {
        //Makes the list of mentee buttons available
        let total_list_of_mentee_buttons = [];
        if (props.mentees.mentees !== undefined){
            for (const i of props.mentees.mentees){
                total_list_of_mentee_buttons.push(<button className='mentee_button' key={i.name} onClick={ event => handleMenteeButtonChoiceClick(event, i.id)}>{i.name}</button>)
            }
            setMenteeList(total_list_of_mentee_buttons)
        }
        else{
            setMenteeList(null)
        }
    }

    const handleMenteeButtonChoiceClick = (event, mentee_id) => {
        event.preventDefault();
        props.menteeChosen(mentee_id);
    }
    // The eslint thing below just gets rid of a meaningless warning
    // eslint-disable-next-line
    useEffect (() => {menteeButtonMaker()},[])
    return(
        <div id="mentee_buttons">
            <h1 className='bold center'>Which Mentee are you working with today?</h1>
            <br/><br/>
            {menteeButtonList}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        mentees: state.mentees,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        menteeChosen: (mentee_id) => dispatch(menteeChosen(mentee_id)),
        changeLastUserMentee: (mentee_id) => dispatch(changeLastUserMentee(mentee_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMentees)