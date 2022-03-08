import { connect } from 'react-redux';
import { patchTexts, postTexts } from '../../../../actions/text';

import allEars from "../../pictures/allears.png";
import pause from "../../pictures/pause.png";

const OTFZ = (props) => {

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
        <div className="left">
            <p>How have you been doing at remembering your mood logs?</p>
            <img src={pause} alt="Pause" className="pause" />
            <img src={allEars} alt="All ears" className="allEars" />
            <br/><br/>
            {props.otf_or_z === "otf" ? <p>This week you did <textarea className='reminders_number_done' onChange={event => handleChange(event)} id={`text_box_number_1_mentoring_reminders_script_${props.script}`} defaultValue={getValue(`text_box_number_1_mentoring_reminders_script_${props.script}`)} /> mood logs. Thanks for doing those. Please try to do 5 this week.</p> : <p>I noticed that you did not get a chance to do any of your mood logs</p>}
            <p>
                Remember, you will earn $5 for every week that you do 5 mood logs. That means you can earn $80 for doing the mood logs during mentoring.<br/><br/>
                Also, the more you practice, the easier it will be to tell how you feel, so you can be in charge of your mental health.<br/><br/>
                What do you think is making it hard to do your mood logs?<br/><br/>
                Is there a way I can help you remember to do them?
            </p>
            <br/><br/>
            {props.otf_or_z === "otf" ? <textarea className='reminders_text_box' onChange={event => handleChange(event)} id={`text_box_number_2_mentoring_reminders_script_${props.script}`} defaultValue={getValue(`text_box_number_2_mentoring_reminders_script_${props.script}`)} /> : null}
            {props.otf_or_z === "otf" ? null : <textarea className='reminders_text_box' onChange={event => handleChange(event)} id={`text_box_number_3_mentoring_reminders_script_${props.script}`} defaultValue={getValue(`text_box_number_3_mentoring_reminders_script_${props.script}`)} />}
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

export default connect(mapStateToProps, mapDispatchToProps)(OTFZ);