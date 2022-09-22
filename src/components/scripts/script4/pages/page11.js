import { connect } from "react-redux";
import { patchTexts, postTexts } from '../../../../actions/text';

const Page11 = (props) => {

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
   
    
    return (
        <div className="sheet">
            <h1 className="bold center">Practice reminder</h1>
            <div className="left container_for_extra_small_margin">
                <p>
                    This week, keep paying attention to your symptoms<br/><br/>
                    You can use your symptom log to let me know when you feel symptoms.<br/><br/>
                    What kind of help do you think you will need to remember to practice the activity?
                </p>
                <ul>
                    <li className="square_bullets">A reminder?</li>
                    <li className="square_bullets">Setting an alarm on your phone?</li>
                    <li className="square_bullets">Something else: <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_11_script_4" defaultValue={getValue("text_box_number_1_page_11_script_4")} /></li>
                </ul>
                <div id="instruction_box_number_1_page_11_script_4" className='ital custom_svg demo_box container_for_medium_margin'>
                    <p className="top_line_in_instruction_box">
                        If the mentee does choose a reminder or setting an alarm, it would be good to offer: “can you set the reminder/alarm yourself or do you need any help? If you need help, I'm happy to help you right now!”
                    </p>
                </div>
                <div className="container_for_small_margin">
                    <p>
                        The mood log will help you keep track of how you feel after you do the activity. 
                    </p>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page11);





