import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';


const Page13 = (props) => {
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
            <h1 className='bold center'>Coping strategy toolkit</h1>
            <div className='left container_for_medium_margin'>
                <p>Let's keep working on your coping strategy toolkit.</p>
                <div id="instruction_box_number_1_page_13_script_10" className="custom_svg demo_box container_for_small_margin">
                    <p className="top_line_in_instruction_box">
                        Put the link in the chat and ask your mentee to screen share <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_13_script_10" defaultValue={getValue("text_box_number_1_page_13_script_10")} /><br/>
                        Encourage your mentee to add in the new coping strategy<br/>
                        Encourage them to add in information about when they will use the strategy, how it makes them feel, and solutions to challenges.
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

export default connect(mapStateToProps, mapDispatchToProps)(Page13);