import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';


import phone from '../../pictures/phone.png';
import body from '../../pictures/body.png';
import { Link } from 'react-router-dom';


const Page8 = props => {
    
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
            <h1 className='bold center'>Step 3: Identify how you are feeling</h1>
            <div className='left container_for_small_margin'>
                <div className="div_with_body_image" id="d_w_b_i_a_p_page_8_script_6">
                    <p>
                        When we did the body scan earlier, you said you were feeling <span className='underline_text'>{getValue('text_box_number_1_step_1_script_6')}</span>.<br/><br/>
                        Has anything changed?
                    </p>
                    <Link target="_blank" to="/body" rel="noopener noreferrer"><input type="image" alt="Body image" src={body} name="body_image" className={`body_diagram_button ${props.commentMode}`} id="body_image_button" /></Link>
                </div>
                    
                
                <div className='left'>
                    <p><i>Prompts:</i></p>
                    <ul>
                        <li>Do any parts of your body feel different? </li>
                        <li>What are you noticing in your body?</li>
                    </ul>
                </div>
                    
                    
                
                <div id="instruction_box_number_1_page_8_script_6" className="custom_svg demo_box container_for_small_margin">
                    <p className='top_line_in_instruction_box'>
                        Help your mentee review their body scan worksheet or mood log.<br/>
                        Put the link in the chat and ask your mentee to screen share<br/>
                        Link: <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_8_script_6" defaultValue={getValue("text_box_number_1_page_8_script_6")} />
                    </p>
                </div>

                <div className='container_for_large_margin'>
                    <div id="next_to_image_text_number_2_page_8_script_6">
                        <p>
                            Now that we have thought about how your body feels, let's use the mood log to see how you are feeling. It is good to use the mood log after you do a coping strategy to see if using the coping strategy changed how you feel.<br/><br/>
                            We are doing the mood log again, because the best way to learn if a coping strategy is helping is to see if you feel better after using it. A mood log can help you know if your mood has changed. 
                        </p>
                    </div>
                    <img src={phone} alt="Phone" id="phone_page_8_script_6" />
                </div>

                <div id="instruction_box_number_2_page_8_script_6" className="custom_svg demo_box container_for_medium_margin">
                    <p className='top_line_in_instruction_box'>
                        Help your mentee use the mood log to rate how they are feeling. <br/>
                        Put the link in the chat and ask your mentee to screen share<br/>
                        Link: <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_8_script_6" defaultValue={getValue("text_box_number_2_page_8_script_6")} />
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



export default connect(mapStateToProps, mapDispatchToProps)(Page8);

