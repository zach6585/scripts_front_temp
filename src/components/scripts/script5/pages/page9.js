import { connect } from "react-redux";
import { patchTexts, postTexts } from '../../../../actions/text';

 
const Page9 = (props) => {

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
                    This week, your job will be to practice using a coping strategy. We decided that you wanted to try <br/><textarea onChange={event => handleChange(event)} id="text_box_number_1_page_9_script_5" defaultValue={getValue("text_box_number_1_page_9_script_5")} />.
                </p>
                <p className='small text_under_text_box_number_1_practice_reminder'>(the strategy you practiced today)</p>
                <p>
                    Try to do this activity at least 5 times this week.<br/>
                    What kind of help do you think you will need to remember to practice the activity?
                </p>
                
                <ul>
                    <li className="square_bullets">A reminder?</li>
                    <li className="square_bullets">Setting an alarm on your phone?</li>
                    <li className="square_bullets">Something else: <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_9_script_5" defaultValue={getValue("text_box_number_2_page_9_script_5")} /></li>
                </ul>
                <p>
                    The mood log will help you keep track of how you feel after you do the activity. You can use body scan worksheets if they help you with the mood logs.
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

export default connect(mapStateToProps, mapDispatchToProps)(Page9);

