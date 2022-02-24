import { connect } from 'react-redux';

// import body from '../../pictures/body.png'

import { patchTexts, postTexts } from '../../../../actions/text';
import { toggleCommentMode } from '../../../../actions/comment';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';

const Page9 = props => {

    const [sideBar, setSidebar] = useState(null);
    const [blur, setBlur] = useState("");

    useEffect(() => {
        setBlur("");
        setSidebar(null);
      }, [props.sendingComment]);

    const handleCommentClick = (event) => {
    //Here is where you render the sidebar
        if (props.commentMode === 'commentModeOn'){
            if (blur === ""){
                setBlur("blur");
            }
            else {
                setBlur("");
            }
            if (sideBar === null){
                setSidebar(<Sidebar id_tag={event.target.id} />)
            }
            props.toggleCommentMode();
        }
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
  
    return (
        <div>
            <div className={`sheet ${blur}`}>
                <h1 className={`bold center ${props.commentMode}`} id="h1" onClick={event => handleCommentClick(event)}>Review</h1>
                <div className="left">
                    {/* <div id="bodyScanImageDiv"> */}
                    <div className='container_for_medium_margin'>
                        <p className={props.commentMode} id="p_1" onClick={event => handleCommentClick(event)}>
                            Last week, we worked on the body scan worksheet. 
                            <br/><br/>
                            Did you try using the body scan worksheet on your own?
                            <br/><br/>
                            What do you think about it?
                            <br/>
                            There are no right or wrong answers.
                        </p>
                    </div>
                        {/* <img src={body} alt="Body diagram" id="body_page_9_script_4" />
                        <textarea onChange={event => handleChange(event)} id="body_image_text_feelings_page_9_script_4" className="body_text_box" defaultValue={getValue("body_image_text_feelings_page_9_script_4")} placeholder='Feeling' />
                        <textarea onChange={event => handleChange(event)} id="body_image_text_head_page_9_script_4" className="body_text_box" defaultValue={getValue("body_image_text_head_page_9_script_4")} placeholder='Head' />
                        <textarea onChange={event => handleChange(event)} id="body_image_text_chest_page_9_script_4" className="body_text_box" defaultValue={getValue("body_image_text_chest_page_9_script_4")} placeholder='Chest' />
                        <textarea onChange={event => handleChange(event)} id="body_image_text_mouth_and_jaw_page_9_script_4" className="body_text_box" defaultValue={getValue("body_image_text_mouth_and_jaw_page_9_script_4")} placeholder='Mouth and jaw' />
                        <textarea onChange={event => handleChange(event)} id="body_image_text_breathing_page_9_script_4" className="body_text_box" defaultValue={getValue("body_image_text_breathing_page_9_script_4")} placeholder='Breathing'/>
                        <textarea onChange={event => handleChange(event)} id="body_image_text_shoulders_page_9_script_4" className="body_text_box" defaultValue={getValue("body_image_text_shoulders_page_9_script_4")} placeholder='Shoulders' />
                        <textarea onChange={event => handleChange(event)} id="body_image_text_stomach_page_9_script_4" className="body_text_box" defaultValue={getValue("body_image_text_stomach_page_9_script_4")} placeholder='Stomach' />
                        <textarea onChange={event => handleChange(event)} id="body_image_text_hands_and_arms_page_9_script_4" className="body_text_box" defaultValue={getValue("body_image_text_hands_and_arms_page_9_script_4")} placeholder='Hands and arms' />
                        <textarea onChange={event => handleChange(event)} id="body_image_text_legs_and_feet_page_9_script_4" className="body_text_box" defaultValue={getValue("body_image_text_legs_and_feet_page_9_script_4")} placeholder='Legs and feet' />
                        <textarea onChange={event => handleChange(event)} id="body_image_text_fidgeting_page_9_script_4" className="body_text_box" defaultValue={getValue("body_image_text_fidgeting_page_9_script_4")} placeholder='Fidgeting' />
                        <textarea onChange={event => handleChange(event)} id="body_image_text_change_in_energy_level_page_9_script_4" className="body_text_box" defaultValue={getValue("body_image_text_change_in_energy_level_page_9_script_4")} placeholder='Change in energy level' /> */}
                    
                    
                    <div className='container_for_medium_margin'>
                        <p className={props.commentMode} id="p_2" onClick={event => handleCommentClick(event)}>Is any part of it hard?</p>
                        <textarea className={props.commentMode} onClick={event => handleCommentClick(event)} onChange={event => handleChange(event)} id="text_box_number_1_page_9_script_4" defaultValue={getValue("text_box_number_1_page_9_script_4")} />
                        <br/><br/><br/><br/><br/><br/><br/>
                        <p className={props.commentMode} id="p_3" onClick={event => handleCommentClick(event)}>Is there anything you don't like about it?</p>
                        <textarea className={props.commentMode} onClick={event => handleCommentClick(event)} onChange={event => handleChange(event)} id="text_box_number_2_page_9_script_4" defaultValue={getValue("text_box_number_2_page_9_script_4")} /><br/><br/>
                        <br/><br/><br/><br/><br/><br/><br/>
                        <p className={props.commentMode} id="p_4" onClick={event => handleCommentClick(event)}>Is there any way I can help make it easier for you?</p>
                        <textarea className={props.commentMode} onClick={event => handleCommentClick(event)} onChange={event => handleChange(event)} id="text_box_number_3_page_9_script_4" defaultValue={getValue("text_box_number_3_page_9_script_4")} /><br/><br/>
                            
                        <p className={props.commentMode} id="p_5" onClick={event => handleCommentClick(event)}>Let's practice using it again together. </p>
                        
                    </div>
                    
                    <div className='container_for_small_margin'>
                        <p className={props.commentMode} id="p_6" onClick={event => handleCommentClick(event)}>How are you feeling right now?</p>
                    </div>
                   
                    <div id="instruction_box_number_1_page_9_script_4" className={`ital custom_svg demo_box ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                        <p className="top_line_in_instruction_box">
                            Help your mentee review their body scan workscript.<br/>
                            Put the link in the chat and ask your mentee to screen share
                        </p>
                    </div>
                    <p className={props.commentMode} id="p_7" onClick={event => handleCommentClick(event)}>
                        Let's think about how each part of your body feels.
                    </p>
                    <div id="instruction_box_number_2_page_9_script_4" className={`ital custom_svg demo_box ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                        <p className="top_line_in_instruction_box">
                            If your mentee needs help, ask them some questions. You can use the questions below or use the long list of questions you have in your binder.
                        </p>
                    </div>
                    <br/><br/>
                    <ul>
                        <li className={`${props.commentMode}`} id="li_1" onClick={event => handleCommentClick(event)}>How does your chest feel?</li>
                        <li className={`${props.commentMode}`} id="li_2" onClick={event => handleCommentClick(event)}>How is your breathing?</li>
                        <li className={`${props.commentMode}`} id="li_3" onClick={event => handleCommentClick(event)}>How do your mouth and jaw feel?</li>
                        <li className={`${props.commentMode}`} id="li_4" onClick={event => handleCommentClick(event)}>How do your shoulders feel?</li>
                        <li className={`${props.commentMode}`} id="li_5" onClick={event => handleCommentClick(event)}>How do your legs and feet feel?</li>
                        <li className={`${props.commentMode}`} id="li_6" onClick={event => handleCommentClick(event)}>Do you notice yourself fidgeting?</li>
                        <li className={`${props.commentMode}`} id="li_7" onClick={event => handleCommentClick(event)}>Do you notice a change in your energy level? </li>
                        <li className={`open_circles_bullets ${props.commentMode}`} id="li_8" onClick={event => handleCommentClick(event)}>Do you feel like you have more or less energy than usual?</li>
                    </ul>
                    <br/><br/><br/>
                    <p className={props.commentMode} id="p_8" onClick={event => handleCommentClick(event)}>
                        Do you have any questions about using the body scan worksheet?
                        <br/>
                    </p>
                        <textarea className={props.commentMode} onClick={event => handleCommentClick(event)} onChange={event => handleChange(event)} id="text_box_number_4_page_9_script_4" defaultValue={getValue("text_box_number_4_page_9_script_4")} />
                        <br/><br/><br/>
                    <p className={props.commentMode} id="p_9" onClick={event => handleCommentClick(event)}>  
                        You can keep practicing this week to learn more about your mental health. 
                    </p>
                </div>
            </div>
            {sideBar}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        texts: state.texts.curatedTextsFromCurrentScript,
        mentee_id: state.mentees.current_mentee_id,
        script: state.texts.currentScript,
        commentMode: state.comments.commentMode,
        sendingComment: state.comments.sendingComment 
    }
}

const mapDispatchToProps = dispatch => {
    return{
        patchTexts: (text_data) => dispatch(patchTexts(text_data)),
        postTexts: (text_data) => dispatch(postTexts(text_data)),
        toggleCommentMode: () => dispatch(toggleCommentMode())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page9);


