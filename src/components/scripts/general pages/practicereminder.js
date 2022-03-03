//In the situations where practice reminder is a separate page we use this

import { connect } from "react-redux";
import { patchTexts, postTexts } from '../../../actions/text';


const PracticeReminder = (props) => {

    const handleChange = (event) => {
        const object_outcome = getObject(event.target.id)
        object_outcome === "" ? 
        props.postTexts({value: event.target.value, id_tag: event.target.id, mentee_id: props.mentee_id, script: props.script})
        :
        props.patchTexts({value: event.target.value, id_tag: event.target.id, id: object_outcome.id, mentee_id: props.mentee_id, script: props.script})

    }
    
    const getObject = (current_id_tag) => {
        //Returns the object that has the specific id_tag
        let current_text = props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text ? current_text : ""
    }

    const getValue = (current_id_tag) => {
        //Same as getObject but instead it returns the value
        let current_text_for_value = props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text_for_value ? current_text_for_value.value : ""
    }
    
    return(

        <div className="sheet">
            <h1 className="bold center">Practice reminder</h1>
            <div className="left container_for_medium_margin">
                <p>
                    {this.props.startText}
                </p>
                <div className='container_for_small_margin'>
                    <textarea onChange={event => handleChange(event)} className="practice_reminder_text_box_1" id={`text_box_number_1_practice_reminder_script_${props.script}`} defaultValue={getValue(`text_box_number_1_practice_reminder_script_${props.script}`)} />.
                    <p className='small text_under_text_box_number_1_practice_reminder' id={`text_under_text_box_number_1_practice_reminder_script_${props.script}`}>(the strategy you practiced today)</p>
                </div>
                <br/><br/>
                <p>
                    Try to do this activity at least 5 times this week. 
                    <br/><br/>
                    What kind of help do you think you will need to remember to practice the activity?
                    <br/> 
                    Here are some ideas:
                </p>
                    <ul>
                        <li className="square_bullets">A reminder</li>
                        <li className="square_bullets">Setting an alarm on your phone</li>
                        <li className="square_bullets">Something else: <textarea className="practice_reminder_text_box_2" onChange={event => handleChange(event)} id={`text_box_number_2_practice_reminder_script_${props.script}`} defaultValue={getValue(`text_box_number_2_practice_reminder_script_${props.script}`)} /></li>
                    </ul>
                <br/><br/>
                <p>
                    {props.endText}
                </p>
            
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        texts: state.texts.curatedTextsFromCurrentScript,
        mentee_id: state.mentees.current_mentee_id,
        script: state.texts.currentScript
    }
}

const mapDispatchToProps = dispatch => {
    return{
        patchTexts: (text_data) => dispatch(patchTexts(text_data)),
        postTexts: (text_data) => dispatch(postTexts(text_data))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PracticeReminder);

