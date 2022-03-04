import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';
import { toggleBodyImage } from '../../../../actions/body';


import phone from '../../pictures/phone.png';
import body from '../../pictures/body.png';

import BodyDiagram from '../../general pages/bodydiagram';


const Page8 = props => {

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
                <h1 className="bold center">Practicing coping strategies</h1>
                <div className='container_for_small_margin left'>
                    <p>
                        We'll practice your new strategy together.<br/>
                        <strong>Step 1: Identify how you are feeling</strong><br/>
                        Let's practice thinking about how you are feeling. We do this to check-in before using the coping strategy.<br/>
                        Do you want to use the body scan or mood log?
                    </p>
                    <div className="div_with_body_image_and_instruction_box" id="d_w_b_i_a_i_b_page_8_script_9">
                        <div id="instruction_box_number_1_page_8_script_9" className="custom_svg demo_box container_for_small_margin">
                            <p className='top_line_in_instruction_box'>
                                Help your mentee use the body scan worksheet.<br/>
                                Put the link in the chat and ask your mentee to screen share<br/>
                                <strong>Write how your mentee is feeling</strong><br/>
                                <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_8_script_9" defaultValue={getValue("text_box_number_1_page_8_script_9")} />
                            </p>
                        </div>
                        <input type="image" alt="Body image" src={body} name="body_image" className="body_diagram_button" id="body_image_button" onClick={event => handleBodyImageClicked(event)} />
                    </div>
                    


                    <div className='container_for_large_margin'>
                        <img src={phone} alt="Phone with emojis" id="phone_page_8_script_9" />
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



export default connect(mapStateToProps, mapDispatchToProps)(Page8);








