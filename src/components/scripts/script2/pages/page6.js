import allEars from "../../pictures/allears.png";
import pause from "../../pictures/pause.png";
import stopShare from "../../pictures/stopshare.png";
import shareScreen from "../../pictures/sharescreen.png";
import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';
import { toggleCommentMode } from '../../../../actions/comment';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';

const Page6 = (props) => {

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
                <h1 className={`bold center ${props.commentMode}`} id="h1" onClick={event => handleCommentClick(event)}>Mental Health Worksheet</h1>
                <div className="left container_for_medium_margin">
                    <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_1">What does mental health mean to you? </p>
                    <img className={`${props.commentMode} pause`} onClick={event => handleCommentClick(event)} id="pause" src={pause} alt="pause" />
                    <img className={`${props.commentMode} allEars`} onClick={event => handleCommentClick(event)} id="allEars" src={allEars} alt="All ears" />
                    <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_2">
                        Let's work together to find pictures that describe mental health.<br/>
                        You can do a search online or share pictures you have taken. <br/>
                        Or, you can send me an emoji or a GIF to show me what mental health means to you. <br/><br/>
                        There is no right or wrong way to do  I can help you if you want.<br/><br/>
                        Here is an example.
                    </p>
                    <div className="div_for_controlling_wrapping">
                        <div id="instruction_box_number_1_page_6_script_2" className={`ital custom_svg demo_box container_for_medium_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)} >
                            <p className="top_line_in_instruction_box">
                                Share your screen to show your picture<br/><br/>
                                Link to your picture: <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_6_script_2" defaultValue={getValue("text_box_number_1_page_6_script_2")} />
                            </p>
                        </div>

                        <img className={props.commentMode} onClick={event => handleCommentClick(event)} src={shareScreen} alt="Share Screen" id="share_your_screen_page_6_script_2" />
                    </div>
                    <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_2">I picked this picture because<br/>
                        <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_6_script_2" defaultValue={getValue("text_box_number_2_page_6_script_2")} />
                    </p>
                    <br/>
                    <img className={props.commentMode} onClick={event => handleCommentClick(event)} src={stopShare} alt="Stop share" id="stop_sharing_screen_page_6_script_2" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Page6);