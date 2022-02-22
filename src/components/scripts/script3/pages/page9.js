import allEars from "../../pictures/allears.png"
import pause from "../../pictures/pause.png"

import { connect } from 'react-redux';

import { toggleCommentMode } from '../../../../actions/comment';
import { patchTexts, postTexts } from '../../../../actions/text';

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
                    <p className={props.commentMode} id="p_1" onClick={event => handleCommentClick(event)}>
                        Today we talked about a lot!<br/>
                        We mostly focused on symptoms and self-monitoring.<br/><br/>
                        Some of my symptoms are: <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_9_script_3" defaultValue={getValue("text_box_number_1_page_9_script_3")} /><br/>
                        Do you remember what some of your symptoms are?
                    </p>
                    <div id="instruction_box_number_1_page_9_script_3" className={`custom_svg demo_box ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                        <p className="top_line_in_instruction_box">If your mentee does not remember, share the card sort link: <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_9_script_3" defaultValue={getValue("text_box_number_2_page_9_script_3")} /></p>
                    </div>
                    <br/><br/>
                    <p className={props.commentMode} id="p_2" onClick={event => handleCommentClick(event)}>
                        Self-monitoring is thinking about how we feel. What are some reasons that you think self-monitoring can help with your mental health? 
                    </p>
                    <br/><br/>
                    <img src={pause} alt="Pause" className={`pause ${props.commentMode}`} id="pause" onClick={event => handleCommentClick(event)} />
                    <img src={allEars} alt="All ears" className={`allEars ${props.commentMode}`} id="allEars" onClick={event => handleCommentClick(event)} />
                    <br/><br/><br/>
                    <p className={props.commentMode} id="p_3" onClick={event => handleCommentClick(event)}>
                        What are some ways that your body feels when you are <textarea onChange={event => handleChange(event)} id="text_box_number_3_page_9_script_3" defaultValue={getValue("text_box_number_3_page_9_script_3")} />.
                        <br/><br/><br/>
                        Remember to practice self-monitoring this week. You can use the body scan worksheet app or the worksheets we mailed you. 
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
