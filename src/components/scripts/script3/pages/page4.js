import { connect } from 'react-redux';


import { patchTexts, postTexts } from '../../../../actions/text';
import { toggleCommentMode } from '../../../../actions/comment';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';


const Page4 = (props) => {

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
                <h1 className={`bold center ${props.commentMode}`} id="h1" onClick={event => handleCommentClick(event)}>Icebreaker</h1>
                <div className="left container_for_medium_margin">
                    <p className={props.commentMode} id="p_1" onClick={event => handleCommentClick(event)}>
                        We are going to do a scavenger hunt show! <br/>
                        Let's take up to 5 minutes to find something in our room or house that makes you feel happy.  For example, I want to show you <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_4_script_3" defaultValue={getValue("text_box_number_1_page_4_script_3")} /> because when I feel stressed and I use/look at this, it makes me slow down and relax.<br/><br/>
                        Once you find something in your home that makes you calm or relaxed, bring it back to the screen.<br/><br/>
                        I'll put my timer on for 5 minutes and I'll call out when our time is up.<br/><br/>
                        If you do need a few more minutes after the timer goes off, just tell me out loud that you're still looking so I know you need some more time!
                    </p>
                    
                    <div id="instruction_box_number_1_page_4_script_3" className={`custom_svg demo_box container_for_small_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                        <p className="top_line_in_instruction_box">
                            Thank your mentee for sharing.<br/>
                            Ask your mentee questions to learn about what they showed you. Some ideas for questions are:
                        </p>
                        <ul>
                            <li className={`${props.commentMode}`} id="li_1" onClick={event => handleCommentClick(event)}>What is it?</li>
                            <li className={`${props.commentMode}`} id="li_2" onClick={event => handleCommentClick(event)}>Where did you get it from / how did you make it?</li>
                            <li className={`${props.commentMode}`} id="li_3" onClick={event => handleCommentClick(event)}>Where is this usually kept in your house?</li>
                            <li className={`${props.commentMode}`} id="li_4" onClick={event => handleCommentClick(event)}>Have you had it for a long time?</li>
                        </ul>
                    </div>
                </div>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Page4);

