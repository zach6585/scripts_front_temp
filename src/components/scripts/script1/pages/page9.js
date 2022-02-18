import allEars from "../../pictures/allears.png"
import pause from "../../pictures/pause.png"
import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';
import { toggleCommentMode } from '../../../../actions/comment';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';

const Page9 = (props) => {

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
                <div className="left container_for_small_margin">
                    <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_1">
                        Today we talked about a lot!<br/>
                        We mostly focused on symptoms.<br/><br/>
                        Some of my symptoms are: <br/>
                        <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_9_script_2" defaultValue={getValue("text_box_number_1_page_9_script_2")} /><br/>
                        Do you remember what some of your symptoms are?
                    </p>
                    <img className={`pause ${props.commentMode}`} onClick={event => handleCommentClick(event)} src={pause} alt="Pause" />
                    <img className={`allEars ${props.commentMode}`} onClick={event => handleCommentClick(event)} src={allEars} alt="All ears" />
                    <br/><br/><br/><br/>
                    <div id="instruction_box_number_1_page_9_script_2" className={`ital custom_svg demo_box container_for_large_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                        <p className="top_line_in_instruction_box">
                            Help your mentee look at the symptom cards. <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_9_script_2" defaultValue={getValue("text_box_number_2_page_9_script_2")} /><br/>
                            Share your screen to show them the card sort.
                        </p>
                    </div>
                    <div className='container_for_large_margin'>
                        <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_2">
                            This week, try to pay attention to how you feel. <br/>
                            If you have any symptoms, try to notice when they happen. We can talk about them next week. This is an important first step for helping you with your mental health and working together.
                        </p>  
                    </div>
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
