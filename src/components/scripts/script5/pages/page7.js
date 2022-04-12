import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';

import { Link } from 'react-router-dom';

import body from '../../pictures/body.png';


const Page7 = (props) => {


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
            <h1 className="bold center">Review</h1>
            <div className="left container_for_medium_margin">
                <div className="div_with_body_image" id="d_w_b_i_a_p_page_7_script_5">
                    <p>
                        Last week, we worked on the body scan worksheet. 
                        <br/><br/>
                        Did you try using the body scan worksheet on your own?
                        <br/><br/>
                        What do you think about it?
                        <br/>
                        There are no right or wrong answers.
                    </p>
                    <Link target="_blank" to="/body" rel="noopener noreferrer"><input type="image" alt="Body image" src={body} name="body_image" className={`body_diagram_button ${props.commentMode}`} id="body_image_button" /></Link>
                    
                </div>
                
                <div className='container_for_medium_margin'>
                    <p>Is any part of it hard?<br/>
                        <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_7_script_5" defaultValue={getValue("text_box_number_1_page_7_script_5")} className='textarea' />
                        <br/><br/><br/><br/><br/><br/><br/>
                        Is there anything you don't like about it?<br/>
                        <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_7_script_5" defaultValue={getValue("text_box_number_2_page_7_script_5")} className='textarea' /><br/><br/>
                        <br/><br/><br/><br/><br/><br/><br/>
                        Is there any way I can help make it easier for you?<br/>
                        <textarea onChange={event => handleChange(event)} id="text_box_number_3_page_7_script_5" defaultValue={getValue("text_box_number_3_page_7_script_5")} className='textarea' /><br/><br/>
                        
                        Let's practice using it again together. 
                    </p>
                </div>
                
                <div className='container_for_small_margin'>
                    <p>How are you feeling right now?</p>
                </div>
                
                <div id="instruction_box_number_1_page_7_script_5" className="custom_svg demo_box">
                    <p className="top_line_in_instruction_box">
                        Help your mentee review their body scan worksheet.<br/>
                        Put the link in the chat and ask your mentee to screen share
                    </p>
                </div>
                <p>
                    Let's think about how each part of your body feels.
                </p>
                <div id="instruction_box_number_2_page_7_script_5" className="custom_svg demo_box">
                    <p className="top_line_in_instruction_box">
                        If your mentee needs help, ask them some questions. You can use the questions below or use the long list of questions you have in your binder.
                    </p>
                </div>
                <br/><br/>
                <ul>
                    <li>How does your chest feel?</li>
                    <li>How is your breathing?</li>
                    <li>How do your mouth and jaw feel?</li>
                    <li>How do your shoulders feel?</li>
                    <li>How do your legs and feet feel?</li>
                    <li>Do you notice yourself fidgeting?</li>
                    <li>Do you notice a change in your energy level? </li>
                    <li className="open_circles_bullets">Do you feel like you have more or less energy than usual?</li>
                </ul>
                <br/><br/><br/>
                <p>
                    Do you have any questions about using the body scan worksheet?
                    <br/>
                    
                    <textarea onChange={event => handleChange(event)} id="text_box_number_4_page_7_script_5" defaultValue={getValue("text_box_number_4_page_7_script_5")} />
                    <br/><br/><br/>
                    
                    You can keep practicing this week to learn more about your mental health. 
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

export default connect(mapStateToProps, mapDispatchToProps)(Page7);
