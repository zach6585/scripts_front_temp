import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import { patchTexts, postTexts } from '../../../../actions/text';
import { toggleCommentMode } from '../../../../actions/comment';

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
                <div className='left'>
                    <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_1">
                        I'm excited to play it with you for the first time!<br/>
                        You will think about two things that are true about yourself. You will also make something up about yourself.  In this game, it's okay to make something up about yourself! It's part of the fun.<br/> 
                        Then, tell me all three things.  But don't tell me which are true and which is not true.<br/><br/>
                        Here is an example:
                    </p>

                    <div className="container_for_small_margin">
                        <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_2">I <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_6_script_1" defaultValue={getValue("text_box_number_1_page_6_script_1")} /></p>
                        <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_3">I <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_6_script_1" defaultValue={getValue("text_box_number_2_page_6_script_1")} /></p>
                        <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_4">These two things are true about me.</p>
                    </div>

                    <div className="container_for_small_margin">
                        <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_5">
                            But I do not <textarea onChange={event => handleChange(event)} id="text_box_number_3_page_6_script_1" defaultValue={getValue("text_box_number_3_page_6_script_1")} />.
                            This thing is a lie, or something not true.<br/>
                            When we play, you will guess what thing is NOT true. <br/>
                            You will also tell me two things that are true and one thing that is NOT true. I will guess which is NOT true. 
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

export default connect(mapStateToProps, mapDispatchToProps)(Page6);