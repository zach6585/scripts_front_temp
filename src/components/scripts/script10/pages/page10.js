import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';
import { toggleBodyImage } from '../../../../actions/body';


import body from '../../pictures/body.png';
import phone from '../../pictures/phone.png'

import BodyDiagram from '../../general pages/bodydiagram';



const Page10 = props => {

    const handleBodyImageClicked = (event) => {
        props.toggleBodyImage();
    }
    
    const getValue = (current_id_tag) => {
        //Same as getObject but instead it returns the value
        let current_text_for_value = props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text_for_value ? current_text_for_value.value : ""
    }
    
    if (!props.imageClicked){
        return (
            <div className="sheet">
                <div className='left container_for_small_margin'>
                    <h1 className='bold'>Step 3: Identify how you are feeling</h1>
                    <p>
                        When we checked in earlier, you said you were feeling <span className='underline_text'>{getValue('text_box_number_1_step_1_script_10')}</span>.
                        <br/><br/>
                        Let's think about how you feel again. It's good to think about how you are feeling after you do a coping strategy to see if using the coping strategy changed how you feel.
                    </p>
                
                    <div id="instruction_box_number_1_page_10_script_10" className="custom_svg demo_box container_for_extra_small_margin">
                        <p className='top_line_in_instruction_box'>
                            Help your mentee review their body scan worksheet or mood log.<br/>
                            Put the link in the chat and ask your mentee to screen share
                        </p>
                    </div>
                
                    <div className="div_with_body_image container_for_medium_margin" id="d_w_b_i_page_10_script_10">
                        <img src={phone} id="phone_page_10_script_10" alt="Phone with emojis" />
                        <input type="image" alt="Body image" src={body} name="body_image" className="body_diagram_button" id="body_image_button" onClick={event => handleBodyImageClicked(event)} />
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
        toggleBodyImage: () => dispatch(toggleBodyImage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page10);









