import { connect } from 'react-redux';
import { patchTexts, postTexts } from '../../../../../actions/text';

const RedX = (props) => {

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
        <div>
            <div>
                <p>
                    At the beginning of this worksheet, you were not sure how you were feeling.
                    <br/><br/>
                    Based on this worksheet, do you think you have a better idea of how you are feeling?
                    <br/><br/>
                    When your body feels <textarea onChange={event => handleChange(event)} id="text_box_number_3_page_8_script_3" defaultValue={getValue("text_box_number_3_page_8_script_3")} placeholder="some of the feelings they listed on the body scan" />
                    <br/><br/>
                    what kind of feeling is that related to? This is one example of how paying attention to your body can help you know how you are feeling. 
                    <br/><br/>
                    I will give you some body scan worksheets. You can use these to practice self-monitoring this week.
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

export default connect(mapStateToProps, mapDispatchToProps)(RedX);