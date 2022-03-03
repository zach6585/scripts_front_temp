import { connect } from 'react-redux';
import { useState } from 'react';

import { patchTexts, postTexts } from '../../../../actions/text';
import { toggleBodyImage } from '../../../../actions/body';


import phone from '../../pictures/phone.png';
import body from '../../pictures/body.png';
import check from '../../pictures/checkbutsmaller.png';
import redX from '../../pictures/redxbutsmaller.png';

import BodyDiagram from '../../general pages/bodydiagram';
import { goToSpecificPage } from '../../../../actions/page';


const Page10 = props => {

    const [greenCheckWords, setGreenCheckWords] = useState(null)
    const [redXWords, setRedXWords] = useState(null)

    const handleClick = (e, letter) => {
        if (letter === 'c'){
            setGreenCheckWords(
                <p>
                    Go to step 4
                </p>
            );
            setRedXWords(null);
        }
        else if (letter === 'x'){
            setGreenCheckWords(null)
            setRedXWords(
                <div id='image_and_p_div_page_10_script_7'>
                    <button onClick={event => handleButtonPress(event)}>Go to time for questions</button>
                </div>
            )
        }
    }
    const handleButtonPress = (event) => {
        props.goToSpecificPage(12);
    }
    const handleBodyImageClicked = (event) => {
        props.toggleBodyImage();
    }
    
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
    if (!props.imageClicked){
        return (
            <div className="sheet">
                <h1 className='bold center'>Step 3: Identify how you are feeling</h1>
                <div className='left container_for_small_margin'>
                    <div className="div_with_body_image_and_p" id="d_w_b_i_a_p_page_10_script_7">
                        <p>
                            When we did the body scan earlier, you said you were feeling <span className='underline_text'>{getValue('text_box_number_1_step_1_script_7')}</span>.<br/><br/>
                            Has anything changed?
                        </p>
                        <input type="image" alt="Body image" src={body} name="body_image" className="body_diagram_button" id="body_image_button" onClick={event => handleBodyImageClicked(event)} />
                    </div>
                        
                    
                    <div className='left'>
                        <p><i>Prompts:</i></p>
                        <ul>
                            <li>Do any parts of your body feel different? </li>
                            <li>What are you noticing in your body?</li>
                        </ul>
                    </div>
                        
                        
                    
                    <div id="instruction_box_number_1_page_10_script_7" className="custom_svg demo_box container_for_small_margin">
                        <p className='top_line_in_instruction_box'>
                            Help your mentee review their body scan worksheet or mood log.<br/>
                            Put the link in the chat and ask your mentee to screen share<br/>
                            Link: <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_10_script_7" defaultValue={getValue("text_box_number_1_page_10_script_7")} />
                        </p>
                    </div>

                    <div className='container_for_large_margin'>
                        <div id="next_to_image_text_number_2_page_10_script_7">
                            <p>
                                Now that we have thought about how your body feels, let's use the mood log to see how you are feeling. It is good to use the mood log after you do a coping strategy to see if using the coping strategy changed how you feel.<br/><br/>
                                We are doing the mood log again, because the best way to learn if a coping strategy is helping is to see if you feel better after using it. A mood log can help you know if your mood has changed. 
                            </p>
                        </div>
                        <img src={phone} alt="Phone" id="phone_page_10_script_7" />
                    </div>

                    <div id="instruction_box_number_2_page_10_script_7" className="custom_svg demo_box container_for_medium_margin">
                        <p className='top_line_in_instruction_box'>
                            Help your mentee use the mood log to rate how they are feeling. <br/>
                            Put the link in the chat and ask your mentee to screen share<br/>
                            Link: <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_10_script_7" defaultValue={getValue("text_box_number_2_page_10_script_7")} />
                        </p>
                    </div>

                    <div className='container_for_medium_margin'>
                        <img className="check" src={check} alt="Check" onClick={(event) => handleClick(event, 'c')} /><p className="what_does_your_mentor_say">You and your mentee worked on solving a challenge today</p>
                        <br/>
                        <div className="choicePicked">{greenCheckWords}</div>
                        <br/><br/>
                        <img className="redX" src={redX} alt="Red X" onClick={(event) => handleClick(event, 'x')} /><p className="what_does_your_mentor_say">You and your mentee did not work on solving a challenge today</p>
                        <br/>
                        <div className="choicePicked">{redXWords}</div>
                   </div>
                </div>
            </div>
            
        )
    }
    else{
        return(
            <BodyDiagram />
        )
    }
}

const mapStateToProps = state => {
    return{
        texts: state.texts.curatedTextsFromCurrentScript,
        mentee_id: state.mentees.current_mentee_id,
        script: state.texts.currentScript,
        imageClicked: state.body.imageClicked
    }
}

const mapDispatchToProps = dispatch => {
    return{
        patchTexts: (text_data) => dispatch(patchTexts(text_data)),
        postTexts: (text_data) => dispatch(postTexts(text_data)),
        toggleBodyImage: () => dispatch(toggleBodyImage()),
        goToSpecificPage: (pageNum) => dispatch(goToSpecificPage(pageNum))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Page10);

