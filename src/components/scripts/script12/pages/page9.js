import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';


import body from '../../pictures/body.png';
import phone from '../../pictures/phone.png'

import { Link } from 'react-router-dom';


const Page9 = props => {

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
            <div className='left container_for_small_margin'>
                <h1 className='bold'>Step 3: Identify how you are feeling</h1>
                <p>
                    When we checked in earlier, you said you were feeling <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_9_script_12" defaultValue={getValue("text_box_number_1_page_9_script_12")} placeholder="the feeling your mentee reported earlier" />.
                    <br/><br/>
                    Let's think about how you feel again. It's good to think about how you are feeling after you do a coping strategy to see if using the coping strategy changed how you feel.
                </p>
            
                <div id="instruction_box_number_1_page_9_script_12" className="custom_svg demo_box container_for_extra_small_margin">
                    <p className='top_line_in_instruction_box'>
                        Help your mentee review their body scan worksheet or mood log.<br/>
                        Put the link in the chat and ask your mentee to screen share <br/>
                        Body scan link: <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_9_script_12" defaultValue={getValue("text_box_number_2_page_9_script_12")} /> <br/>
                        Mood log link: <textarea onChange={event => handleChange(event)} id="text_box_number_3_page_9_script_12" defaultValue={getValue("text_box_number_3_page_9_script_12")} />
                    </p>
                </div>
            
                <div className="div_with_body_image container_for_medium_margin" id="d_w_b_i_page_9_script_12">
                    <img src={phone} id="phone_page_9_script_12" alt="Phone with emojis" />
                    <Link target="_blank" to="/body" rel="noopener noreferrer"><input type="image" alt="Body image" src={body} name="body_image" className={`body_diagram_button ${props.commentMode}`} id="body_image_button" /></Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page9);









